'use client'
import React from 'react'
import { RiHomeLine, RiServiceLine, RiTeamLine } from "react-icons/ri";
import { VscGithubProject } from "react-icons/vsc";
import { FaRegNewspaper } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { usePathname, useRouter } from 'next/navigation';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn } from "@nextui-org/react"
import { IoIosPhonePortrait, IoMdInformationCircleOutline } from "react-icons/io";
import { AiOutlineTeam } from "react-icons/ai";
const PhoneTabBar = () => {
    const pathname = usePathname()
    const router = useRouter()
    return (
        <div className='lg:hidden fixed bottom-4 flex items-center justify-center w-screen z-50'>
            <div className='container mx-auto px-5'>
                <div
                    className='bg-default-100 p-4 rounded-full shadow-sm shadow-active/50'
                >
                    <div className='grid grid-cols-5'>

                        <div
                            onClick={() => router.push('/')}
                            className='flex flex-col items-center justify-center cursor-pointer'>
                            <div>
                                <RiHomeLine color={pathname === '/' ? '#006FEE' : ''} />
                            </div>
                            <p className={`text-xs font-light ${pathname === '/' ? 'text-primary font-medium' : ''}`}>Home</p>
                        </div>
                        <div
                            onClick={() => router.push('/service')}
                            className='flex flex-col items-center justify-center cursor-pointer'>
                            <div>
                                <RiServiceLine color={pathname === '/service' ? '#006FEE' : ''} />
                            </div>
                            <p className={`text-xs font-light ${pathname === '/service' ? 'text-primary font-medium' : ''}`}>Service</p>
                        </div>
                        <div
                            onClick={() => router.push('/our-project')}
                            className='flex flex-col items-center justify-center cursor-pointer'>
                            <div>
                                <VscGithubProject color={pathname === '/our-project' ? '#006FEE' : ''} />
                            </div>
                            <p className={`text-xs font-light ${pathname === '/our-project' ? 'text-primary font-medium' : ''}`}>Project</p>
                        </div>
                        <div
                            onClick={() => router.push('/news')}
                            className='flex flex-col items-center justify-center cursor-pointer'>
                            <div>
                                <FaRegNewspaper color={pathname === '/news' ? '#006FEE' : ''} />
                            </div>
                            <p className={`text-xs font-light ${pathname === '/news' ? 'text-primary font-medium' : ''}`}>News</p>
                        </div>
                        <div

                            className='flex flex-col items-center justify-center'>
                            <div>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button isIconOnly={true}>
                                            <MdMoreVert size={20} />
                                        </Button>
                                    </DropdownTrigger>

                                    <DropdownMenu aria-label="Dropdown menu with icons">
                                        <DropdownItem
                                            key="about"
                                            onClick={() => router.push('/about')}
                                            startContent={<IoMdInformationCircleOutline />}
                                        >
                                            About
                                        </DropdownItem>
                                        <DropdownItem
                                            key="apps"
                                            onClick={() => router.push('/applications')}
                                            startContent={<IoIosPhonePortrait />}
                                        >
                                            Apps
                                        </DropdownItem>
                                        <DropdownItem
                                            key="our-member"
                                            onClick={() => router.push('/our-member')}
                                            startContent={<AiOutlineTeam />}
                                        >
                                            Our member
                                        </DropdownItem>
                                        <DropdownItem
                                            key="our-team"
                                            onClick={() => router.push('/our-team')}
                                            startContent={<RiTeamLine />}
                                        >
                                            Our team
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneTabBar