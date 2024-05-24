import LoadingComponent from '@/components/Loading'
import React from 'react'

export default function Loading() {
    return (
        <div className='w-full absolute bg-background'>
            <LoadingComponent />
        </div>
    )
}
