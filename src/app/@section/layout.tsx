"use client"

import Link from 'next/link'
import cx from 'classnames'
import { usePathname } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {

  const path = usePathname()
  const activeClasses = "dark:text-primary-400 text-primary-500"
  const inactiveClasses = "dark:text-zinc-400 hover:dark:text-zinc-500 text-zinc-600 hover:text-zinc-700"

  return (
    <>
      <nav className='flex flex-row justify-evenly md:float-right gap-4 p-4 md:rounded-tr-xl md:rounded-tl-none md:rounded-bl-xl border-b md:border-l dark:border-zinc-700 border-zinc-400 dark:bg-zinc-800 rounded-t-xl'>
        <Link className={cx(path == "/" ? activeClasses : inactiveClasses, "font-bold")} href="/">About</Link>
        <Link className={cx(path == "/resume" ? activeClasses : inactiveClasses, "font-bold")} href="/resume">Resume</Link>
        <Link className={cx(path == "/blog" ? activeClasses : inactiveClasses, "font-bold")} href="/blog">Blog</Link>
        <Link className={cx(path == "/portfolio" ? activeClasses : inactiveClasses, "font-bold")} href="/portfolio">Portfolio</Link>
      </nav >
      {children}
    </>
  )
}