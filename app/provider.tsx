"use client"
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider, ThemeProvider } from 'next-themes'

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute='class' defaultTheme="dark">
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    )
}
