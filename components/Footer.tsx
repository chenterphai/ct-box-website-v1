"use client"
import React from 'react'
import { IoMdPin } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { SOCIAL_MEDIA } from '@/constants/Data';
import { useRouter } from 'next/navigation';
import { route } from '@/constants/Data';
import { SiNintendogamecube } from "react-icons/si";
import { BiCubeAlt } from "react-icons/bi";
import Link from 'next/link';
import { motion } from 'framer-motion'
const ADDRESS = [
    {
        id: 1,
        text: '41 Funky Street <br /> Siem Reap, Cambodia',
        icon: IoMdPin
    },
    {
        id: 2,
        text: '(+855) 964 903 404',
        icon: FaPhoneAlt
    },
    {
        id: 3,
        text: 'info-ctbox@gmail.com',
        icon: FaEnvelope
    }
]
export default function FooterSection({ isVisible }: any) {
    const router = useRouter()
    return (
        <div className='bg-default-50'>
            <div className='p-10 container mx-auto'>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>

                    <div>
                        <p className='text-2xl font-medium text-default-600 mb-8'>About CT-BOX</p>
                        <p className='text-sm text-default-500 pr-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, hic!</p>
                        <div className='flex items-center space-x-3 py-4'>
                            {SOCIAL_MEDIA?.map((item) => (
                                <div
                                    key={item.id}
                                    className='bg-default-100 p-4 rounded-lg cursor-pointer'
                                    onClick={() => router.push(item.link)}
                                >
                                    <div>
                                        <item.icon />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <p className='text-2xl font-medium text-default-600 mb-8'>Address</p>
                        {ADDRESS?.map((item) => (
                            <div key={item.id} className='flex items-center space-x-4'>
                                <div className='bg-default-100 p-3 rounded-full'>
                                    <item.icon />
                                </div>
                                <p className={`${item.id === 3 ? 'text-primary cursor-pointer hover:underline' : 'text-default-500'}`} dangerouslySetInnerHTML={{ __html: item.text }} onClick={() => alert('Sent')}></p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <p className='text-2xl font-medium text-default-600 mb-8'>Useful Link</p>
                        <div className='flex flex-col space-y-2'>
                            {route?.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className='text-sm flex items-center space-x-3 text-default-500 transition-all duration-250 ease-linear hover:text-primary hover:pl-3'
                                >
                                    <FaCaretRight />
                                    <p>{item.label}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className='text-2xl font-medium text-default-600 mb-8' >Member</p>
                        <div className='flex flex-col space-y-3'>
                            <div className='flex items-center space-x-2'>
                                <div className='bg-default-100 p-2 rounded-lg'>
                                    <SiNintendogamecube size={20} />
                                </div>
                                <Link href={''} className='text-default-500'>TBOX-LEARNING</Link>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <div className='bg-default-100 p-2 rounded-lg'>
                                    <BiCubeAlt size={20} />
                                </div>
                                <Link href={''} className='text-default-500'>CBOX-AID</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='p-5 px-10 container mx-auto border-t-1 border-default-400'>
                <div className='flex items-center justify-between text-default-400'>
                    <p>Copyright © 2024 By CT-BOX</p>
                    <p>All Rights Reversed.</p>
                </div>
            </div>
        </div>
    )
}
