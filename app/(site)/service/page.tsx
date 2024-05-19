import React from 'react'
import { SLIDE_DATA } from '@/constants/Data'
import Image from 'next/image'
export default function Service() {
    return (
        <div className='container lg:px-20 px-5 mx-auto mt-20'>
            {SLIDE_DATA?.map((item) => (
                <>
                    <div className='lg:grid hidden lg:grid-cols-3 grid-cols-1 lg:gap-3 gap-10 mb-20 md:p-8 p-2' key={item.id}>
                        {item.id === 2 ? (
                            <>
                                <div className='col-span-2 lg:py-3 py-0'>
                                    <div className='flex flex-col space-y-5'>
                                        <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl text-default-600 font-medium'>{item.title}</p>
                                        <p className='lg:pr-40 pr-0 text-base md:text-lg text-default-400'>{item.subtitle}</p>
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
                        ) : (
                            <>
                                <div>
                                    <Image
                                        src={item.url}
                                        alt={item.title}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className='col-span-2 lg:pl-10 pl-0 lg:py-3 py-0'>
                                    <div className='flex flex-col space-y-5'>
                                        <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl text-default-600 font-medium'>{item.title}</p>
                                        <p className='lg:pr-40 pr-0 text-base md:text-lg text-default-400'>{item.subtitle}</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className='grid lg:hidden lg:grid-cols-3 grid-cols-1 lg:gap-3 gap-10 mb-20 md:p-8 p-2' key={item.id}>

                        <>
                            <div className='col-span-2'>
                                <div className='flex flex-col space-y-5'>
                                    <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl text-default-600 font-medium'>{item.title}</p>
                                    <p className='lg:pr-40 pr-0 text-base md:text-lg text-default-400'>{item.subtitle}</p>
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
    )
}
