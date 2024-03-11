import { shopData } from '@/types/types';
import Image from 'next/image';
import React from 'react';

const ShopCard = ({ shopData }: { shopData: shopData }) => {
    return (
        <div>
            <Image 
            className='w-full'
            src={shopData.images[1]} alt={`image of ${shopData.shopName}`} width={300} height={300} />
            <h4>{shopData?.shopName}</h4>
            <p>{shopData?.location}</p>
        </div>
    );
};

export default ShopCard;