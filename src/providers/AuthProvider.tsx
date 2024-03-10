"use client"

import { useCurrentUserQuery } from "@/redux/api/usersApi/usersApi";
import { saveUser } from "@/redux/slices/usersSlice/usersSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { data: userData } = useCurrentUserQuery(undefined)
    const dispatch = useDispatch();

    // for save user after fetching the user from db
    useEffect(() => {
        const payloadObj = { isAuthenticate: false, user: null }
        
        // if the success is true then authenticate the user
        if (userData?.success) {
            payloadObj.isAuthenticate = true;
            payloadObj.user = userData?.user
        } else {
            payloadObj.isAuthenticate = false;
            payloadObj.user = null
        }
        dispatch(saveUser(payloadObj))
    }, [userData])

    return (
        <>
            {children}
        </>
    );
};

export default AuthProvider;