'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import banner from '../public/banner.png';
interface Props {
    description?: string
    className?: string
}
const Header: React.FC<Props> = ({
    description,
    className
}) => {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <div className={twMerge("flex items-center justify-center bg-[url('/banner.png')] object-cover rounded-xl p-10", className)}>
            <div className='flex flex-col justify-center space-y-2'>
                <p className='uppercase text-default text-center tracking-widest font-bold text-2xl'>{pathname.split('/',)}</p>
                <p className='text-center text-default-600'>{description}</p>
            </div>
        </div>
    )
}

export default Header