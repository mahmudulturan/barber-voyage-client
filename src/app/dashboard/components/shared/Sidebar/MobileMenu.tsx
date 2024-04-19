import React from 'react';
import MenuLinks from './MenuLinks';
import Button from '@/components/shared/Button/Button';
import { useLazyLogOutUserQuery } from '@/redux/api/usersApi/usersApi';
import toast from 'react-hot-toast';
import { removeUser } from '@/redux/slices/usersSlice/usersSlice';
import { useDispatch } from 'react-redux';
import { CiLogout } from 'react-icons/ci';


type mobileMenuProps = {
    isMenuOpen: boolean;
}

const MobileMenu = ({ isMenuOpen }: mobileMenuProps) => {
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
        <div className={`w-80 absolute px-3 bg-seconderyCol min-h-screen duration-300 origin-left ${isMenuOpen ? "scale-x-100" : "scale-x-0"}`}>
            <MenuLinks />
            <Button
                variant={"primary"}
                className="w-full  gap-2"
                disabled={isLogoutLoading}
                onClick={handleLogout}>
                <CiLogout className='text-xl font-semibold' />
                Logout
            </Button>
        </div>
    );
};

export default MobileMenu;