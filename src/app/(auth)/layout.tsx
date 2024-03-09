import React from 'react';
import LoginRegisterTab from './components/LoginRegisterTab';
import SocialLogin from './components/SocialLogin';
import Button from '@/components/shared/Button/Button';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='wrapper mt-8'>
            {/* back to home button */}
            <Link href={'/'}>
                <Button variant={"secondary"}>
                    <BiArrowBack className='mr-2' /> Back To Home
                </Button>
            </Link>

            <div className='flex items-center justify-center min-h-[85vh]'>
                <div className='max-w-xl w-full border-2 rounded-md px-3 md:px-6 py-8'>
                    <LoginRegisterTab />
                    {children}
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default RootLayout;