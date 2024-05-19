"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { SLIDE_DATA } from '@/constants/Data';
import Image from 'next/image';
export default function SliderComponent() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        loop: true
    }
    return (
        <div className='py-5'>
            <Slider {...settings}>
                {SLIDE_DATA?.map((item) => (
                    <div
                        key={item.id}
                        className='flex flex-col p-5 items-center justify-center space-y-5'
                    >

                        <div className='flex items-center justify-center'>
                            <Image
                                src={item.url}
                                alt='Image Slide'
                                width={500}
                                height={500}
                                className='border w-72 h-72'
                            />
                        </div>
                        <p className='text-2xl text-center font-medium text-default-600'>{item.title}</p>
                        <p className='text-center text-default-500 px-10'>{item.subtitle}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
