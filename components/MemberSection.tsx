'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SiNintendogamecube } from "react-icons/si";
import { BiCubeAlt } from "react-icons/bi";
export default function MemberSection() {
    const members = [
        {
            id: 1,
            label: 'TBOX-LEARNING',
            icon: SiNintendogamecube
        },
        {
            id: 2,
            label: 'CBOX-AID',
            icon: BiCubeAlt
        },
        {
            id: 3,
            label: 'TBOX-LEARNING',
            icon: SiNintendogamecube
        },
        {
            id: 4,
            label: 'CBOX-AID',
            icon: BiCubeAlt
        },
        {
            id: 5,
            label: 'TBOX-LEARNING',
            icon: SiNintendogamecube
        },
        {
            id: 6,
            label: 'CBOX-AID',
            icon: BiCubeAlt
        },
    ]
    const settings = {
        dots: false,
        arrows: false,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slideToShow: 5
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    }
    return (
        <div className='p-5'>
            <p className='text-center font-semibold text-xl uppercase text-default-600'>Our Member</p>
            <div className='my-10'>
                <Slider {...settings}>
                    {members?.map((item) => (
                        <div
                            key={item.id}
                        >
                            <div className='flex items-center space-x-1'>
                                <div
                                    className='bg-default-50 p-2 rounded-lg'
                                ><item.icon size={20} /></div>
                                <p className='text-base'>{item.label}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
