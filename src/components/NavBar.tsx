
import React, { useState } from 'react'

import MaxWidthWrapper from './MaxWidthWrapper'

import NavLink from './NavLink'
import BugerMenu from './BugerMenu'

function NavBar() {
  
  return (
    <MaxWidthWrapper className=' ' >
         <nav className=' flex  justify-between items-center pt-[30px] lg:pt-[55px] text-2xl'>
            <div className='font-semibold lg:text-3xl text-2xl tracking-wide '>Tanishk <span className='opacity-75'>Dhaka</span></div>

            <div className='lg:flex gap-[32px] items-center justify-center hidden'>
              <NavLink href={'#about'} text={'About'}/>
              <NavLink href={'#projects'} text={'Projects'}/>
              <NavLink href={'#contact'} text={'Contact Me'}/>
            </div>

            <div  className='lg:hidden flex'>
                <BugerMenu  />
            </div>
            
         </nav>
    </MaxWidthWrapper>
  )
}

export default NavBar

