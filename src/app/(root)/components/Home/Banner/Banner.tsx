import React from 'react';
import bannerImage from '@/public/assets/banner/bannerImage1.jpg'

import SearchInput from './SearchInput';
import { FaSearch } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import Button from '@/components/shared/Button/Button';
import SearchForm from './SearchForm';

const Banner = () => {

    return (
        <div className='min-h-screen'
            style={{
                backgroundImage: `url(https://i.ibb.co/NxrLWN6/banner-Image-3.jpg)`,
                backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }}>
            <div className='h-full w-full min-h-screen bg-seconderyCol/60 flex items-center justify-end'>
                <div className='wrapper w-full flex justify-end'>
                    <SearchForm />
                </div>

            </div>
        </div>
    );
};

export default Banner;
