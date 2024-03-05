import React from 'react';
import bannerImage from '@/public/assets/banner/bannerImage1.jpg'

import SearchInput from './SearchInput';
import { FaSearch } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import Button from '@/components/shared/Button/Button';

const Banner = () => {

    return (
        <div className='min-h-screen'
            style={{
                backgroundImage: `url(https://i.ibb.co/NxrLWN6/banner-Image-3.jpg)`,
                backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }}>
            <div className='h-full w-full min-h-screen bg-seconderyCol/60 flex items-center justify-center'>

                {/* banner content start*/}
                <div className='text-textCol w-full wrapper'>
                    <h3 className='text-2xl md:text-4xl lg:text-6xl uppercase font-bold text-center'>Find your best barbers near you</h3>

                    <div className='flex items-center justify-center gap-6 flex-wrap my-5'>
                        <div>
                            <TiTick className='text-primaryCol inline mx-1 text-lg' />
                            <span>100% free</span>
                        </div>
                        <div>
                            <TiTick className='text-primaryCol inline mx-1 text-lg' />
                            <span>Over 1000 barbers</span>
                        </div>
                        <div>
                            <TiTick className='text-primaryCol inline mx-1 text-lg' />
                            <span>Top-rated</span>
                        </div>
                        <div>
                            <TiTick className='text-primaryCol inline mx-1 text-lg' />
                            <span>Nationwide Availability</span>
                        </div>
                    </div>

                    {/* search input section start */}
                    <div className='bg-textCol flex flex-col md:flex-row w-full py-4 rounded px-4 items-center gap-4 my-10'>
                        <div className='md:flex-1 relative group text-black/85 pt-6 md:pb-3 w-full'>
                            <SearchInput />
                        </div>
                        <Button className='md:flex-1 w-full' variant={"primaryReverse"}><FaSearch className='mx-3' /> Search</Button>
                    </div>
                    {/* search input section end */}

                </div>
                {/* banner content end*/}

            </div>
        </div>
    );
};

export default Banner;