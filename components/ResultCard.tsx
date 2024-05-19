import React from 'react'

interface Props {
    number?: string;
    units?: 'Projects' | 'Client';
    project?: 'Web Development' | 'Mobile Development' | 'POS & Management'
}

export default function ResultCardComponent({
    number,
    units,
    project
}: Props) {
    return (
        <div className='rounded-lg bg-default-100/50 backdrop-blur p-5 flex flex-col items-start justify-center space-y-2'>
            <p className='text-3xl text-primary font-medium'>{number}</p>
            <p className='text-sm text-default-400'>{units}</p>
            <p className='text-xl text-default-600'>{project}</p>
        </div>
    )
}
