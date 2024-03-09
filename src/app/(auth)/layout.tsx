import React from 'react';
import LoginRegisterTab from './components/LoginRegisterTab';
import SocialLogin from './components/SocialLogin';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='max-w-xl w-full border-2 rounded-md px-3 md:px-6 py-8'>
                <LoginRegisterTab />
                {children}
                <SocialLogin />
            </div>
        </div>
    );
};

export default RootLayout;