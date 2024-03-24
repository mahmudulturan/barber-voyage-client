import logo from '@/assets/images/logo/BarberVoyageLogo.png';
import Button from '@/components/shared/Button/Button';
import { Input } from '@/components/shared/Input/Input';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="bg-seconderyCol text-white">
            <div className="wrapper py-14">

                <div className='flex flex-col md:flex-row gap-6 justify-between'>
                    {/* logo and about section start */}
                    <div className='max-w-xs'>
                        <Link href={'/'}>
                            <Image width={126} src={logo} alt='logo of barber voyage' />
                        </Link>
                        <div className='my-3 max-w-80'>
                            <p>Barber Voyage is your compass to discover the perfect barber, navigating style and expertise seamlessly for grooming satisfaction.</p>
                        </div>
                    </div>
                    {/* logo and about section end */}

                    {/* quick link section start */}
                    <div className='max-w-xs'>
                        <div>
                            <h6 className='text-xl font-semibold uppercase'>Quick Links</h6>
                        </div>
                        <div className='my-3 flex flex-col gap-0.5'>
                            <Link href={'#'} className='hover:text-primaryCol duration-300'>Home</Link>
                            <Link href={'#'} className='hover:text-primaryCol duration-300'>About</Link>
                            <Link href={'#'} className='hover:text-primaryCol duration-300'>Contact</Link>
                            <Link href={'#'} className='hover:text-primaryCol duration-300'>Explore</Link>
                        </div>
                    </div>
                    {/* quick link section end */}

                    {/* contact info section start */}
                    <div className='max-w-xs'>
                        <div>
                            <h6 className='text-xl font-semibold uppercase'>Begin Your Career</h6>
                        </div>
                        <div className='my-3 flex flex-col gap-0.5'>
                            <Link href={'#'} className='hover:text-primaryCol duration-300'>Become a Barber</Link>
                            <Link href={'#'} className='hover:text-primaryCol duration-300'>Host Your Shop</Link>
                        </div>
                    </div>
                    {/* contact info section end */}


                    {/* 
                    <a href='mailto:info@barbervoyage.com' className='hover:text-primaryCol duration-300 cursor-pointer'>info@barbervoyage.com</a>
                    <a href='mailto:help@barbervoyage.com' className='hover:text-primaryCol duration-300 cursor-pointer'>help@barbervoyage.com</a>
                    <a href='tel:+880 154545545' className='hover:text-primaryCol duration-300 cursor-pointer'>+880154545545</a> 
                    */}

                    {/* newsletter section start */}
                    <div className='max-w-sm'>
                        <div>
                            <h6 className='text-3xl font-semibold uppercase'>Join Our Newsletter</h6>
                        </div>
                        <div className='my-3 flex flex-col gap-0.5'>
                            <p className=''>
                                Sign up for our newsletter to stay in the loop with our free content.
                            </p>
                            <div className='flex md:flex-col lg:flex-row gap-3 my-6'>
                                <Input type='email' className='outline-none border-0 focus:ring-0 h-11 bg-[#243F63] outline-0' placeholder='Email Address' />
                                <Button className=''>Subscribe</Button>
                            </div>
                        </div>
                    </div>
                    {/* newsletter section end */}
                </div>

                <hr className='border-[#243F63] my-2' />

                {/* copyright section start */}
                <div className='flex flex-col md:flex-row gap-6 justify-between my-3'>
                    <p>The Trio Dev LTD. © 2024 Trading as Barber Voyage. All Rights Reserved.</p>
                    <div>
                        <a href="#facebook"><FaFacebook className='inline mx-2 text-2xl hover:scale-105' /></a>
                        <a href="#intagram"><FaInstagram className='inline mx-2 text-2xl hover:scale-105' /></a>
                        <a href="#youtube"><FaYoutube className='inline ml-2 text-2xl hover:scale-105' /></a>
                    </div>
                </div>
                {/* copyright section end */}
            </div>
        </footer>
    );
};

export default Footer;