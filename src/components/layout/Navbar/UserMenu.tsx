import Button from "@/components/shared/Button/Button";
import { useLazyLogOutUserQuery } from "@/redux/api/usersApi/usersApi";
import { removeUser } from "@/redux/slices/usersSlice/usersSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const UserMenu = ({ isScrolling, prevPosition }: { isScrolling: boolean, prevPosition: number }) => {
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
        <div className={`absolute right-0 top-20 bg-seconderyCol w-60 py-3 px-3 rounded-md flex flex-col gap-2 duration-300 ${isScrolling ? "bg-seconderyCol" : "bg-transparent"} ${isScrolling || (prevPosition <= 250) ? "" : "-translate-y-full"}`}>
            {
                user?.isAuthenticate ?
                    <>
                        <Button className="w-full">Dashboard</Button>
                        <Button className="w-full" disabled={isLogoutLoading} onClick={handleLogout}>Logout</Button>
                    </>
                    :
                    <Link href='/login'>
                        <Button className="w-full">
                            Login
                        </Button>
                    </Link>
            }
        </div>
    );
};

export default UserMenu;