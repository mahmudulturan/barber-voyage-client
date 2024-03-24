"use client"
import Button from '@/components/shared/Button/Button';
import { barberSpecialties } from '@/constant/constant';
import Image from 'next/image';
import React from 'react';
import { FaUpload } from "react-icons/fa6";

const BecomeBarberForm = () => {
    return (
        <form className='max-w-2xl mx-auto my-12'>

            {/* personal image and document update section start */}
            <div className='flex flex-col md:flex-row gap-6 justify-between items-center my-6'>
                <div className='mx-auto  border-2 inline-block relative rounded-full'>
                    <Image className='w-52 h-52 object-cover mx-auto border rounded-full' src={"https://i.ibb.co/QCCPd4y/corporate-user-icon.png"} alt='image of barber' height={250} width={250} />
                    <input type="file" name="document" id="document" hidden />
                    <label
                        className='absolute h-full w-full flex flex-col items-center justify-center top-0 cursor-pointer bg-seconderyCol/70 text-white font-medium uppercase gap-2 rounded-full' htmlFor="document"><FaUpload className='text-2xl' />Upload Your Image</label>
                </div>
                <div className='mx-auto  border-2 inline-block relative rounded'>
                    <Image className='w-52 h-52 object-cover mx-auto border' src={"https://i.ibb.co/QCCPd4y/corporate-user-icon.png"} alt='image of barber' height={250} width={250} />
                    <input type="file" name="document" id="document" hidden />
                    <label
                        className='absolute h-full w-full flex flex-col items-center justify-center top-0 cursor-pointer bg-seconderyCol/70 text-white font-medium uppercase gap-2 rounded' htmlFor="document"><FaUpload className='text-2xl' />Upload Your Document</label>
                </div>
            </div>
            {/* personal image and document update section end */}

            {/* experience and speacilites select section start */}
            <div className='flex flex-col md:flex-row gap-6 mt-6'>
                <select name="" id="" defaultValue={""} className='flex w-full rounded-md border border-input bg-white py-2 px-2 outline-none'>
                    <option value="" disabled>Your Experiences</option>
                    <option value="1/2 Years+">1/2 Years+</option>
                    <option value="1 Year+">1 Year+</option>
                    <option value="2 Years+">2 Years+</option>
                    <option value="3 Years+">3 Years+</option>
                    <option value="4 Years+">4 Years+</option>
                    <option value="5 Years+">5 Years+</option>
                    <option value="5 Years+">6 Years+</option>
                </select>
                <select defaultValue={""} name="" id="" className='flex w-full rounded-md border border-input bg-white py-2 px-2 outline-none'>
                    <option value="" disabled>Select Your Speacialties</option>
                    {
                        barberSpecialties?.map((speciality, indx) => <option key={indx} value={speciality}>{speciality}</option>)
                    }
                </select>
            </div>
            {/* experience and speacilites select section end */}

            <Button variant={"primaryReverse"} className='w-full my-6' type='submit'>Register as Barber</Button>
        </form>
    );
};

export default BecomeBarberForm;