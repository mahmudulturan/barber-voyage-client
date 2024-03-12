"use client"
import React from 'react';
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

const Sidebar = () => {
    const user = useSelector((state: RootState) => state.usersSlice);
    const [logoutUser, { isLoading: isLogoutLoading }] = useLazyLogOutUserQuery();
    const dispatch = useDispatch();

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
        <div className='fixed flex flex-col h-full w-full lg:w-80 px-3'>
            <div className='flex items-center justify-center my-2'>
                <Link href={'/'} className='w-32'>
                    <Image width={126} src={logo} priority={true} alt='Logo of barber voyage' />
                </Link>
            </div>
            <div className='flex-1'>
                <MenuLinks />
            </div>
            <div className='my-6'>
                <Button
                    variant={"primary"}
                    className="w-full  gap-2"
                    disabled={isLogoutLoading}
                    onClick={handleLogout}>
                    <CiLogout className='text-xl font-semibold' />
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default Sidebar;