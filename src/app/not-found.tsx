"use client"
import React from 'react';
import notFoundAnimation from '@/assets/animations/notFoundAnimation.json';
import Lottie from 'lottie-react';

const error = () => {
    return (
        <div className='min-h-screen flex items-center justify-center wrapper'>
            <div className='w-96'>
                <h1 className='text-center text-3xl -mb-6'>Page Not Found!!</h1>
                <Lottie animationData={notFoundAnimation} loop={true} />
            </div>
        </div>
    );
};

export default error;