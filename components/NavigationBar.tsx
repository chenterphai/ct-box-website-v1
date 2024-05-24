'use client'
import React, { useMemo } from 'react'
import { Image, Badge } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ICONS } from '../constants/Data'
import { HiMenuAlt2 } from 'react-icons/hi'
import {
    Dropdown, DropdownItem, DropdownTrigger, DropdownMenu
} from '@nextui-org/react'
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
            label: 'Project & Client',
            active: pathname === '/our-project',
            href: '/our-project'
        },
        {
            id: 5,
            label: 'Apps',
            active: pathname === '/applications',
            href: '/applications'
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
            className='flex items-center space-x-4 lg:justify-center justify-between lg:px-0 md:px-24 px-16 py-5 fixed w-full top-0 bg-background/40 backdrop-blur z-50'
        >
            <div className='lg:hidden flex items-center space-x-1'>
                <Image
                    src='./logo.png'
                    width={500}
                    height={500}
                    className='w-8 h-8'
                    alt='CT-BOX Logo'
                />
            </div>
            <div className='lg:flex items-center justify-center space-x-5 hidden'>
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
                    <Badge content='0' size='md' color='primary'>
                        <button title='Wish'><ICONS.heart size={24} /></button>
                    </Badge>
                </div>
            </div>
            {/* <div className='absolute right-10'>
                <ThemeSwitcher />
            </div> */}
            <Dropdown backdrop='opaque'>
                <DropdownTrigger>
                    <button title='Account'><ICONS.user size={20} className='opacity-70' /></button>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem>Log in</DropdownItem>
                    <DropdownItem>Sign Up</DropdownItem>
                </DropdownMenu>
            </Dropdown>

        </div>
    )
}
