import Button from '@/components/shared/Button/Button';
import { useLazyLogOutUserQuery } from '@/redux/api/usersApi/usersApi';
import { removeUser } from '@/redux/slices/usersSlice/usersSlice';
import { RootState } from '@/redux/store';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { FiLogOut  } from "react-icons/fi";

type mobileMenuProps = {
    isScrolling: boolean;
    prevPosition: number;
    mobileMenuOpen: boolean;
}

const MobileMenu = ({ isScrolling, prevPosition, mobileMenuOpen }: mobileMenuProps) => {
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
        <div className={`absolute right-0 top-20 bg-seconderyCol z-30 w-full py-3 px-3 flex flex-col md:hidden gap-2 duration-200 origin-left
        ${isScrolling ? "bg-seconderyCol" : "bg-textCol/80"} 
        ${mobileMenuOpen ? "scale-x-100" : "scale-x-0"}
        ${isScrolling || (prevPosition <= 250) ? "" : "-translate-y-full"}`}
        >
            <Button variant={"primaryReverse"}><Link href='/'>Home</Link></Button>
            <Button variant={"primaryReverse"}><Link href='/explore'>Explore</Link></Button>
            <Button variant={"primaryReverse"}><Link href='/about'>About</Link></Button>
            {
                user?.isAuthenticate ?
                    <>
                        <Link href={'/dashboard'}>
                            <Button variant={"primaryReverse"} className="w-full">Dashboard</Button>
                        </Link>
                        <Button variant={"primaryReverse"} className="w-full" disabled={isLogoutLoading} onClick={handleLogout}>
                            <FiLogOut className='font-semibold mr-1' />
                            Logout
                        </Button>
                    </>
                    :
                    <>
                        <Link href='/login'>
                            <Button variant={"primaryReverse"} className="w-full">
                                Login
                            </Button>
                        </Link>
                        <Link href='/register'>
                            <Button variant={"primaryReverse"} className="w-full">
                                Register
                            </Button>
                        </Link>
                    </>
            }
        </div>
    );
};

export default MobileMenu;