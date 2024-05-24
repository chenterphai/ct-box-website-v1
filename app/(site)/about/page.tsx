import Header from '@/components/Header'
import MemberSection from '@/components/MemberSection'
import React from 'react'

const About = () => {
    return (
        <div className='container mx-auto px-10 mt-16'>
            <Header
                description='Make your business to be better with'
            />

            <p className='py-10 text-base font-light text-default-500'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores est quo excepturi fugit dolorem porro dolores, cum et ipsa non culpa molestiae ipsam rerum voluptate repellendus molestias iste odio asperiores.
            </p>

            <p className='text-lg md:text-xl lg:text-2xl text-default-600 font-bold'>🏕 Vision</p>
            <p className='text-base font-light mb-10 text-default-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis quisquam maxime odio voluptates repudiandae repellendus nisi voluptatem consequatur suscipit. Nulla quibusdam dolorum dolorem deleniti tenetur consequuntur sapiente, omnis maiores.
            </p>

            <p className='text-lg md:text-xl lg:text-2xl text-default-600 font-bold'>🏕 Mission</p>
            <p className='text-base font-light mb-10 text-default-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis quisquam maxime odio voluptates repudiandae repellendus nisi voluptatem consequatur suscipit. Nulla quibusdam dolorum dolorem deleniti tenetur consequuntur sapiente, omnis maiores.
            </p>

            <MemberSection />

        </div>
    )
}

export default About