"use client"
import React, { useState } from 'react';
import Button from '@/components/shared/Button/Button';
import InputWithLabel from '@/components/shared/Input/InputWithLabel';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLoginUserMutation } from '@/redux/api/usersApi/usersApi';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export type LoginInputs = {
    email: string;
    password: string;
    message : string;
}

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<LoginInputs>()
    const [loginUser, { isLoading: isLoginLoading }] = useLoginUserMutation();

    const router = useRouter();

    // handle for login user
    const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
        const email = data.email;
        const password = data.password;
        const userInfo = { email, password };

        // login in user with email and password
        const dbResponsePromise = loginUser(userInfo).unwrap();
        toast.promise(
            dbResponsePromise,
            {
                loading: 'Logging in...',
                success: (data: { message: string }) => {
                    router.push('/')
                    reset();
                    return `${data.message}`
                },
                error: (err) => `${err?.data?.error || "Registration Failed"}`,
            }
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>

            {/* email input field */}
            <InputWithLabel
                {...register("email", { required: true })}
                autoComplete='username'
                name='email' placeholder='Email' id='email' type='email' />
            {errors.email && <span className='text-red-400'>Email is required!</span>}

            {/* password input field */}
            <div className='relative'>
                <InputWithLabel
                    {...register("password", { required: true })}
                    autoComplete="current-password"
                    name='password' placeholder='Password' id='password' type={showPassword ? "text" : "password"} />

                {/* show password toggle */}
                <span
                    className='absolute top-3 text-2xl right-3 cursor-pointer px-0.5 py-0.5'
                    onClick={() => setShowPassword(pre => !pre)}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>
            {errors.password && <span className='text-red-400'>Password is required!</span>}

            {/* Login Button */}
            <Button
                variant={"primaryReverse"}
                className='w-full'
                type='submit'
                disabled={isLoginLoading}
            >
                Login
            </Button>
        </form>
    );
};

export default LoginForm;