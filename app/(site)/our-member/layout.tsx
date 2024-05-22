import Loading from '@/app/loading'
import React, { Suspense } from 'react'
const MemberLayout = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    )
}

export default MemberLayout