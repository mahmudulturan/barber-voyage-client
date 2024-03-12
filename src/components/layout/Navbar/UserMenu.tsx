import Button from "@/components/shared/Button/Button";
import { useLazyLogOutUserQuery } from "@/redux/api/usersApi/usersApi";
import { removeUser } from "@/redux/slices/usersSlice/usersSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

type userMenuProps = {
    isScrolling: boolean;
    prevPosition: number;
    userMenuOpen: boolean;
    userMenuRef?: React.RefObject<HTMLDivElement>;

}

const UserMenu = ({ isScrolling, prevPosition, userMenuOpen, userMenuRef }: userMenuProps) => {
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
        <div
            ref={userMenuRef}
            className={`absolute right-0 top-20 bg-seconderyCol z-30 w-60 py-3 px-3 rounded-md flex flex-col gap-2 duration-300 
        ${isScrolling ? "bg-seconderyCol" : "bg-textCol/80"} 
        ${userMenuOpen ? "translate-y-100" : "-translate-y-[500px]"}
        ${isScrolling || (prevPosition <= 250) ? "" : "-translate-y-full"}`}>
            {
                user?.isAuthenticate ?
                    <>
                        <Button variant={"primaryReverse"} className="w-full">Dashboard</Button>
                        <Button variant={"primaryReverse"} className="w-full" disabled={isLogoutLoading} onClick={handleLogout}>Logout</Button>
                    </>
                    :
                    <Link href='/login'>
                        <Button variant={"primaryReverse"} className="w-full">
                            Login
                        </Button>
                    </Link>
            }
        </div>
    );
};

export default UserMenu;