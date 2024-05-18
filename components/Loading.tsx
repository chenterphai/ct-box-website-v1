import React from 'react'
import { Spinner } from '@nextui-org/react'
export default function LoadingComponent() {
    return (
        <div className='flex items-center justify-center h-80'>
            <div>
                <Spinner size='md' />
            </div>
        </div>
    )
}
