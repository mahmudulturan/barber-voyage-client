
import Navbar from "@/components/layout/Navbar/Navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col bg-seconderyCol">
            <Navbar />
            <main className="flex-1">{children}</main>
        </div>
    );
};

export default RootLayout;