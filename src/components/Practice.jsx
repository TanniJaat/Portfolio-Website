import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import ProjectCard from './card/ProjectCard'

function Practice() {
  return (
    <MaxWidthWrapper id='projects' className=' relative flex flex-col items-center  gap-10 pt-[50px]'>
        
    <h3 className=' text-xl  tracking-tighter opacity-70 font-semibold'>Practice</h3>
    <h1 className='text-4xl tracking-wider font-bold'>Projects</h1>

   <div className='flex lg:flex-row flex-col  gap-8 '>
   <ProjectCard sr={'/project.png'} projectName={'Case Cobra'} gitLink={'https://github.com/TanniJaat/casecobra'} liveLink={'https://casecobra-dusky.vercel.app/'}/>
  
    
   </div>
   
   </MaxWidthWrapper>
  )
}

export default Practice