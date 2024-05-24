'use client'
import Header from '@/components/Header'
import React from 'react'
import { MEMBERS_DATA, } from '@/constants/Data'
import { FaFacebookF, FaTelegram, FaTwitter } from "react-icons/fa";
import { motion } from 'framer-motion';
export default function OurMember() {

    const MEMBER_CARD = ({ data }: any) => {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                key={data.id} className='flex flex-col items-center justify-center bg-default-50 p-5 rounded-md space-y-3'>
                <div className='flex flex-col items-center justify-center space-y-2'>
                    <div className='bg-default-100 p-2 rounded-xl'>
                        <data.logo size={30} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-lg font-semibold text-default-700'>{data.title}</p>
                        <p className='text-sm font-normal text-default-300'>{data.subtitle}</p>
                    </div>
                </div>
                <div className='w-full px-32'>
                    <div className='w-full h-[2px] bg-default-200'></div>
                </div>
                <div className='p-2'>
                    <p className='text-center font-light text-base'>{data.description}</p>
                </div>
                <div className='flex items-center justify-center space-x-3'>
                    <div className='p-2 bg-default-100/70 group rounded-xl transition-all duration-250 ease-linear hover:bg-primary-50 cursor-pointer'>
                        <FaFacebookF size={16} className='group-hover:text-primary' />
                    </div>
                    <div className='p-2 bg-default-100/70 group rounded-xl transition-all duration-250 ease-linear hover:bg-primary-50 cursor-pointer'>
                        <FaTelegram size={16} className='group-hover:text-primary' />
                    </div>
                    <div className='p-2 bg-default-100/70 group rounded-xl transition-all duration-250 ease-linear hover:bg-primary-50 cursor-pointer'>
                        <FaTwitter size={16} className='group-hover:text-primary' />
                    </div>
                </div>
            </motion.div>

        )
    }
    return (
        <>
            <div className='container mx-auto px-10 mt-16'>
                <Header description='Our member, partner and capacity' />
            </div>
            <div className='container mx-auto p-10 mb-10 '>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {MEMBERS_DATA && MEMBERS_DATA?.map((item) => (

                        <MEMBER_CARD data={item} />

                    ))}
                </div>
            </div>
        </>
    )
}
