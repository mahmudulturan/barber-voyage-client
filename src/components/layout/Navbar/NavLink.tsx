'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLink = ({ href, children }: { href: string, children: string }) => {
    const pathname = usePathname()
    return (
        <Link
            href={href}
            className={`font-medium text-xl px-5 py-1.5 text-textCol relative group`}>
            <span
                className={`absolute inset-x-0 top-0 h-1 bg-primaryCol transition-all group-hover:bg-white  origin-center transform  duration-300 ${pathname !== href && "scale-x-0 group-hover:scale-x-100"}`}></span>
            {children}
            <span
                className={`absolute inset-x-0 -bottom-1 h-1 bg-primaryCol transition-all group-hover:bg-white  origin-center transform  duration-300 ${pathname !== href && "scale-x-0 group-hover:scale-x-100"}`}></span>
        </Link>
    );
};

export default NavLink;