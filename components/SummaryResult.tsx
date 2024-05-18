import React from 'react'
import ResultCardComponent from './ResultCard'
import { Link } from '@nextui-org/react'

export default function SummaryResultSection() {
    return (
        <div className='p-5 py-20'>
            <div className='grid grid-cols-4 gap-5'>
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
