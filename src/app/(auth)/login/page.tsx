
import React from 'react';
import LoginForm from './components/LoginForm';

const LoginPage = () => {

    return (
        <div className='max-w-xl mx-auto w-full'>
            <h3 className='text-xl md:text-4xl uppercase font-semibold text-center my-6'>Login to <span className='text-primaryCol'>Barber Voyage</span></h3>
            <div>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;