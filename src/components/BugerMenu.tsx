'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import Link from 'next/link'

function BugerMenu() {
    const[isOpen, setOpen]= useState(false)
    const toggleMenu=()=> setOpen(!isOpen)

  return (
    <div className='flex relative '>
       <button   onClick={toggleMenu}  className='  w-[40px] h-[40px] object-cover'>
       <Image src={'/menu.svg'} alt={'menu'}
        width={40}   height={40}/>
       </button>
      {
        isOpen&& (
            <div className='bg-white absolute z-10 top-[130%] -left-[60px]'>
              <ul className='flex flex-col gap-1 items-center justify-center'>
                <li><Link href={'#about'}>About</Link></li>
                <li><Link href={'#projects'}>Projects</Link></li>
                <li><Link href={'#contact'}>Contact</Link></li>
              </ul>
            </div>
        )
      }


    </div>
  )
}

export default BugerMenu