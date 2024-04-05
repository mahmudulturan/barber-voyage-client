"use client"
import Button from '@/components/shared/Button/Button';
import { Input } from '@/components/shared/Input/Input';
import { barberSpecialties, shopServices } from '@/constant/constant';
import { imageUpload } from '@/lib/imageUpload';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaUpload } from "react-icons/fa6";
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';

const HostShopForm = () => {
    const { user: userInfo } = useSelector((state: RootState) => state.usersSlice);
    const [specialties, setSpecialties] = useState<string[]>([]);
    const [services, setServices] = useState<string[]>([]);
    const [userImageUrl, setUserImageUrl] = useState<string>();
    const [documentUrl, setDocumentUrl] = useState<string>();
    const [uploadLoading, setUploadLoading] = useState<boolean>();


    // to delete selected specialties
    const handleSpecialitiesRemove = (removeSpeciality: string) => {
        const filter = specialties.filter(ingriedent => ingriedent !== removeSpeciality);
        setSpecialties(filter);
    }

    // to delete selected services
    const handleServicesRemove = (removeService: string) => {
        const filter = services.filter(service => service !== removeService);
        setServices(filter);
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

    return (
        <form className='my-16 space-y-6'>
            <div className='flex justify-between gap-6'>
                <div className='w-full'>
                    <h3 className='text-center text-2xl underline'>Shop Info:</h3>
                    <div>
                        {/* name and email info start */}
                        <div className=''>
                            <h3 className='mt-4 mb-2 ml-1'>Shop Name:</h3>
                            <Input type='text' placeholder='Type Your Shop Name' />
                        </div>

                        <h3 className='mt-4 mb-2 ml-1'>Shop Location:</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <Input type='text' placeholder='City' />
                            <Input type='text' placeholder='State' />
                            <Input type='text' placeholder='District' />
                            <Input type='text' placeholder='Country' />
                        </div>
                        {/* name and email info end */}

                        {/* experience and speacilites select section start */}
                        <h3 className='mt-4 mb-2 ml-1'>Shop Services:</h3>
                        <div className='flex flex-col gap-6'>
                            {/* select speacialites of barber */}
                            <select
                                defaultValue={""}
                                onChange={(e) => setServices([...services, e.target.value])}
                                name="services" id="services"
                                className='flex w-full rounded-md border border-input bg-white py-2 px-2 outline-none'>
                                <option value="" disabled>Select Your Speacialties</option>
                                {
                                    shopServices?.map((service, indx) => <option
                                        key={indx}
                                        disabled={services.find(selectedServices => selectedServices === service) !== undefined}
                                        value={service}>
                                        {service}
                                    </option>)
                                }
                            </select>
                        </div>
                        {/* selected services of shop */}
                        <p className='my-2 px-1'>
                            {
                                services.map((service, indx) => <span className='relative group' key={indx}> {service},
                                    <span onClick={() => handleServicesRemove(service)}
                                        className='p-0.5 rounded-full bg-white absolute text-sm group-hover:scale-100 scale-0 z-10 right-0 duration-300 cursor-pointer'><RxCross2 className='' /></span>
                                </span>)
                            }
                        </p>
                        {/* experience and speacilites select section end */}
                    </div>

                    <div>
                        <h3 className='mt-4 mb-2 ml-1'>Shop Images:</h3>
                        <Input type='file' className='bg-white' />
                    </div>
                    <div>
                        <h3 className='mt-4 mb-2 ml-1'>Shop License:</h3>
                        <Input type='file' className='bg-white' />
                    </div>
                </div>

                <div className='w-full'>
                    <h3 className='text-center text-2xl underline'>Owner Info:</h3>
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
                    <div className='mt-4 flex flex-col gap-1'>
                        <label htmlFor='ownerEmail' className='ml-1'>Owner's Name:</label>
                        <Input type='text' id='ownerEmail' defaultValue={userInfo?.email} />
                    </div>
                    {/* name and email info end */}

                    {/* name and email info start */}
                    <div className='mt-4 flex flex-col gap-1'>
                        <label htmlFor='ownerName' className='ml-1'>Owner's Name:</label>
                        <Input type='text' id='ownerName' defaultValue={userInfo?.name} />
                    </div>
                    {/* name and email info end */}

                    {/* experience and speacilites select section start */}
                    <div className='mt-4 flex flex-col gap-1'>
                        <label htmlFor='ownerName' className='ml-1'>Owner's Experiences:</label>
                        {/* select experiences of barber */}
                        <select name="experiences" id="experiences"
                            defaultValue={""}
                            className='flex w-full rounded-md border border-input bg-white py-2 px-2 outline-none'>
                            <option value="" disabled>Select Your Experiences</option>
                            <option value="1/2 Years+">1/2 Years+</option>
                            <option value="1 Year+">1 Year+</option>
                            <option value="2 Years+">2 Years+</option>
                            <option value="3 Years+">3 Years+</option>
                            <option value="4 Years+">4 Years+</option>
                            <option value="5 Years+">5 Years+</option>
                            <option value="5 Years+">6 Years+</option>
                        </select>
                    </div>
                    {/* experience and speacilites select section start */}
                    <div className='mt-4 flex flex-col gap-1'>
                        <label htmlFor='ownerName' className='ml-1'>Owner's Speacialties:</label>
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
                </div>
            </div>

            {/* submit button */}
            <Button variant={"primaryReverse"} className='w-full my-6' type='submit'>
                {uploadLoading ? "Image Uploading..." : "Host Your Shop"}
            </Button>
        </form>
    );
};

export default HostShopForm;