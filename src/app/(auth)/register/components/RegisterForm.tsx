"use client"
import Button from '@/components/shared/Button/Button';
import InputWithLabel from '@/components/shared/Input/InputWithLabel';
import { useRegisterUserMutation } from '@/redux/api/usersApi/usersApi';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';

export type RegisterInputs = {
    message: string;
    name: string;
    email: string;
    password: string;
}

const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterInputs>()
    const [registerUser, { isLoading: isRegistering }] = useRegisterUserMutation();

    // handle for login user
    const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const userInfo = { name, email, password };

        // registering user with userInfo
        const dbResponsePromise = registerUser(userInfo).unwrap();
        toast.promise(
            dbResponsePromise,
            {
                loading: 'Registering...',
                success: (data) => `${data.message}`,
                error: (err) => `${err?.data?.error || "Registration Failed"}`,
            }
        );
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>

            {/* name input field */}
            <InputWithLabel
                {...register("name", { required: true })}
                name='name' placeholder='Name' id='name' />
            {errors.name && <span className='text-red-400'>Name is required!</span>}


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

            {/* register button */}
            <Button variant={"primaryReverse"} type='submit' disabled={isRegistering} className='w-full'>
                Register
            </Button>
        </form>
    );
};

export default RegisterForm;