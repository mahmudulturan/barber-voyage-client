"use client"
import Button from '@/components/shared/Button/Button';
import InputWithLabel from '@/components/shared/Input/InputWithLabel';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';

type RegisterInputs = {
    name: string;
    email: string;
    password: string;
}

const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterInputs>()

    // handle for login user
    const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const userInfo = { name, email, password };
        console.log(userInfo);
        setLoading(pre => !pre)
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
            <Button variant={"primaryReverse"} className='w-full'>
                {
                    loading ?
                        <FaSpinner className='text-2xl py-0.5 animate-spin' />
                        :
                        "Register"
                }
            </Button>
        </form>
    );
};

export default RegisterForm;