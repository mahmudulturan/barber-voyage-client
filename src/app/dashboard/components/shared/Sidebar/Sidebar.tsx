"use client"
import React, { useState } from 'react';
import logo from '@/assets/images/logo/BarberVoyageLogo.png'
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/shared/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useLazyLogOutUserQuery } from '@/redux/api/usersApi/usersApi';
import toast from 'react-hot-toast';
import { removeUser } from '@/redux/slices/usersSlice/usersSlice';
import { CiLogout } from "react-icons/ci";
import MenuLinks from './MenuLinks';
import { RxCross2 } from 'react-icons/rx';
import { IoMenuSharp } from 'react-icons/io5';
import MobileMenu from './MobileMenu';

const Sidebar = () => {
    const user = useSelector((state: RootState) => state.usersSlice);
    const [logoutUser, { isLoading: isLogoutLoading }] = useLazyLogOutUserQuery();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();


    // mobile menu toggle handler
    const handleMenuToggler = () => {
        setIsMenuOpen(pre => !pre);
    }

    // handler for logout user
    const handleLogout = () => {
        const dbResponse = logoutUser(undefined).unwrap();
        toast.promise(
            dbResponse,
            {
                loading: 'Logging out...',
                success: (data: { message: string }) => {
                    dispatch(removeUser())
                    return `${data.message}`
                },
                error: (err) => `${err?.data?.error || "Failed to Logout"}`,
            }
        );
    }
    return (
        <div className='fixed lg:flex flex-col lg:h-full w-full lg:w-80 bg-seconderyCol'>
            <div className='flex items-center justify-between my-2'>
                <Link href={'/'} className='w-32'>
                    <Image width={126} src={logo} priority={true} alt='Logo of barber voyage' />
                </Link>

                {/* menu dropdown button for smaller devices */}
                <Button
                    onClick={handleMenuToggler}
                    variant={isMenuOpen ? "primaryReverse" : "primary"}
                    className={`rounded-full lg:hidden text-2xl gap-2`}>
                    <div className='transition-opacity duration-200'>
                        {
                            isMenuOpen ?
                                <RxCross2 />
                                :
                                <IoMenuSharp />
                        }
                    </div>
                </Button>
            </div>
            <div className='flex-1 hidden lg:block'>
                <MenuLinks />
            </div>
            <div className='my-6 hidden lg:block'>
                <Button
                    variant={"primary"}
                    className="w-full  gap-2"
                    disabled={isLogoutLoading}
                    onClick={handleLogout}>
                    <CiLogout className='text-xl font-semibold' />
                    Logout
                </Button>
            </div>
            <div>
                <MobileMenu isMenuOpen={isMenuOpen} />
            </div>
        </div>
    );
};

export default Sidebar;