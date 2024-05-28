import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import NavLink from './NavLink'

function ContactMe() {
  return (
    <MaxWidthWrapper id='contact' className='h-[100vh] relative flex flex-col justify-around' >
       <div className=' flex items-center justify-center flex-col gap-5'> 
       <h3 className='text-xl font-semibold opacity-80'>Get in Touch</h3>
        
        <h1 className='text-5xl font-bold tracking-wider '>Contact Me</h1>

        <div className='flex lg:flex-row flex-col gap-8 mt-[30px] border-solid border-2 border-gray-300 px-8 py-6 rounded-3xl'>

           <div className='flex gap-5 items-center'>
           <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-black'>
                <Image src={'email.svg'} alt='' width={20} height={20} />
            </div>

            <div>
                <NavLink className=' text-lg font-medium' href={'mailto:er.tanishkdhaka@gmail.com'} text={'er.tanishkdhaka@gmail.com'}/>
            </div>
           </div>
           <div className='flex gap-3 items-center'>
           <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-black'>
                <Image src={'linkedin.svg'} alt='' width={20} height={20} />
            </div>
           

            <div>
                <NavLink className='text-lg font-medium' href={'https://www.linkedin.com/in/tanishk-dhaka-82aab0217/'} text={'LinkedIn'}/>
            </div>
           </div>




        </div>
       </div>
        <div className='flex lg:flex-row flex-col gap-6 items-center justify-center'>
        <div className='flex items-center'>
            <NavLink href={'#about'} text={'About'} className='text-2xl '/>
        </div>
        <div className='flex items-center'>
            <NavLink href={'#projects'} text={'Projects'} className='text-2xl'/>
        </div>
        <div className='flex items-center'>
            <NavLink href={'#contact'} text={'ContactMe'} className='text-2xl '/>
        </div>
        
        </div>
        <div className='w-full h-[2px] bg-black'></div>
      
    </MaxWidthWrapper>
  )
}

export default ContactMe