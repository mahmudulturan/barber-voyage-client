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

const Navbar = () => {
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
        <nav className='bg-transparent fixed w-full mb-24'>
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