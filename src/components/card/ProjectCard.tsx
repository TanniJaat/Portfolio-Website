import Image from 'next/image'
import React from 'react'
import ExButton from '../ExButton'

function ProjectCard(
  {
    sr,projectName,gitLink,liveLink
  }:{
    sr:string,
    projectName:string,
    gitLink:string,
    liveLink:string,
  }
) {
  return (
    <div className='flex flex-col gap-6 items-center justify-center border border-black p-10 rounded-3xl'>

     <div className='lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] overflow-hidden rounded-3xl object-cover'>
     <Image src={sr} alt='project' width={300} height={300} />
     </div>

     <h1 className='text-3xl font-bold'>
      {projectName}
     </h1>

      <div className='flex  gap-4'>
        
     <ExButton text={'Github'} link={gitLink} className={' '}/>
     <ExButton text={'Live Demo'} link={liveLink} className={'sm:px-1 sm:py-1'}/>
      </div>

    </div>
  )
}

export default ProjectCard
