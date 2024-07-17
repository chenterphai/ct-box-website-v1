import React from 'react'
import Image from 'next/image'
import { BsCalendarWeek } from "react-icons/bs";
import { Button } from '@nextui-org/react';
const NewsList = ({
    thumbnail,
    title,
    description,
    published
}: {
    title?: any;
    description?: any;
    published?: any;
    thumbnail?: any
}) => {
    return (
        <div className='flex lg:flex-row flex-col gap-x-5' key={title}>
            <div className='flex-[0.3] overflow-hidden rounded-2xl' >
                <Image
                    src={thumbnail}
                    alt="Image News"
                    width={2400}
                    height={1260}
                    className='object-cover'
                />
            </div>
            <div className='flex-[0.7] p-3'>
                <p className='md:text-xl text-xl text-default-600 font-semibold line-clamp-1' >{title}</p>
                <div className='mb-2 mt-1 flex flex-row items-center gap-x-3'>
                    <BsCalendarWeek size={14} className='' />
                    <p className=' text-primary font-medium text-sm' >{published}</p>
                </div>
                <p className='md:text-base text-sm text-default-400 font-light line-clamp-3' >{description}</p>
                <div className='mt-3' >
                    <Button color="primary" variant="shadow">
                        Learn more
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NewsList
