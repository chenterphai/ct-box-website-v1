'use client'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PROJECTS } from '@/constants/Data'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

const Item = ({ data }: { data: any }) => {
    return (
        <div
            key={data.id}
            className='p-4'
        >
            <Card
                className="">
                <CardHeader className="flex gap-3">
                    <Image
                        alt=" logo"
                        height={40}
                        radius="sm"
                        src={data.logo}
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">{data.title}</p>
                        <p className="text-small text-default-500">{data.tag}</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>{data.subtitle}</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href="https://github.com/nextui-org/nextui"
                    >
                        Visit source code on GitHub.
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}

const RecentProject = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 6000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1,
        cssEase: 'linear',
        rtl: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
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
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div
            className='p-5 py-20'
        >
            <div>
                <p className='text-center font-semibold text-xl uppercase text-default-600 pb-10'>Recent Project</p>
            </div>

            <div className=''>
                <Slider {...settings}>
                    {PROJECTS && PROJECTS?.map((item) => (
                        <Item data={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default RecentProject