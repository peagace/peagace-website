'use client'
import * as React from 'react';
import ProjectHeader from '@/components/project-header/ProjectHeader';
import Image from 'next/image';

const sflex = () => {

  return (
    <>
      <ProjectHeader title={'SFLEX'} category={'LOGO DESIGN / VISUAL IDENTITY'} year={'2023'}/>

      <div className='w-full h-full bg-lightgray pt-4 px-4'>
        <Image src="/assets/projects/sflex/sflex-01.png" height={1100} width={1880} className='self-center' />

        <Image src="/assets/projects/sflex/sflex-02.png" height={820} width={1880} className='self-center pt-4' />   

        <div className='grid grid-cols-12'>
          <div className='lg:col-span-6 col-span-12'>
            <Image src="/assets/projects/sflex/sflex-03.png" height={930} width={1468} className='self-center pt-4 lg:pr-2 pr-0'/> 
          </div>

          <div className='lg:col-span-6 col-span-12'>
            <Image src="/assets/projects/sflex/sflex-04.png"height={930} width={1468} className='self-center pt-4 lg:pl-2 pl-0'/> 
          </div>
        </div> 

        <Image src="/assets/projects/sflex/sflex-05.png" height={1100} width={1880} className='self-center pt-4' />   

        <Image src="/assets/projects/sflex/sflex-06.png" height={1101} width={1880} className='self-center pt-4' /> 

        <Image src="/assets/projects/sflex/sflex-07.png" height={1337} width={1880} className='self-center pt-4' /> 

        <Image src="/assets/projects/sflex/sflex-08.png" height={1100} width={1880} className='self-center pt-4' /> 

        <Image src="/assets/projects/sflex/sflex-09.png" height={920} width={1880} className='self-center pt-4' /> 

       
      </div>
      
    </>
  )
}

export default sflex
