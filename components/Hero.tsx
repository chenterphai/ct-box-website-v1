import React from 'react'
import { Button, Link } from '@nextui-org/react'
import SliderComponent from './Slider'
export default function HeroSection() {
    return (
        <div
            className='grid grid-cols-12 gap-5 py-5'
        >
            <div className='col-span-6 p-5 flex justify-center'>
                <div className='flex flex-col items-start justify-center space-y-5'>
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

            <div className='col-span-6'>

                <SliderComponent />

            </div>
        </div>
    )
}
