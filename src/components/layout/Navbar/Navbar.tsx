import logo from '@/assets/images/logo/BarberVoyageLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <nav className='bg-transparent fixed w-full mb-24'>
            <div className='wrapper flex items-center justify-between py-4'>
                <div>
                    <Link href={'/'} className='w-32'>
                        <Image width={126} src={logo} alt='Logo of barber voyage' />
                    </Link>
                </div>
                <div className='flex gap-5'>
                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/about'>About</NavLink>
                    <NavLink href='/login'>Login</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;