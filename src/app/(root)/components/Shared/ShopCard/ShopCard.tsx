import { shopData } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import ImageSlider from './ImageSlider';
import Link from 'next/link';

const ShopCard = ({ shopData }: { shopData: shopData }) => {
    return (
        <div className='group relative'>
            <ImageSlider _id={shopData?._id} images={shopData?.images} shopName={shopData.shopName} />
            <Link href={`/explore/shop/${shopData?._id}`}>
                <div className='my-2'>
                    <h4 className='text-2xl uppercase inline font-medium'>{shopData?.shopName},</h4>
                    <p className='inline font-light text-black/90'> {shopData?.location}</p>
                </div>
            </Link>
        </div>
    );
};

export default ShopCard;