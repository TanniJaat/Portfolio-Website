import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Aboutcard from './card/Aboutcard'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className='md:pt-20 lg:pt-0'>
    <MaxWidthWrapper  className=' h-[100vh] lg:h-[100vh] flex flex-col items-center  gap-4'>
        <h3  className='opacity-80 text-xl'>Get To Know More</h3>
        <h1 className='text-5xl font-bold tracking-wide'>About Me</h1>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-[60px] pt-[60px]'>

           <div>
           <div className='lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] rounded-3xl grayscale overflow-hidden'>
                <Image src={'/profile-2.jpg'} alt='profile' width={400} height={400} />
            </div>
           </div>

            <div className='flex flex-col items-center justify-center gap-10'>

               <div className='w-full lg:p-5'>
               <div className='flex gap-10  '>
               <Aboutcard link={'/badge.svg'} title={'Experience'} text1={'1+ years'} text2={'Frontend Development'}/>
                <Aboutcard link={'/edu.svg'} title={'Education'} text1={"B.tech"} text2={'Computer Science'}/>
               </div>
               </div>
               <p className='tracking-tighter text-sm md:text-lg opacity-85'>Hello there! I&aposm a web developer specializing in Next.js,
          Tailwind CSS, Java, C++, React, and Prisma. With a knack for blending
           creativity with functionality, I bring digital visions to life. From 
           frontend flair to backend mastery, I&aposm passionate about crafting 
           immersive online experiences. Let&aposs collaborate and bring your ideas to
            the web with precision and style.</p>

            </div>

        </div>
    </MaxWidthWrapper>
    </div>
  )
}

export default About