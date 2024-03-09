"use client"
import React, { useState } from 'react';
import Button from '@/components/shared/Button/Button';
import InputWithLabel from '@/components/shared/Input/InputWithLabel';
import { FaSpinner } from 'react-icons/fa';

const LoginForm = () => {
    const [loading, setLoading] = useState(false);


    // handler for login a user
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email = form.email.value;
        console.log(email);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit} className='space-y-4'>
                <InputWithLabel name='email' placeholder='Email' id='login_email'  />
                <InputWithLabel name='password' placeholder='Password' id='login_password' />
                <Button variant={"primaryReverse"} className='w-full' onClick={() => setLoading(pre => !pre)}>
                    {
                        loading ?
                            <FaSpinner className='text-2xl py-0.5 animate-spin' />
                            :
                            "Login"
                    }
                </Button>
            </form>
        </div>
    );
};

export default LoginForm;