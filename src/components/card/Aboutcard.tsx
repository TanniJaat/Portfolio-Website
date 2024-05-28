import Image from 'next/image'
import React from 'react'


function Aboutcard({link,title,text1,text2}:{
    link:string,
    title:string,
    text1:string,
    text2:string
}) {
  return (
   <div className='w-[50%]  border border-black rounded-3xl p-2 flex flex-col items-center justify-center gap-1'>
       <Image src={link} alt='' height={50} width={50} />

        <h1 className='font-bold text-xl'>{title}</h1>

        <div className='flex flex-col items-center  justify-center opacity-80 gap-2'>
            <p className=' text-center'>{text1} <br/> {text2}</p>
            
        </div>

   </div>
  )
}

export default Aboutcard