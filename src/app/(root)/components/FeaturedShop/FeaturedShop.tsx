"use client"
import { featuredBarberShop } from "@/constant/constant";
import ShopCard from "../Shared/ShopCard/ShopCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const FeaturedShop = () => {
    return (
        <div className="bg-white py-12">
            <div className="wrapper">
                <h4 className='uppercase font-semibold text-3xl text-seconderyCol'>Featured BarberShop</h4>
                <div className="mt-8 mb-10">
                    <Swiper
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            }
                        }}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            featuredBarberShop?.map((shop) => <SwiperSlide className="mb-10" key={shop?._id}><ShopCard shopData={shop} /></SwiperSlide>)
                        }
                    </Swiper>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedShop;