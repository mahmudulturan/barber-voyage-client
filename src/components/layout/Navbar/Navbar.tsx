"use client"
import logo from '@/assets/images/logo/BarberVoyageLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import Button from '@/components/shared/Button/Button';
import { useEffect, useState } from 'react';
import { RiMenuLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import UserMenu from './UserMenu';

const Navbar = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [prevPosition, setPrevPosition] = useState(0);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const onScroll = () => {
        const currentPosition = window.scrollY;
        /* isScrolling state will be true when scroll up and current scroll position greater than 50.
         or current current position beetween 50-250 it will also return true */
        setIsScrolling(prevPosition > currentPosition && currentPosition >= 50 || prevPosition < currentPosition && (currentPosition >= 50 && currentPosition <= 250));
        setPrevPosition(currentPosition);
    };

    // handle sideeffect for scroll
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [prevPosition]);


    // user menu toggle handler
    const userMenuToggler = () => {
        setUserMenuOpen(pre => !pre);
    }

    return (
        <nav className={`fixed w-full z-40 mb-24 duration-300 ${isScrolling ? "bg-seconderyCol" : "bg-transparent"} ${isScrolling || (prevPosition <= 250) ? "" : " -translate-y-full"}`}>
            <div className='wrapper flex items-center justify-between py-4 relative'>
                <div>
                    <Link href={'/'} className='w-32'>
                        <Image width={126} src={logo} alt='Logo of barber voyage' />
                    </Link>
                </div>
                <div className='flex gap-5'>
                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/explore'>Explore</NavLink>
                    <NavLink href='/about'>About</NavLink>

                    {/* user menu dropdown button */}
                    <Button 
                    onClick={userMenuToggler} 
                    variant={userMenuOpen? "primaryReverse" : "primary"}
                    className={`rounded-full text-xl gap-2`}>
                        <RiMenuLine /> <FaUserCircle />
                    </Button>
                </div>
                <UserMenu isScrolling={isScrolling} prevPosition={prevPosition} userMenuOpen={userMenuOpen} />
            </div>
        </nav>
    );
};

export default Navbar;