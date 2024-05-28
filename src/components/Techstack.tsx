'use client'

import Image from 'next/image'
import React from 'react'



function Techstack() {
    const TURF=[
        {sr:'/cpp.svg'},
        {sr:'/react.png'},
        {sr:'/tailwind-css.svg'},
        {sr:'/typescript-icon.svg'},
        {sr:'/next.svg'},
        {sr:'/vercel.svg'},
        {sr:'/js.png'},
    
    ]
  return (
    <div key={`sr`} className='grid gap-4 lg:flex grid-cols-4'>
      <span className='md:font-semibold tracking-tighter'>Tech Stack:</span>
    {TURF.map(({sr})=>(
        <Image src={sr} alt="" width={30} height={30} />
    ))}
    </div>
  )
}

export default Techstack