'use client'
import React, { useMemo } from 'react'
import { Image } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
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
            label: 'Our Team',
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
        }
    ], [])
    return (
        <div
            className='flex items-center justify-center py-5 sticky top-0 bg-background'
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
                            className={`text-sm hover:text-primary-300 transition-all duration-250 ease-linear ${items.active ? 'text-active' : "text-default-600"}`}
                        >
                            {items.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}
