import Loading from '@/app/loading'
import React, { Suspense } from 'react'

const AboutLayout = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    )
}

export default AboutLayout