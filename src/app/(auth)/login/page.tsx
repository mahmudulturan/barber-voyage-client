
import React from 'react';
import LoginForm from './components/LoginForm';

const LoginPage = () => {

    return (
        <div className='max-w-xl mx-auto border w-full py-6 px-6 rounded-md'>
            <h3 className='text-textCol text-xl md:text-4xl uppercase font-semibold text-center mb-6'>Sign In to <span className='text-primaryCol'>Barber Voyage</span></h3>
            <div>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;