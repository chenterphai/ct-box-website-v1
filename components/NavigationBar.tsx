'use client'
import React, { useMemo } from 'react'
import { Image, Badge } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { CiHeart } from "react-icons/ci";
import { ICONS } from '../constants/Data'
export default function NavigationBar() {
    const pathname = usePathname()
    const route = useMemo(() => [
        {
            id: 1,
            label: 'Home',
            active: pathname === '/',
            href: '/'
        },
        {
            id: 2,
            label: 'Our team',
            active: pathname === '/our-team',
            href: '/our-team'
        },
        {
            id: 3,
            label: 'Service',
            active: pathname === '/service',
            href: '/service'
        },
        {
            id: 4,
            label: 'Product',
            active: pathname === '/product',
            href: '/product'
        },
        {
            id: 5,
            label: 'Client',
            active: pathname === '/client',
            href: '/client'
        },
        {
            id: 6,
            label: 'Our member',
            active: pathname === '/our-member',
            href: '/our-member'
        },
        {
            id: 7,
            label: 'News',
            active: pathname === '/news',
            href: '/news'
        },
        {
            id: 8,
            label: 'About',
            active: pathname === '/about',
            href: '/about'
        }
    ], [{}])
    return (
        <div
            className='flex items-center justify-center py-5 sticky top-0 bg-background z-50'
        >
            <div className='flex items-center justify-center space-x-5'>
                <div>
                    <Image
                        src='./logo.png'
                        width={500}
                        height={500}
                        className='w-6 h-6'
                        alt='CT-BOX Logo'
                    />
                </div>
                <nav className='flex items-center space-x-5'>
                    {route?.map((items) => (
                        <Link
                            href={items.href}
                            key={items.id}
                            className={`text-xs hover:text-primary-300 transition-all duration-250 ease-linear ${items.active ? 'text-active' : "text-default-600"}`}
                        >
                            {items.label}
                        </Link>
                    ))}
                </nav>
                <div className='flex items-center space-x-2'>
                    <Badge content='0' size='sm' color='primary'>
                        <button title='Wish'><ICONS.heart size={24} /></button>
                    </Badge>
                    <button title='Account'><ICONS.user size={20} className='opacity-70' /></button>
                </div>
            </div>
        </div>
    )
}
