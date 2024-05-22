import Loading from '@/app/loading'
import React, { Suspense } from 'react'
export default function ProjectLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    )
}
