'use client'
import React, { useRef } from 'react'
import { SLIDE_DATA } from '@/constants/Data'
import Image from 'next/image'
import Header from '@/components/Header'
import { Button } from "@nextui-org/react";
import { useInView } from 'framer-motion';
export default function Service() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <>
            <div className='container mx-auto px-10'>
                <Header
                    description='Find your need in CT-BOX'
                    className='mb-10'
                />
            </div>
            <div
                ref={ref}
                className='container lg:px-20 px-5 mx-auto pb-14'>
                {SLIDE_DATA?.map((item) => (
                    <>
                        <div

                            className='lg:grid hidden lg:grid-cols-3 grid-cols-1 lg:gap-3 gap-10 mb-20 md:p-8 p-2' key={item.id}>
                            {item.id === 2 ? (
                                <>
                                    <div
                                        style={{
                                            transform: isInView ? "none" : "translateX(-200px)",
                                            opacity: isInView ? 1 : 0,
                                            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                        }}
                                        className='col-span-2 lg:py-3 py-0 flex flex-col justify-center space-y-10'>
                                        <div className='flex flex-col space-y-5'>
                                            <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl text-default-600 font-medium'>{item.title}</p>
                                            <p className='lg:pr-40 pr-0 text-base md:text-lg text-default-400'>{item.subtitle}</p>
                                        </div>
                                        <div>
                                            <Button color="primary" variant="shadow">
                                                Learn more
                                            </Button>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            transform: isInView ? "none" : "translateX(200px)",
                                            opacity: isInView ? 1 : 0,
                                            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                        }}
                                    >
                                        <Image
                                            src={item.url}
                                            alt={item.title}
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div style={{
                                        transform: isInView ? "none" : "translateX(-200px)",
                                        opacity: isInView ? 1 : 0,
                                        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                    }}>
                                        <Image
                                            src={item.url}
                                            alt={item.title}
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            transform: isInView ? "none" : "translateX(200px)",
                                            opacity: isInView ? 1 : 0,
                                            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                        }}
                                        className='col-span-2 lg:pl-10 pl-0 lg:py-3 py-0 flex flex-col justify-center space-y-10'>
                                        <div className='flex flex-col space-y-5'>
                                            <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl text-default-600 font-medium '>{item.title}</p>
                                            <p className='lg:pr-40 pr-0 text-base md:text-lg text-default-400'>{item.subtitle}</p>
                                        </div>
                                        <div>
                                            <Button color="primary" variant="shadow">
                                                Learn more
                                            </Button>
                                        </div>

                                    </div>
                                </>
                            )}
                        </div>

                        {/* Phone Screen */}
                        <div
                            style={{
                                transform: isInView ? "none" : "translateX(-200px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                            className='grid lg:hidden lg:grid-cols-3 grid-cols-1 lg:gap-3 gap-10 mb-20 md:p-8 p-2' key={item.id}>

                            <>
                                <div
                                    className='col-span-2 flex flex-col space-y-5'>
                                    <div className='flex flex-col space-y-5'>
                                        <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl text-default-600 font-medium'>{item.title}</p>
                                        <p className='lg:pr-40 pr-0 text-base md:text-lg text-default-400'>{item.subtitle}</p>
                                    </div>
                                    <div>
                                        <Button color="primary" variant="shadow">
                                            Learn more
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src={item.url}
                                        alt={item.title}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </>

                        </div>
                    </>
                ))}
            </div>
        </>
    )
}
