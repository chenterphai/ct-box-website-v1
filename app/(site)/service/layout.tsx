import Loading from '@/app/loading'
import React, { Suspense } from 'react'

export default function ServiceLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <>
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </>
    )
}
