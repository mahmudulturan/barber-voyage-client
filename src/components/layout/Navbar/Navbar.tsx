"use client"
import logo from '@/assets/images/logo/BarberVoyageLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import Button from '@/components/shared/Button/Button';
import { useEffect, useRef, useState } from 'react';
import { RiMenuLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import UserMenu from './UserMenu';
import { usePathname } from 'next/navigation';
import { IoMenuSharp } from "react-icons/io5";
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [prevPosition, setPrevPosition] = useState(0);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const userMenuRef = useRef<HTMLDivElement | null>(null);
    const userToggleButtonRef = useRef<HTMLButtonElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);
    const mobileToggleButtonRef = useRef<HTMLButtonElement>(null);

    const pathname = usePathname();


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

    // mobile menu toggle handler
    const mobileMenuToggler = () => {
        setMobileMenuOpen(pre => !pre);
    }


    // user menu outside click handler
    const handleClickOutside = (event: Event) => {
        if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node) && userToggleButtonRef.current && !userToggleButtonRef.current.contains(event.target as Node)) {
            setUserMenuOpen(false);
        }
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && mobileToggleButtonRef.current && !mobileToggleButtonRef.current.contains(event.target as Node)) {
            setMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        // Add the event listener when the component mounts
        document.addEventListener("mousedown", handleClickOutside);
        // Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className={`sticky top-0 w-full z-40 duration-300 ${isScrolling || pathname !== '/' ? "bg-seconderyCol" : "bg-transparent"} ${isScrolling || (prevPosition <= 250) ? "" : " -translate-y-full"}`}>
            <div className='wrapper flex items-center justify-between py-4 relative'>
                <div>
                    <Link href={'/'} className='w-32'>
                        <Image width={126} src={logo} alt='Logo of barber voyage' />
                    </Link>
                </div>


                {/* navlinks for larger devices start */}
                <div className='hidden md:flex gap-5'>
                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/explore'>Explore</NavLink>
                    <NavLink href='/about'>About</NavLink>

                    {/* user menu dropdown button */}
                    <Button
                        ref={userToggleButtonRef}
                        onClick={userMenuToggler}
                        variant={userMenuOpen ? "primaryReverse" : "primary"}
                        className={`rounded-full text-xl gap-2`}>
                        <RiMenuLine /> <FaUserCircle />
                    </Button>
                </div>
                {/* navlinks for larger devices end */}

                {/* mobile menu dropdown button */}
                <Button
                    ref={mobileToggleButtonRef}
                    onClick={mobileMenuToggler}
                    variant={mobileMenuOpen ? "primaryReverse" : "primary"}
                    className={`rounded-full md:hidden text-xl gap-2`}>
                    <IoMenuSharp />
                </Button>

                {/* mobile dropdown menu */}
                <MobileMenu isScrolling={isScrolling} mobileMenuRef={mobileMenuRef} prevPosition={prevPosition} mobileMenuOpen={mobileMenuOpen} />

                {/* user dropdown menu */}
                <UserMenu isScrolling={isScrolling} userMenuRef={userMenuRef} prevPosition={prevPosition} userMenuOpen={userMenuOpen} />
            </div>
        </nav>
    );
};

export default Navbar;