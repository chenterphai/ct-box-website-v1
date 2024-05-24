'use client'
import Header from '@/components/Header'
import React from 'react'
import { PROJECTS } from '@/constants/Data'
import Image from 'next/image'
import MemberSection from '@/components/MemberSection'
import Tag from '@/components/Tag'
import { VscGithubProject } from "react-icons/vsc";
import { motion } from 'framer-motion'

const ProjectPage = () => {
    return (
        <>
            <div className='container mx-auto px-10 pb-20 mt-16'>
                <Header description='Lorem vdffd vifv idfid svnodfv ksvdo osdov nvs' className='mb-20' />
                <div className='flex items-center space-x-3 mb-5'>
                    <div className='bg-default/50 p-2 rounded-xl'><VscGithubProject size={18} className='text-primary' /></div>
                    <p className='uppercase py-5 text-xl font-bold text-default-400'>projects</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-20'>
                    {
                        PROJECTS.map((item) =>
                        (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                key={item.id} className='flex flex-col space-y-1 bg-default/20  rounded-lg transition-all'>
                                {/* <div className='w-full overflow-hidden'> */}
                                <Image
                                    src={item.thumbnail}
                                    alt='Thumbnail'
                                    width={1280}
                                    height={720}
                                    className='rounded-t-lg'
                                />
                                {/* </div> */}
                                <div className='p-4 flex flex-col space-y-2'>
                                    <p className='text-default-500 font-semibold md:text-lg text-sm'>{item.title}</p>
                                    <p className='md:text-sm font-light text-default-400 text-xs'>{item.subtitle}</p>
                                </div>
                                <div className='pl-4 pb-8'>
                                    <Tag tag={item.tag} />
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
                <div className='flex items-center space-x-3 mb-5'>
                    <div className='bg-default/50 p-2 rounded-xl'><VscGithubProject size={18} className='text-primary' /></div>
                    <p className='uppercase py-5 text-xl font-bold text-default-400'>clients</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-20'>
                    {
                        PROJECTS.map((item) =>
                        (
                            <div key={item.id} className='flex flex-col space-y-1 bg-default/20  rounded-lg transition-all'>
                                {/* <div className='w-full overflow-hidden'> */}
                                <Image
                                    src={item.thumbnail}
                                    alt='Thumbnail'
                                    width={1280}
                                    height={720}
                                    className='rounded-t-lg'
                                />
                                {/* </div> */}
                                <div className='p-4 flex flex-col space-y-2'>
                                    <p className='text-default-500 font-semibold md:text-lg text-sm'>{item.title}</p>
                                    <p className='md:text-sm font-light text-default-400 text-xs'>{item.subtitle}</p>
                                </div>
                                <div className='pl-4 pb-8'>
                                    <Tag tag={item.tag} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProjectPage