import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Scroll({text,}:{
    text:string
   
   
}) {
  return (
   <div className='w-full absolute z-[10] justify-end pr-20  md:flex hidden'><Link href={text} className=' bg-black w-[40px] h-[40px] rounded-full animate-bounce'><Image src={'/arrdown.svg'} alt='down' width={40} height={40}/></Link></div>
  )
}

export default Scroll