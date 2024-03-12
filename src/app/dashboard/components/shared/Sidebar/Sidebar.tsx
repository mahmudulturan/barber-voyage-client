import React from 'react';
import logo from '@/assets/images/logo/BarberVoyageLogo.png'
import Link from 'next/link';
import Image from 'next/image';
const Sidebar = () => {
    return (
        <div className='fixed flex flex-col h-full w-full lg:w-80'>
            <div className='border border-green-300 flex items-center justify-center my-2'>
                <Link href={'/'} className='w-32'>
                    <Image width={126} src={logo} alt='Logo of barber voyage' />
                </Link>
            </div>
            <div className='bg-slate-200 flex-1'>
                main
            </div>
            <div>
                bottom
            </div>
        </div>
    );
};

export default Sidebar;