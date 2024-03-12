"use client"
import Link from "next/link";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
import React, { LinkHTMLAttributes } from "react";

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
    active: "primary" | "secondary" | "primaryReverse" | "icon" | "sidebar" | "activeSidebar";
    other: "primary" | "secondary" | "primaryReverse" | "icon" | "sidebar" | "activeSidebar";
}

const NavLink = ({ href, children, active, other, ...props }: NavLinkProps) => {
    const pathname = usePathname();
    return (
        <Link href={href} {...props}>
            <Button variant={pathname === href ? active : other}>
                {children}
            </Button>
        </Link>
    );
};

export default NavLink;