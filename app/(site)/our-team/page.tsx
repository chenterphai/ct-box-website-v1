'use client'
import OurTeamCardComponent from '@/components/OurTeamCard'
import React from 'react'
import { TEAMS } from '@/constants/Data'
import Header from '@/components/Header'
export default function OurTeam() {

    return (
        <>
            <div className='mt-16 container mx-auto px-10'>
                <Header description='Our team to help you here' />
            </div>

            <div className='container mx-auto my-20 '>
                {TEAMS && TEAMS?.map((item) => (
                    <OurTeamCardComponent
                        key={item.id}
                        name={item.name}
                        email={item.username}
                        details={item.description}
                        position={item.position}
                        profile={item.profile}
                    />
                ))}
            </div>
        </>
    )
}
