"use client"

import SwiperCore, { Scrollbar, A11y } from 'swiper';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ImageSwiper = ({ info, customClasses }) => {
    const images = info.images;

    console.log(info);

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={8}
            effect={'coverflow'}
            coverflowEffect={{
                rotate: 0,
                stretch: 342,
                depth: 701.4,
                modifier: 1,
                slideShadows: false,
            }}
            navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
            }}
            modules={[EffectCoverflow]}
            className={`ImageSwiper ${customClasses ? customClasses.join(' ') : ''}`}
            speed={1000}

            breakpoints={{
                320: {
                    spaceBetween: 12,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 342,
                        depth: 0,
                        modifier: 0,
                        slideShadows: false,
                    },
                },
                768: {
                    spaceBetween: 16,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 342,
                        depth: 0,
                        modifier: 0,
                        slideShadows: false,
                    },
                },
                919: {
                    spaceBetween: 25,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 498,
                        depth: 266.4,
                        modifier: 1,
                        slideShadows: false,
                    },
                },
                1920: {
                    spaceBetween: 25,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 342,
                        depth: 701.4,
                        modifier: 1,
                        slideShadows: false,
                    }
                }
            }}
        >

            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className='image__container'>
                        <Image src={image} alt={`Slide ${index}`} width={2784} height={1657} />
                    </div>
                </SwiperSlide>
            ))}
            {info.blockText ?
                <div className="swiper-block">
                    <div className='swiper-block__container'>
                        <div className="swiper-block__title">{info.name}</div>
                        <div className="swiper-block__text">{info.blockText}</div>
                    </div>
                </div>
                : ''}
        </Swiper>
    );
};

export default ImageSwiper;
