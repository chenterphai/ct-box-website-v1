import React from 'react'
import MemberCardComponent from './MemberCard'

export default function MemberSection() {
    return (
        <div className='p-5'>
            <p className='text-center text-2xl text-default-600'>Our Member</p>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                <div className='flex items-center justify-center'>
                    <MemberCardComponent />
                </div>
                <div className='flex items-center justify-center'>
                    <MemberCardComponent />
                </div>
            </div>
        </div>
    )
}
