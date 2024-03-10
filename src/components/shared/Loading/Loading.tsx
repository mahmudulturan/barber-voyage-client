import React from 'react';
import loadingAnimation from '@/assets/animations/loadingAnimation.json';
import Lottie from 'lottie-react';
const Loading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='w-96'>
                <Lottie animationData={loadingAnimation} loop={true} />
            </div>
        </div>
    );
};

export default Loading;