import { popularCategories } from '@/constant/constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PopularCategory = () => {

    return (
        <section className='py-12'>
            <div className='wrapper'>
                <h4 className='uppercase font-semibold text-3xl text-seconderyCol'>Popular Category</h4>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5 my-6'>
                    {
                        popularCategories.map((category, indx) => <Link href={`/explore?category=${category.query}`} key={indx}>
                            <div className='duration-300 hover:bg-seconderyCol bg-white px-2 md:px-4 py-1 md:py-3 rounded-md group'>
                                <Image
                                    className='rounded-md w-full'
                                    src={category.image} height={188} width={188} alt={`image of ${category.name}`} />
                                <h3 className='text-xl uppercase font-semibold text-seconderyCol group-hover:text-white mt-1.5'>{category.name}</h3>
                            </div>
                        </Link>)
                    }
                </div>
            </div>
        </section>
    );
};

export default PopularCategory;