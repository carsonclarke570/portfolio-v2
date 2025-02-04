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
      <nav className='flex flex-row justify-evenly md:float-right md:static md:w-auto md:rounded-tr-xl md:rounded-tl-none md:rounded-bl-xl border-b md:border-l dark:border-zinc-700 border-zinc-400 dark:bg-zinc-800 md:rounded-t-xl w-full fixed bottom-0 right-0 gap-4 p-4 border-t ml-6'>
        <Link className={cx(path == "/" ? activeClasses : inactiveClasses, "font-bold font-header")} href="/">About</Link>
        <Link className={cx(path == "/resume" ? activeClasses : inactiveClasses, "font-bold font-header")} href="/resume">Resume</Link>
        <Link className={cx(path == "/blog" ? activeClasses : inactiveClasses, "font-bold font-header")} href="/blog">Blog</Link>
        <Link className={cx(path == "/portfolio" ? activeClasses : inactiveClasses, "font-bold font-header")} href="/portfolio">Portfolio</Link>
      </nav >
      {children}
    </>
  )
}