"use client"
import React from 'react';
import Button from '@/components/shared/Button/Button';
import InputWithLabel from '@/components/shared/Input/InputWithLabel';

const LoginForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email = form.email.value;
        console.log(email);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit} className='space-y-4'>
                <InputWithLabel name='email' placeholder='Email' id='login_email' required />
                <InputWithLabel name='password' placeholder='Password' id='login_password' required />
                <Button variant={"primaryReverse"} className='w-full'>Login</Button>
            </form>
        </div>
    );
};

export default LoginForm;