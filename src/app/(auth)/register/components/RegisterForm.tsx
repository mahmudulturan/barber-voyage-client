"use client"
import Button from '@/components/shared/Button/Button';
import InputWithLabel from '@/components/shared/Input/InputWithLabel';
import { useRegisterUserMutation } from '@/redux/api/usersApi/usersApi';
import { RegisterInputs } from '@/types/types';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<RegisterInputs>()
    const [registerUser, { isLoading: isRegistering }] = useRegisterUserMutation();

    const router = useRouter();

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
                success: (data: { message: string }) => {
                    router.push('/login')
                    reset();
                    return `${data.message}`
                },
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
                    {...register("password", { required: true, minLength: 6, maxLength: 32, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/ })}
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
            {errors.password?.type === "required" && <span className='text-red-400'>Password is required!</span>}
            {errors.password?.type === "minLength" && <span className='text-red-400'>Password must be at least 6 characters long.</span>}
            {errors.password?.type === "maxLength" && <span className='text-red-400'>Password cannot exceed 32 characters.</span>}
            {errors.password?.type === "pattern" && <span className='text-red-400'>Use a strong password.</span>}

            {/* register button */}
            <Button variant={"primaryReverse"} type='submit' disabled={isRegistering} className='w-full'>
                Register
            </Button>
        </form>
    );
};

export default RegisterForm;