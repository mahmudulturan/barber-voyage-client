"use client"
import { featuredBarberShop } from "@/constant/constant";
import ShopCard from "../../Shared/ShopCard/ShopCard";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useRef } from "react";
import Button from "@/components/shared/Button/Button";


const FeaturedShop = () => {
    const swiperRef = useRef<SwiperRef | null>(null);

    // for change slider pagination color
    useEffect(() => {
        if (swiperRef.current) {
            const bullets = swiperRef.current.swiper.pagination.bullets;
            bullets.forEach(bullet => {
                (bullet as HTMLElement).style.backgroundColor = '#F1775C';
            });
        }
    }, []);

    return (
        <div className="bg-white py-12">
            <div className="wrapper">
                {/* heading */}
                <h4 className='uppercase font-semibold text-3xl text-seconderyCol'>Featured BarberShop</h4>

                {/* all shop slider section start */}
                <div className="mt-8 ">
                    <Swiper
                        ref={swiperRef}
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
                            featuredBarberShop?.map((shop) => <SwiperSlide className="mb-2" key={shop?._id}><ShopCard shopData={shop} /></SwiperSlide>)
                        }
                    </Swiper>
                </div>
                {/* all shop slider section end */}

            </div>
        </div>
    );
};

export default FeaturedShop;