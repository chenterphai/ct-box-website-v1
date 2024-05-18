// app/components/ThemeSwitcher.tsx
"use client";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => {
        setMounted(true)
    }, [])
    const [isDark, setDark] = useState(false)
    const value: any = ['dark', 'light']

    const heandlerSwitchMode = () => {
        setDark(!isDark)
        setTheme(isDark ? value.at(0) : value.at(1))
    }

    if (!mounted) return null

    return (
        <div>
            <Switch
                onClick={heandlerSwitchMode}
                defaultSelected
                color="primary"
                size="sm"
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                        <MdOutlineWbSunny className={className} />
                    ) : (
                        <IoMoonOutline className={className} />
                    )}
            />
        </div>
    )
};