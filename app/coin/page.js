'use client'
import * as React from 'react';
import ProjectHeader from '@/components/project-header/ProjectHeader';
import Image from 'next/image';

const coin = () => {

  return (
    <>
      <ProjectHeader title={'FMP x TELLA'} category={'CONCEPT DESIGN / 3D / ANIMATION'} year={'2023'}/>

      <div className='w-full h-full bg-lightgray pt-4 px-4'>
        <Image src="/assets/projects/coin/coin-01.png" height={720} width={1880} className='self-center' />   

        <video width="1920" height="1080" loop autoPlay muted className='pt-4'>
              <source src="/assets/projects/coin/coin-02.mp4" type="video/mp4" />
        </video>

        <Image src="/assets/projects/coin/coin-03.png" height={720} width={1880} className='self-center pt-4'/>   

        <Image src="/assets/projects/coin/coin-04.png" height={1800} width={1880} className='self-center pt-4'/>   

        <div className='grid grid-cols-12'>
          <div className='lg:col-span-6 col-span-12'>
            <Image src="/assets/projects/coin/coin-05.png" height={930} width={1468} className='self-center pt-4 lg:pr-2 pr-0'/> 
          </div>

          <div className='lg:col-span-6 col-span-12'>
          <Image src="/assets/projects/coin/coin-06.png" height={930} width={1468} className='self-center pt-4 lg:pl-2 pl-0'/> 
          </div>
        </div>

        <video width="1880" height="1800" loop autoPlay muted className='pt-4'>
              <source src="/assets/projects/coin/coin-07.mp4" type="video/mp4" />
        </video>
      </div>
      
    </>
  )
}

export default coin
