"use client"
import Button from "@/components/shared/Button/Button";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {

    // handler for login with google
    const handleGoogleLogin = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/auth/google`;
    }

    return (
        <div className="text-center mt-3">
            <span>or</span>
            <h6 className="font-medium">Continue With</h6>
            <div className="flex gap-3 justify-center items-center mt-2">
                <Button onClick={handleGoogleLogin} variant={"primaryReverse"} className="text-xl"> <FaGoogle /> </Button>
                <Button variant={"primaryReverse"} className="text-xl"> <FaFacebook /> </Button>
            </div>
        </div>
    );
};

export default SocialLogin;