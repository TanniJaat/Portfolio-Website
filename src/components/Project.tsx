import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import ProjectCard from './card/ProjectCard'

function Project() {
  return (
    <MaxWidthWrapper id='projects' className=' relative flex flex-col items-center  gap-10 pt-[50px] '>
        
            <h3 className=' text-xl tracking-tighter opacity-70 font-semibold'>Browse My Recent</h3>
            <h1 className='text-4xl tracking-wider font-bold'>Projects</h1>

           <div className='flex lg:flex-row flex-col  gap-8 '>

           <ProjectCard sr={'/project1.png'} projectName={'Chat Forum'} gitLink={'https://github.com/TanniJaat/chatbox'} liveLink={'https://chatbox-hazel-eight.vercel.app/'}/>
           <ProjectCard sr={'/project2.png'} projectName={'Password Generator'} gitLink={'https://github.com/TanniJaat/PasswordGenerator?tab=readme-ov-file'} liveLink={'https://tannijaat.github.io/PasswordGenerator/'}/>
           <ProjectCard sr={'/project3.png'} projectName={'Landing Page'} gitLink={'https://github.com/TanniJaat/RazorpayClone?tab=readme-ov-file'} liveLink={'https://65d384dc2deb97040465411f--ornate-malasada-b89afe.netlify.app/'}/>
            
           </div>
        
    </MaxWidthWrapper>
  )
}

export default Project