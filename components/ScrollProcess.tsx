'use client';
import React from 'react'
import { motion, useScroll } from "framer-motion";
const ScrollProcess = () => {
    const { scrollYProgress } = useScroll()
    return (
        <motion.div
            className='h-[2px] w-full bg-active fixed z-30'
            style={{ scaleX: scrollYProgress }}
        />
    )
}

export default ScrollProcess
