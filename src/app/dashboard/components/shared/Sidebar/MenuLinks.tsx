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
import NavLink from '@/components/shared/NavLink/NavLink';
import { IoIosSettings } from "react-icons/io";

const MenuLinks = () => {
    return (
        <div>
            <div className='my-6'>
                <h5 className='text-textCol'>Pages</h5>
                <div className='flex flex-col gap-2 justify-center h-full my-2'>
                    <NavLink active='activeSidebar' other='sidebar' href='/dashboard'>
                        <MdDashboard className='text-xl' />
                        Dashboard
                    </NavLink>
                    <NavLink active='activeSidebar' other='sidebar' href='/'>
                        <CiShop className='text-xl' />
                        Appointments
                    </NavLink>
                    <NavLink active='activeSidebar' other='sidebar' href='/'>
                        <FaUsersGear className='text-xl' />
                        Subscribers
                    </NavLink>
                    <NavLink active='activeSidebar' other='sidebar' href='/'>
                        <FaSackDollar className='text-xl' />
                        Transactions
                    </NavLink>
                    <NavLink active='activeSidebar' other='sidebar' href='/'>
                        <GrUserWorker className='text-xl' />
                        Manage Barbers
                    </NavLink>
                    <NavLink active='activeSidebar' other='sidebar' href='/'>
                        <FaUsersGear className='text-xl' />
                        Manage Customers
                    </NavLink>
                    <NavLink active='activeSidebar' other='sidebar' href='/'>
                        <IoIosSettings className='text-xl' />
                        Manage Shop
                    </NavLink>
                    <NavLink active='activeSidebar' other='sidebar' href='/'>
                        <CgProfile className='text-xl' />
                        Profile Settings
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MenuLinks;