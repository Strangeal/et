'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import IonArrowLeft from '@/public/icons/IonArrowLeft-gray.svg'
import IonArrowRight from '@/public/icons/IonArrowRight-white.svg'
import Image from 'next/image'

import item1 from '@/public/images/home_1/item_1.jpeg'
import item2 from '@/public/images/home_1/item_2.jpeg'
import item3 from '@/public/images/home_1/item_3.jpeg'
import item4 from '@/public/images/home_1/item_4.jpeg'
import item5 from '@/public/images/home_1/item_5.jpeg'
import item6 from '@/public/images/home_1/item_6.jpg'
import item7 from '@/public/images/home_1/item_7.jpeg'
import item8 from '@/public/images/home_1/item_8.jpeg'
import item9 from '@/public/images/home_1/item_9.jpeg'
import item10 from '@/public/images/home_1/item_10.jpeg'
import item11 from '@/public/images/home_1/item_11.jpeg'
import item12 from '@/public/images/home_1/item_12.jpeg'
import item13 from '@/public/images/home_1/item_13.jpeg'
import item14 from '@/public/images/home_1/item_14.jpeg'
import item15 from '@/public/images/home_1/item_15.jpeg'
import item16 from '@/public/images/home_1/item_16.jpeg'
import item17 from '@/public/images/home_1/item_17.jpeg'
import item18 from '@/public/images/home_1/item_18.jpeg'
import item19 from '@/public/images/home_1/item_19.jpeg'
import itemPlan from '@/public/images/home_1/item_plan.jpeg'

import { Swiper as SwiperType } from 'swiper'

const img = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
    item12,
    item13,
    item14,
    item15,
    item16,
    item17,
    item18,
    item19,
    itemPlan,
]

const Gallery = () => {
    const swiperRef = useRef<SwiperType | null>(null)

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
    return (
        <>
            <Swiper
                breakpoints={{
                    '@0.60': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@1.12': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 !m-0"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
            >
                {img.map((item, index) => (
                    <SwiperSlide key={index} className="!h-auto">
                        <Image
                            className="rounded-lg w-full h-full"
                            src={item}
                            width={500}
                            height={500}
                            alt="main"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                className="swipper-thumbs md:!order-first md:!mb-5"
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 5,
                    },
                    '@0.60': {
                        slidesPerView: 5,
                    },
                    '@1.12': {
                        slidesPerView: 5,
                    },
                }}
                onSwiper={setThumbsSwiper}
                loop={true}
                modules={[FreeMode, Navigation, Thumbs]}
                spaceBetween={10}
                freeMode={true}
                watchSlidesProgress={true}
            >
                {img.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="!w-[19.2%] rounded-lg !h-auto"
                    >
                        <Image
                            className="w-full h-full rounded-lg"
                            src={item}
                            width={500}
                            height={500}
                            alt="main"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper className="md:!mt-5">
                <div className="w-full md:flex md:justify-center">
                    <div className="flex items-center justify-between bg-[#000] rounded-full border border-gray-15 p-2 md:w-fit md:justify-center gap-2">
                        <button type="button" className={`md:flex md:w-full`}>
                            <Image
                                className="size-10 rounded-full border border-gray-15 p-2 min-w-10"
                                src={IonArrowLeft}
                                onClick={() => swiperRef.current?.slidePrev()}
                                width={32}
                                height={32}
                                alt="arrow left"
                            />
                        </button>
                        <div className="flex items-center gap-1">
                            <div className="bg-purple-60 rounded-full w-4 h-1"></div>
                            <div className="bg-gray-30 rounded-full w-4 h-1"></div>
                            <div className="bg-gray-30 rounded-full w-4 h-1"></div>
                            <div className="bg-gray-30 rounded-full w-4 h-1"></div>
                        </div>
                        <button
                            type="button"
                            className="md:flex md:justify-end md:w-fit"
                        >
                            <Image
                                className="size-10 rounded-full border border-gray-15 p-2 min-w-10"
                                src={IonArrowRight}
                                onClick={() => swiperRef.current?.slideNext()}
                                width={32}
                                height={32}
                                alt="arrow right"
                            />
                        </button>
                    </div>
                </div>
            </Swiper>
        </>
    )
}

export default Gallery
