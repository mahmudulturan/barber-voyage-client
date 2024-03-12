import React from 'react';
import Sidebar from './components/shared/Sidebar/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>
            <div className='lg:w-80 bg-seconderyCol min-h-screen'>
                <Sidebar />
            </div>
            <div className='flex-1 min-h-screen'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;