import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import ExButton from './ExButton'
import Link from 'next/link'
import Techstack from './Techstack'


function Hero() {
  return (
    <MaxWidthWrapper>
        <section className='h-[100vh] flex flex-col lg:flex-row items-center justify-center gap-20'>
            {/* left part */}
            <div className='md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] overflow-hidden rounded-full'>
                <Image src={'/profile.jpg'} alt={''}
                width={400} height={400}  />
            </div>
            {/* right part */}
            <div className='flex flex-col items-center justify-center gap-4 '>
                <p className='opacity-80 font-semibold -mb-3 '>Hello i&aposm</p>    

                <h1 className='lg:text-5xl md:text-5xl   font-semibold'>Tanishk Dhaka</h1>

                <h2 className='lg:text-3xl md:text-3xl   font-semibold  text-gray-600'>Frontend Developer</h2>

               <div className='flex gap-2 pt-4'>
               <ExButton text={'Download Cv'} link={'/resume.pdf'} target='_blank' className={'tracking-tight'} />
               <ExButton text={'Contact Me'} link={'#contact'} className={'text-white tracking-tight bg-gray-600 text-sm '} />
               </div>

               <div className='flex gap-4 pt-4'>
                <div className='bg-black w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                <Link href={'https://www.linkedin.com/in/tanishk-dhaka-82aab0217/'}><Image src={'/linkedin.svg'} alt='' height={25} width={25} /></Link>
                </div>
                <div className='bg-black w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                <Link href={'https://github.com/TanniJaat'}><Image src={'/git.svg'} alt='' height={25} width={25} /></Link>
                </div>
               </div>
               <Techstack/>
             </div>
          
        </section>
       
        
    
    </MaxWidthWrapper>
  )
}

export default Hero