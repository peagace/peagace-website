'use client'
import * as React from 'react';
import ProjectHeader from '@/components/project-header/ProjectHeader';
import Image from 'next/image';


const nftoyer = () => {

  return (
    <>
      <ProjectHeader title={'NFTOYER'} category={'PRODUCT DESIGN / 3D'} year={'2022'} />

      <div className='w-full h-full bg-lightgray pt-4 px-4'>
        <Image src="/assets/projects/nftoyer/nftoyer-01.png" height={3018} width={18800} className='self-center' quality={100} unoptimized='true'/>

        <Image src="/assets/projects/nftoyer/nftoyer-02.png" height={1464} width={18800} className='self-center pt-4' quality={100} unoptimized='true'/>

        <div className='grid grid-cols-12 gap-4'>
          <div className='lg:col-span-4 col-span-12'>
            <Image src="/assets/projects/nftoyer/nftoyer-03.png" height={998} width={14680} className='self-center lg:pt-4 pt-4' quality={100} unoptimized='true'/>
          </div>

          <div className='lg:col-span-4 col-span-12'>
            <Image src="/assets/projects/nftoyer/nftoyer-04.png" height={998} width={14680} className='self-center lg:pt-4 pt-0' quality={100} unoptimized='true'/>
          </div>

          <div className='lg:col-span-4 col-span-12'>
            <Image src="/assets/projects/nftoyer/nftoyer-05.png" height={998} width={14680} className='self-center lg:pt-4 pt-0' quality={100} unoptimized='true'/>
          </div>
        </div>

        <Image src="/assets/projects/nftoyer/nftoyer-06.png" height={884} width={18800} className='self-center pt-4' quality={100} unoptimized='true'/>

        <div className='grid grid-cols-12'>          
            <div className='lg:col-span-4 col-span-12 flex flex-col'>
              <Image src="/assets/projects/nftoyer/nftoyer-07.png" height={1185} width={6240} className='self-center pt-4 lg:pr-4 pr-0' quality={100} unoptimized='true'/>

              <Image src="/assets/projects/nftoyer/nftoyer-08.png" height={932} width={6240} className='self-end pt-4 lg:pr-4 pr-0' quality={100} unoptimized='true'/>
            </div>

            <div className='lg:col-span-8 col-span-12'>
              <Image src="/assets/projects/nftoyer/nftoyer-09.png" height={2055} width={6240} className='self-center pt-4 h-full' quality={100} unoptimized='true'/>
            </div>         
        </div>

        <Image src="/assets/projects/nftoyer/nftoyer-10.png" height={672} width={18800} className='self-center pt-4' quality={100} unoptimized='true'/>

        <div className='grid grid-cols-12'>
          <div className='lg:col-span-6 col-span-12'>
            <Image src="/assets/projects/nftoyer/nftoyer-11.png" height={930} width={14680} className='self-center pt-4 lg:pr-2 pr-0' quality={100} unoptimized='true'/>
          </div>

          <div className='lg:col-span-6 col-span-12'>
            <video width="19200" height="930" loop autoPlay muted className='pt-4 lg:pl-2 pl-0'>
              <source src="/assets/projects/nftoyer/nftoyer-12-video.mp4" type="video/mp4" />
            </video>
          </div>          
        </div>

        <Image src="/assets/projects/nftoyer/nftoyer-13.png" height={1135} width={18800} className='self-center pt-4' quality={100} unoptimized='true'/>

      </div>
    </>
  )
}

export default nftoyer
