import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

function NavLink({href,text,className}:{
    href:string,
    text:string,
    className?:string

}) {
  return (
    <button  className={cn('flex items-center justify-center flex-col group hover:text-gray-600 delay-150 gap-[6px]',className)}>
        <Link  href={href}>{text}</Link>
        <div className='w-full rounded-lg h-[3px] opacity-0 ease-in-out delay-150 group-hover:bg-gray-500 group-hover:opacity-100'/>
    </button>
  )
}

export default NavLink