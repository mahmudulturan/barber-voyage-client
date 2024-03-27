"use client"
import Button from '@/components/shared/Button/Button';
import { Input } from '@/components/shared/Input/Input';
import { barberSpecialties } from '@/constant/constant';
import { imageUpload } from '@/lib/imageUpload';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaUpload } from "react-icons/fa6";
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';

const BecomeBarberForm = () => {
    const { user: userInfo } = useSelector((state: RootState) => state.usersSlice);
    const [specialties, setSpecialties] = useState<string[]>([]);
    const [userImageUrl, setUserImageUrl] = useState<string>();
    const [documentUrl, setDocumentUrl] = useState<string>();
    const [uploadLoading, setUploadLoading] = useState<boolean>();


    // to delete selected specialties
    const handleSpecialitiesRemove = (removeSpeciality: string) => {
        const filter = specialties.filter(ingriedent => ingriedent !== removeSpeciality)
        setSpecialties(filter)
    }

    // handle user image upload
    const handleImageUpload = async (e: any) => {
        const imageFile = e.target.files[0];
        if (!imageFile) return;
        setUploadLoading(true);
        const { data: imageData } = await imageUpload(imageFile);
        setUploadLoading(false);
        setUserImageUrl(imageData.display_url);
    }

    // handle user image upload
    const handleDocumentUpload = async (e: any) => {
        const imageFile = e.target.files[0];
        if (!imageFile) return;
        setUploadLoading(true);
        const { data: imageData } = await imageUpload(imageFile);
        setUploadLoading(false);
        setDocumentUrl(imageData.display_url);
    }
    console.log(userImageUrl);
    console.log(uploadLoading);

    return (
        <form className='max-w-2xl mx-auto my-16 '>

            {/* personal image and document update section start */}
            <div className='flex flex-col md:flex-row gap-6 justify-between items-center my-6'>

                {/* barber image section */}
                <div className='mx-auto  border-2 inline-block relative rounded-full'>
                    <Image className='w-52 h-52 object-cover mx-auto border rounded-full'
                        src={userImageUrl || "https://i.ibb.co/QCCPd4y/corporate-user-icon.png"}
                        alt='image of barber'
                        height={250} width={250} />

                    <input onChange={(e) => handleImageUpload(e)} type="file" name="userImage" id="userImage" hidden />
                    <label
                        className='absolute h-full w-full flex flex-col items-center justify-center top-0 cursor-pointer bg-seconderyCol/70 text-white font-medium uppercase gap-2 rounded-full' htmlFor="userImage">
                        <FaUpload className='text-2xl' />
                        Upload Your Image
                    </label>
                </div>

                {/* barber document image section*/}
                <div className='mx-auto  border-2 inline-block relative rounded'>
                    <Image className='w-52 h-52 object-cover mx-auto border'
                        src={documentUrl || "https://i.ibb.co/B2rFjDf/Web-2835-29.jpg"}
                        alt='image of barber'
                        height={250} width={250} />
                    <input onChange={(e) => handleDocumentUpload(e)} type="file" name="document" id="document" hidden />
                    <label
                        className='absolute h-full w-full flex flex-col items-center justify-center top-0 cursor-pointer bg-seconderyCol/70 text-white font-medium uppercase gap-2 rounded text-center' htmlFor="document">
                        <FaUpload className='text-2xl' />
                        Upload Your Document
                    </label>
                </div>
            </div>
            {/* personal image and document update section end */}


            {/* name and email info start */}
            <div className='flex flex-col  gap-6 mt-6'>
                <Input type='text' defaultValue={userInfo?.email} readOnly />
                <Input type='text' defaultValue={userInfo?.name} readOnly />
            </div>
            {/* name and email info end */}

            {/* experience and speacilites select section start */}
            <div className='flex flex-col gap-6 mt-6'>

                {/* select experiences of barber */}
                <select name="experiences" id="experiences"
                    defaultValue={""}
                    className='flex w-full rounded-md border border-input bg-white py-2 px-2 outline-none'>
                    <option value="" disabled>Your Experiences</option>
                    <option value="1/2 Years+">1/2 Years+</option>
                    <option value="1 Year+">1 Year+</option>
                    <option value="2 Years+">2 Years+</option>
                    <option value="3 Years+">3 Years+</option>
                    <option value="4 Years+">4 Years+</option>
                    <option value="5 Years+">5 Years+</option>
                    <option value="5 Years+">6 Years+</option>
                </select>

                {/* select speacialites of barber */}
                <select
                    defaultValue={""}
                    onChange={(e) => setSpecialties([...specialties, e.target.value])}
                    name="specialties" id="specialties"
                    className='flex w-full rounded-md border border-input bg-white py-2 px-2 outline-none'>
                    <option value="" disabled>Select Your Speacialties</option>
                    {
                        barberSpecialties?.map((speciality, indx) => <option
                            key={indx}
                            disabled={specialties.find(selectedSpeciality => selectedSpeciality === speciality) !== undefined}
                            value={speciality}>
                            {speciality}
                        </option>)
                    }
                </select>
            </div>

            {/* selected specialites of barber */}
            <p className='my-2 px-1'>
                {
                    specialties.map((speciality, indx) => <span className='relative group' key={indx}> {speciality},
                        <span onClick={() => handleSpecialitiesRemove(speciality)}
                            className='p-0.5 rounded-full bg-white absolute text-sm group-hover:scale-100 scale-0 z-10 right-0 duration-300 cursor-pointer'><RxCross2 className='' /></span>
                    </span>)
                }
            </p>

            {/* experience and speacilites select section end */}

            {/* submit button */}
            <Button variant={"primaryReverse"} className='w-full my-6' type='submit'>
                {uploadLoading ? "Image Uploading..." : "Register as Barber"}
            </Button>
        </form>
    );
};

export default BecomeBarberForm;