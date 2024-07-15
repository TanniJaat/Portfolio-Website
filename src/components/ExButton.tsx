import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

function ExButton({text,link,className , target}:{
    text:string,
    link:string,
    className:string,
    target?:string
}) {
  return (
   <div className=''>
    <Link target={target} href={link} className={cn(" shadow-[inset_0_0_0_2px_#616467] text-black lg:px-6 md:px-6 lg:py-4 md:py-4 px-4 py-2 rounded-full  uppercase font-bold bg-transparent hover:bg-black hover:text-white dark:text-neutral-200 transition duration-200 tracking-tighter",className)}>
        {text}
     </Link>
   </div>
  )
}

export default ExButton