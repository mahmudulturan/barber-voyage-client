"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import tabStyle from './tab.module.css';

const LoginRegisterTab = () => {
    const pathname = usePathname();
    return (
        <div>
            <div className='flex items-center justify-center gap-4'>
                <Link href={'/login'} className={`${tabStyle.tab} ${pathname === '/login' ? tabStyle.activeTab : tabStyle.otherTab}`}>
                    Login
                </Link>
                <Link href={'/register'} className={`${tabStyle.tab} ${pathname === '/register' ? tabStyle.activeTab : tabStyle.otherTab}`}>
                    Register
                </Link>
            </div>
        </div>
    );
};

export default LoginRegisterTab;