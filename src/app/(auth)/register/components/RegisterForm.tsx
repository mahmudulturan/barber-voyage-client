"use client"
import Button from '@/components/shared/Button/Button';
import InputWithLabel from '@/components/shared/Input/InputWithLabel';
import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const RegisterForm = () => {
    const [loading, setLoading] = useState(false);


    // handler for login a user
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email = form.email.value;
        console.log(email);
    }
    return (
        <form action="" onSubmit={handleSubmit} className='space-y-4'>
            <InputWithLabel name='name' placeholder='Name' id='name' />
            <InputWithLabel name='email' placeholder='Email' id='email' />
            <InputWithLabel name='password' placeholder='Password' id='password' />
            <Button variant={"primaryReverse"} className='w-full' onClick={() => setLoading(pre => !pre)}>
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