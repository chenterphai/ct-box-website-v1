import React from 'react'
import { MdOutlineUpcoming } from "react-icons/md";
function ComingSoon() {
    return (
        <div className='h-screen flex flex-col items-center justify-center space-y-4'>
            <MdOutlineUpcoming size={50} color='#999' />
            <p
                className='text-default-300 font-semibold text-xl'
            >Coming Soon...</p>
        </div>
    )
}

export default ComingSoon
