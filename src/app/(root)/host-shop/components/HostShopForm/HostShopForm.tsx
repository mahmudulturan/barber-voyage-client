"use client"
import Button from '@/components/shared/Button/Button';
import { Input } from '@/components/shared/Input/Input';
import { barberSpecialties, shopServices } from '@/constant/constant';
import { imageUpload } from '@/lib/imageUpload';
import { useCreateShopMutation } from '@/redux/api/ownersApi/ownersApi';
import { RootState } from '@/redux/store';
import { IHostShopInputs } from '@/types/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
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
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<IHostShopInputs>()
    const [hostShop, { isLoading: isHostLoading }] = useCreateShopMutation();

    const router = useRouter();


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

    // handle host shop submit
    const handleHostShop: SubmitHandler<IHostShopInputs> = async (data) => {
        const { name, country, postal, city, state, experience } = data;
        const reqBody = {
            name,
            user: userInfo?._id,
            barbers: ["65f7c66f6fb3480096724dd0", "65f7c5eef7ce78693e7b587e"],
            shopImages: ["https://i.ibb.co/dJVTTNR/steptodown-com662535.jpg",
                "https://i.ibb.co/sJM2kF6/steptodown-com192105.jpg",
                "https://i.ibb.co/Wxw5BX8/steptodown-com214667.jpg"],
            license: "https://i.ibb.co/MZcR9by/43716.jpg",
            location: { country, postal, city, state },
            services,
            experience: experience,
            specialties
        }
        const dbResponsePromise = hostShop(reqBody).unwrap();
        toast.promise(
            dbResponsePromise,
            {
                loading: 'Registering...',
                success: (data: { message: string }) => {
                    router.push('/dashboard')
                    reset();
                    return `${data.message}`
                },
                error: (err) => `${err?.data?.error || "Registration Failed"}`,
            }
        );
    }

    return (
        <form onSubmit={handleSubmit(handleHostShop)} className='my-16 space-y-6'>
            <div className='flex flex-col md:flex-row justify-between gap-6'>

                {/* shop info section start here */}
                <div className='w-full'>
                    <h3 className='text-center text-2xl underline'>Shop Info:</h3>
                    {/* shop name */}
                    <div className=''>
                        <label htmlFor='name' className='mt-4 mb-2 ml-1'>Shop Name:</label>
                        <Input {...register("name", { required: true })} id='name' type='text' placeholder='Type Your Shop Name' />
                        {errors.name && <span className='text-red-400 ml-1'>Shop Name is required!</span>}
                    </div>

                    {/* shop location section start */}
                    <h3 className='mt-4 mb-2 ml-1'>Shop Location:</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <Input {...register("city", { required: true })} type='text' placeholder='City' />
                            {errors.city && <span className='text-red-400 ml-1'>City Name is required!</span>}
                        </div>
                        <div>
                            <Input {...register("state", { required: true })} type='text' placeholder='State' />
                            {errors.state && <span className='text-red-400 ml-1'>State is required!</span>}
                        </div>
                        <div>
                            <Input {...register("postal", { required: true })} type='text' placeholder='Postal Code' />
                            {errors.postal && <span className='text-red-400 ml-1'>Postal Code is required!</span>}
                        </div>
                        <div>
                            <Input {...register("country", { required: true })} type='text' placeholder='Country' />
                            {errors.country && <span className='text-red-400 ml-1'>Country Name is required!</span>}
                        </div>
                    </div>
                    {/* shop location section end */}

                    {/* shop services select section start */}
                    <h3 className='mt-4 mb-2 ml-1'>Shop Services:</h3>
                    <div className='flex flex-col'>
                        <select
                            {...register("services", { required: true })}
                            defaultValue={""}
                            onChange={(e) => setServices([...services, e.target.value])}
                            name="services" id="services"
                            className='flex w-full rounded-md border border-input bg-white py-2 px-2 outline-none'>
                            <option value="" disabled>Select Your Services</option>
                            {
                                shopServices?.map((service, indx) => <option
                                    key={indx}
                                    disabled={services.find(selectedServices => selectedServices === service) !== undefined}
                                    value={service}>
                                    {service}
                                </option>)
                            }
                        </select>
                        {errors.services && <span className='text-red-400 ml-1'>Service is required!</span>}
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

                    {/* shop images and shop license section start */}
                    <div>
                        <h3 className='mt-4 mb-2 ml-1'>Shop Images:</h3>
                        <Input type='file' className='bg-white' />
                    </div>
                    <div>
                        <h3 className='mt-4 mb-2 ml-1'>Shop License:</h3>
                        <Input type='file' className='bg-white' />
                    </div>
                    {/* shop images and shop license section end */}
                </div>
                {/* shop info section end here */}

                {/* owners info section start here */}
                <div className='w-full'>
                    <h3 className='text-center text-2xl underline'>Owner Info:</h3>
                    {/* personal image and document update section start */}
                    <div className='flex flex-col md:flex-row gap-6 justify-between items-center my-6'>

                        {/* owner image section */}
                        <div className='mx-auto  border-2 inline-block relative rounded-full'>
                            <Image className='w-52 h-52 object-cover mx-auto border rounded-full'
                                src={userImageUrl || "https://i.ibb.co/QCCPd4y/corporate-user-icon.png"}
                                alt='image of owner'
                                height={250} width={250} />

                            <input onChange={(e) => handleImageUpload(e)} type="file" name="userImage" id="userImage" hidden />
                            <label
                                className='absolute h-full w-full flex flex-col items-center justify-center top-0 cursor-pointer bg-seconderyCol/70 text-white font-medium uppercase gap-2 rounded-full' htmlFor="userImage">
                                <FaUpload className='text-2xl' />
                                Upload Your Image
                            </label>
                        </div>

                        {/* owner document image section*/}
                        <div className='mx-auto  border-2 inline-block relative rounded'>
                            <Image className='w-52 h-52 object-cover mx-auto border'
                                src={documentUrl || "https://i.ibb.co/B2rFjDf/Web-2835-29.jpg"}
                                alt='image of owner'
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


                    {/* owner email info */}
                    <div className='mt-4 flex flex-col gap-1'>
                        <label htmlFor='ownerEmail' className='ml-1'>Owner's Email:</label>
                        <Input type='text' id='ownerEmail' defaultValue={userInfo?.email} />
                    </div>

                    {/* owner name info */}
                    <div className='mt-4 flex flex-col gap-1'>
                        <label htmlFor='ownerName' className='ml-1'>Owner's Name:</label>
                        <Input type='text' id='ownerName' defaultValue={userInfo?.name} />
                    </div>

                    {/* experience and speacilites select section start */}
                    <div className='mt-4 flex flex-col gap-1'>
                        <label htmlFor='ownerName' className='ml-1'>Owner's Experiences:</label>
                        {/* select experiences of owner */}
                        <select {...register("experience", { required: true })} name="experience" id="experience"
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
                    {errors.experience && <span className='text-red-400 ml-1'>Experiences is required!</span>}

                    {/* speacilites select section start */}
                    <div className='mt-4 flex flex-col gap-1'>
                        <label htmlFor='ownerName' className='ml-1'>Owner's Speacialties:</label>
                        <select
                            defaultValue={""}
                            {...register("specialties", { required: true })}
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

                    {errors.specialties && <span className='text-red-400 ml-1'>Speacialties is required!</span>}
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
                {/* owners info section end here */}

            </div>

            {/* submit button */}
            <Button variant={"primaryReverse"} className={`w-full my-6 ${isHostLoading || uploadLoading ? "saturate-50" : "saturate-100"}`} disabled={isHostLoading || uploadLoading} type='submit'>
                {uploadLoading ? "Image Uploading..." : isHostLoading ? "Hosting Your Shop..." : "Host Your Shop"}
            </Button>
        </form>
    );
};

export default HostShopForm;