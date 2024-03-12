"use client"
import Button from '@/components/shared/Button/Button';
import Link from 'next/link';
import React from 'react';
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { FaUsersGear } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { FaSackDollar } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const MenuLinks = () => {
    return (
        <div>
            <div className='my-6'>
                <h5 className='text-textCol'>Pages</h5>
                <div className='flex flex-col gap-2 justify-center h-full my-2'>
                    <Link href={'/dashboard'}>
                        <Button variant={"sidebar"}>
                            <MdDashboard className='text-xl' />
                            Dashboard
                        </Button>
                    </Link>
                    <Link href={'/'}>
                        <Button variant={"sidebar"}>
                            <CiShop className='text-xl' />
                            Appointments
                        </Button>
                    </Link>
                    <Link href={'/'}>
                        <Button variant={"sidebar"}>
                            <FaUsersGear className='text-xl' />
                            Subscribers
                        </Button>
                    </Link>
                    <Link href={'/'}>
                        <Button variant={"sidebar"}>
                            <FaSackDollar className='text-xl' />
                            Transactions
                        </Button>
                    </Link>
                    <Link href={'/'}>
                        <Button variant={"sidebar"}>
                            <GrUserWorker className='text-xl' />
                            Manage Barbers
                        </Button>
                    </Link>
                    <Link href={'/'}>
                        <Button variant={"sidebar"} className='w-full justify-start gap-2'>
                            <FaUsersGear className='text-xl' />
                            Manage Customers
                        </Button>
                    </Link>
                </div>
            </div>
            <div className='my-6'>
                <h5 className='text-textCol'>Users</h5>
                <div className='flex flex-col gap-2 justify-center h-full my-2'>
                    <Link href={'/'}>
                        <Button variant={"sidebar"}>
                            <CgProfile className='text-xl' />
                            Profile Settings
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MenuLinks;