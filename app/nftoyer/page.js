'use client'
import * as React from 'react';
import ProjectHeader from '@/components/project-header/ProjectHeader';
import Image from 'next/image';
import Image1 from '../../public/assets/projects/nftoyer/nftoyer-01.jpg'
import Image2 from '../../public/assets/projects/nftoyer/nftoyer-02.jpg'
import Image3 from '../../public/assets/projects/nftoyer/nftoyer-03.jpg'
import Image4 from '../../public/assets/projects/nftoyer/nftoyer-04.jpg'
import Image5 from '../../public/assets/projects/nftoyer/nftoyer-05.jpg'
import Image6 from '../../public/assets/projects/nftoyer/nftoyer-06.jpg'
import Image7 from '../../public/assets/projects/nftoyer/nftoyer-07.jpg'
import Image8 from '../../public/assets/projects/nftoyer/nftoyer-08.jpg'
import Image9 from '../../public/assets/projects/nftoyer/nftoyer-09.jpg'
import Image10 from '../../public/assets/projects/nftoyer/nftoyer-10.jpg'
import Image11 from '../../public/assets/projects/nftoyer/nftoyer-11.jpg'
import Image13 from '../../public/assets/projects/nftoyer/nftoyer-13.jpg'
import Animation from '@/components/animations/Animation';
import Button from '@/components/button/Button';


const nftoyer = () => {

  return (
    <>
     <Animation>
      <ProjectHeader title={'NFTOYER'} category={'PRODUCT DESIGN / 3D'} year={'2022'} />

      <div className='w-full h-full bg-lightgray pt-4 px-4'>
        <Image src={Image1} height={'auto'} width={18800} className='self-center' quality={100} unoptimized='true' placeholder='blur' priority/>

        <Image src={Image2} height={'auto'} width={18800} className='self-center mt-4' quality={100} unoptimized='true' placeholder='blur'/>

        <div className='grid grid-cols-12 gap-4'>
          <div className='lg:col-span-4 col-span-12'>
            <Image src={Image3} height={998} width={14680} className='self-center lg:mt-4 mt-4' quality={100} unoptimized='true' placeholder='blur'/>
          </div>

          <div className='lg:col-span-4 col-span-12'>
            <Image src={Image4} height={998} width={14680} className='self-center lg:mt-4 mt-0' quality={100} unoptimized='true' placeholder='blur'/>
          </div>

          <div className='lg:col-span-4 col-span-12'>
            <Image src={Image5} height={998} width={14680} className='self-center lg:mt-4 mt-0' quality={100} unoptimized='true' placeholder='blur'/>
          </div>
        </div>

        <Image src={Image6} height={884} width={18800} className='self-center mt-4' quality={100} unoptimized='true' placeholder='blur'/>

        <div className='grid grid-cols-12'>          
            <div className='lg:col-span-4 col-span-12 flex flex-col'>
              <Image src={Image7} height={1185} width={6240} className='self-center pt-4 lg:pr-4 pr-0' quality={100} unoptimized='true' placeholder='blur'/>

              <Image src={Image8} height={932} width={6240} className='self-end pt-4 lg:pr-4 pr-0' quality={100} unoptimized='true' placeholder='blur'/>
            </div>

            <div className='lg:col-span-8 col-span-12'>
              <Image src={Image9} height={2055} width={6240} className='self-center pt-4 h-full' quality={100} unoptimized='true' placeholder='blur'/>
            </div>         
        </div>

        <Image src={Image10} height={672} width={18800} className='self-center mt-4' quality={100} unoptimized='true' placeholder='blur'/>

        <div className='grid grid-cols-12'>
          <div className='lg:col-span-6 col-span-12'>
            <Image src={Image11} height={930} width={14680} className='self-center pt-4 lg:pr-2 pr-0' quality={100} unoptimized='true' placeholder='blur'/>
          </div>

          <div className='lg:col-span-6 col-span-12'>
            <video width="19200" height="930" loop autoPlay muted className='pt-4 lg:pl-2 pl-0'>
              <source src="/assets/projects/nftoyer/nftoyer-12-video.mp4" type="video/mp4" />
            </video>
          </div>          
        </div>

        <Image src={Image13} height={1135} width={18800} className='self-center mt-4' quality={100} unoptimized='true' placeholder='blur'/>

        <div className='w-full flex justify-end mt-4'>            
          <Button text={'BACK TO HOME'} link={'/#projects'} />            
        </div>

      </div>
      </Animation>
    </>
  )
}

export default nftoyer
