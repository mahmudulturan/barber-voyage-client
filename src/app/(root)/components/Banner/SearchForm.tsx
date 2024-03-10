"use client"
import Button from '@/components/shared/Button/Button';
import { Input } from '@/components/shared/Input/Input';
import React from 'react';
import { IoLocationSharp } from "react-icons/io5";

const SearchForm = () => {
    return (
        <div className='max-w-2xl bg-bgCol rounded-md min-h-[70vh] w-full px-10 py-12 mt-5'>
            <h2 className='text-6xl font-bold uppercase drop-shadow-md'>Find your best <span className='text-primaryCol'>barbers</span> near you!</h2>
            <form className='my-6 space-y-6 text-black'>

                {/* location input */}
                <div className='relative'>
                    <IoLocationSharp className='absolute text-2xl top-4 left-1.5' />
                    <Input className='py-7 pl-8 text-base' type='text' placeholder='Location...' />
                </div>

                {/* min and max price section start */}
                <div className='flex items-center gap-6 w-full'>
                    <div className='flex-1'>
                        <label htmlFor="minPrice" className='font-medium'>Min Price</label>
                        <Input className='py-7 pl-8 text-base mt-2' type='number' placeholder='Min Price' />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="minPrice" className='font-medium'>Max Price</label>
                        <Input className='py-7 pl-8 text-base mt-2' type='number' placeholder='Max Price' />
                    </div>
                </div>
                {/* min and max price section end */}

                {/* barber and amenities select section start */}
                <div className='flex items-center gap-6 w-full'>
                    <div className='flex-1'>
                        <label htmlFor="minPrice" className='font-medium'>Barber Type</label>
                        <select
                            className={"flex w-full rounded-md border border-input bg-background px-8 py-3 outline-none pr-10 mt-2"}
                            name="" id="" defaultValue={""}>
                            <option value="" disabled>Select Barber Type</option>
                            <option value="Men's Barber">Men's Barber</option>
                            <option value="Women's Barber">Women's Barber</option>
                            <option value="Children's Barber">Children's Barber</option>
                            <option value="Traditional Barber">Traditional Barber</option>
                            <option value="Turkish Barber">Turkish Barber</option>
                        </select>
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="amenitiese" className='font-medium'>Amenitiese</label>
                        <select
                            className={"flex w-full rounded-md border border-input bg-background px-8 py-3 outline-none pr-10 mt-2"}
                            name="" id="" defaultValue={""}>
                            <option value="" disabled>Select Amenitiese</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                            <option value="Contactless Payment">Contactless Payment</option>
                            <option value="Wheelchair Access">Wheelchair Access</option>
                            <option value="Refreshments Available">Refreshments Available</option>
                        </select>
                    </div>
                </div>
                {/* barber and amenities select section end */}

                {/* barber shop type select section start */}
                <div className=''>
                    <label htmlFor="shopType" className='font-medium'>Shop Type</label>
                    <select
                        className={"flex w-full rounded-md border border-input bg-background px-8 py-3 outline-none pr-10 mt-2"}
                        name="" id="" defaultValue={""}>
                        <option value="" disabled>Select Shop Type</option>
                        <option value="Family Shop">Family Shop</option>
                        <option value="Men's Shop">Men's Shop</option>
                        <option value="Family Shop">Family Shop</option>
                        <option value="Couples Shop">Couples Shop</option>
                    </select>
                </div>
                {/* barber shop type select section start */}


                <Button variant={"primaryReverse"} className='w-full py-3'>Search Barbers</Button>
            </form>
        </div>
    );
};

export default SearchForm;