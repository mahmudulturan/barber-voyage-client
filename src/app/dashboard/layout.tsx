import React from 'react';
import Sidebar from './components/shared/Sidebar/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col lg:flex-row'>
            <div className='lg:min-h-screen lg:w-80 relative'>
                <Sidebar />
            </div>
            <div className='flex-1 min-h-screen border'>
                {children}
                <div className="min-h-screen"></div>
                <div className="min-h-screen"></div>
                <div className="min-h-screen"></div>
            </div>
        </div>
    );
};

export default DashboardLayout;