'use client';
import React, { useRef } from 'react'
import { Button, Link } from '@nextui-org/react'
import SliderComponent from './Slider'
import { useInView } from 'framer-motion';

export default function HeroSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <div
            ref={ref}
            className='grid lg:grid-cols-2 grid-cols-1  gap-5 py-5'
        >
            <div
                style={{
                    // transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }}
                className='p-5 flex justify-center'>
                <div className='flex flex-col items-start justify-center space-y-5'>
                    <p className='text-base font-semibold text-default-700'><span>🏕</span> CT-BOX</p>
                    <h1 className='text-5xl'>Make Your Business to Be Better</h1>
                    <p className='text-sm text-default-600 font-light'><span className='font-bold'>CT-BOX</span> can help you with modern technology <Link
                        isExternal
                        showAnchorIcon
                        href='/'
                    >contact now</Link></p>
                    <Button color="primary" variant="shadow">
                        Get Started
                    </Button>
                </div>
            </div>

            <div
                style={{
                    // transform: isInView ? "none" : "translateX(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }}
                className=''>

                <SliderComponent />

            </div>
        </div>
    )
}
