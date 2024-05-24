'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import banner from '../public/banner.png';
import { motion } from 'framer-motion';
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
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={twMerge("xl:flex hidden items-center justify-center bg-[url('/banner.png')]  bg-cover bg-no-repeat rounded-xl py-14", className)}>
                <div className='flex flex-col justify-center space-y-1'>
                    <p className='uppercase text-default text-center tracking-widest font-bold text-2xl'>{pathname.split('/',)}</p>
                    <p className='text-xs text-center text-default-400 bg-foreground p-2 rounded-md'>{description}</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='xl:hidden flex items-center justify-center p-10'>
                <div>
                    <p className='uppercase text-default-500 text-center tracking-widest font-bold text-2xl'>{pathname.split('/',)}</p>
                </div>
            </motion.div>
        </>
    )
}

export default Header