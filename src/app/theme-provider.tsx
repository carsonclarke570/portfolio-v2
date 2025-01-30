"use client";

import { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext("light")

export default function ThemeProvider({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState<string | null>(null)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? "dark" : "light")
        }

        mediaQuery.addEventListener("change", handleChange);
        setTheme(mediaQuery.matches ? "dark" : "light")

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, [])

    if (!theme) {
        return null
    }

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}