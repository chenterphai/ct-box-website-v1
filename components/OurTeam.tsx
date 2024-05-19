'use client'
import React from 'react'
import { TEAMS } from '@/constants/Data';
import TeamCardComponent from './TeamCard';
export default function OurTeamSection() {
    return (
        <div className='p-5 my-10'>
            <div>
                <p className='text-2xl font-medium text-default-600 text-center pb-10'>Our Team</p>
            </div>
            <div
                className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'
            >
                {TEAMS?.map((item) => (
                    <TeamCardComponent
                        key={item.id}
                        description={item.description}
                        name={item.name}
                        username={item.username}
                        tag={item.tag}
                    />
                ))}
            </div>
        </div>
    )
}
