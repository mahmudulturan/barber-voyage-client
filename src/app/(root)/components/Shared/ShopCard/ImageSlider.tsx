import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Button from '@/components/shared/Button/Button';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const ImageSlider = ({ images, shopName, _id }: { images: string[], shopName: string, _id: string }) => {
    const swiperRef = useRef<SwiperRef | null>(null);

    // for change slider pagination color
    useEffect(() => {
        if (swiperRef.current) {
            const bullets = swiperRef.current.swiper.pagination.bullets;
            bullets.forEach(bullet => {
                (bullet as HTMLElement).style.backgroundColor = '#F8F8F8';
            });
        }
    }, []);

    // handler for previous slide changer
    const handlePrevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    }

    // handler for next slide changer
    const handleNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    }

    return (
        <div className='relative z-0'>
            <Swiper
                pagination={{
                    clickable: false,
                }}
                modules={[Pagination]}
                className="mySwiper rounded-md"
                ref={swiperRef}
                autoplay={false}
                allowTouchMove={false}
            >
                {/* map all images */}
                {
                    images?.map((image, indx) => <SwiperSlide key={indx}>
                        <Link href={`/explore/shop/${_id}`}>
                            <Image
                                className='w-full h-60 object-cover fitler brightness-75'
                                src={image} alt={`image of ${shopName}`} width={300} height={200} />
                        </Link>
                    </SwiperSlide>)
                }
            </Swiper>

            {/* navigation button for change previous slider */}
            <Button className='absolute top-[110px] mx-2 z-30 left-0' onClick={handlePrevSlide} variant={"icon"}>
                <GrFormPrevious></GrFormPrevious>
            </Button>
            {/* navigation button for change next slider */}
            <Button className='absolute top-[110px] mx-2 z-30 right-0' onClick={handleNextSlide} variant={"icon"}>
                <GrFormNext></GrFormNext>
            </Button>

        </div>
    );
};

export default ImageSlider;