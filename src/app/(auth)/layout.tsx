import React from 'react';
import LoginRegisterTab from './components/LoginRegisterTab';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='min-h-[50vh] max-w-xl w-full border-2 rounded-md px-3 md:px-6 py-8'>
                <LoginRegisterTab />
                {children}
            </div>
        </div>
    );
};

export default RootLayout;