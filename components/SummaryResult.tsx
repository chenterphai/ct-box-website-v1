'use client'
import React, { useRef } from 'react'
import ResultCardComponent from './ResultCard'
import { Link } from '@nextui-org/react'
import { useInView } from 'framer-motion';
export default function SummaryResultSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <div ref={ref} className='p-5 py-20'>
            <div
                style={{
                    // transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                <div className='flex flex-col items-start justify-center'>
                    <p className='text-2xl'>Our numbers tell more about us</p>
                    <Link
                        href='/'
                        showAnchorIcon
                        isExternal
                    >
                        Learn more
                    </Link>
                </div>
                <div>
                    <ResultCardComponent number='10+' project='Mobile Development' units='Projects' />
                </div>
                <div>
                    <ResultCardComponent number='20+' project='Web Development' units='Projects' />
                </div>
                <div>
                    <ResultCardComponent number='5' project='POS & Management' units='Projects' />
                </div>
            </div>
        </div>
    )
}
