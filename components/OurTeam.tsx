'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { TEAMS } from '@/constants/Data';
import TeamCardComponent from './TeamCard';
export default function OurTeamSection() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 6000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        cssEase: "linear",
    }
    return (
        <div className='p-5 my-10'>
            <div>
                <p className='text-2xl font-medium text-default-600 text-center pb-10'>Our Team</p>
            </div>
            <div>
                <Slider {...settings}>
                    {TEAMS?.map((item) => (
                        <TeamCardComponent
                            key={item.id}
                            description={item.description}
                            name={item.name}
                            username={item.username}
                            tag={item.tag}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}
