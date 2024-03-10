"use client"
import logo from '@/assets/images/logo/BarberVoyageLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Button from '@/components/shared/Button/Button';
import { useLazyLogOutUserQuery, } from '@/redux/api/usersApi/usersApi';
import toast from 'react-hot-toast';
import { removeUser } from '@/redux/slices/usersSlice/usersSlice';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [prevPosition, setPrevPosition] = useState(0);
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

    return (
        <nav className={`fixed w-full z-40 mb-24 duration-300 ${isScrolling ? "bg-seconderyCol" : "bg-transparent"} ${isScrolling || (prevPosition <= 250) ? "" : " -translate-y-full"}`}>
            <div className='wrapper flex items-center justify-between py-4'>
                <div>
                    <Link href={'/'} className='w-32'>
                        <Image width={126} src={logo} alt='Logo of barber voyage' />
                    </Link>
                </div>
                <div className='flex gap-5'>
                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/about'>About</NavLink>
                    {
                        user?.isAuthenticate ?
                            <Button disabled={isLogoutLoading} onClick={handleLogout}>Logout</Button>
                            :
                            <NavLink href='/login'>Login</NavLink>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;