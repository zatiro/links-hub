"use client"

import { ThemeSelector } from './ThemeSelector'
import { NavigationMenuDemo } from './Menu'
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-12 w-full flex-row
     items-center justify-between bg-primary/80 px-6 shadow-md backdrop-blur">
      <div className='flex w-full flex-row items-center gap-4'>

        <a href='/' className='flex items-center gap-2 whitespace-nowrap text-xl font-bold'><CodeBracketSquareIcon className='h-10 w-10' /> Tech Hub</a>
        <NavigationMenuDemo />
      </div>
      <ThemeSelector />
    </header>
  )
}
