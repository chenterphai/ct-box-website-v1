import Loading from '@/app/loading'
import React, { Suspense } from 'react'

const NewsLayout = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    )
}

export default NewsLayout