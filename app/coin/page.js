'use client'
import * as React from 'react';
import ProjectHeader from '@/components/project-header/ProjectHeader';
import Image from 'next/image';
import Image1 from '../../public/assets/projects/coin/coin-01.png'
import Image3 from '../../public/assets/projects/coin/coin-03.png'
import Image4 from '../../public/assets/projects/coin/coin-04.png'
import Image5 from '../../public/assets/projects/coin/coin-05.png'
import Image6 from '../../public/assets/projects/coin/coin-06.png'
import Animation from '@/components/animations/Animation';
import Button from '@/components/button/Button';

const coin = () => {

  return (
    <>
      <Animation>
        <ProjectHeader title={'FMP x TELLA'} category={'CONCEPT DESIGN / 3D / ANIMATION'} year={'2023'} />

        <div className='w-full h-full bg-lightgray pt-4 px-4'>
          <Image src={Image1} height={720} width={18800} className='self-center' quality={100} unoptimized='true' placeholder='blur'/>

          <video width="19200" height="1080" loop autoPlay muted className='pt-4'>
            <source src="/assets/projects/coin/coin-02.mp4" type="video/mp4"/>
          </video>

          <Image src={Image3} height={720} width={18800} className='self-center pt-4' quality={100} unoptimized='true' placeholder='blur'/>

          <Image src={Image4} height={1800} width={18800} className='self-center pt-4' quality={100} unoptimized='true' placeholder='blur'/>

          <div className='grid grid-cols-12'>
            <div className='lg:col-span-6 col-span-12'>
              <Image src={Image5} height={930} width={14680} className='self-center pt-4 lg:pr-2 pr-0' quality={100} unoptimized='true' placeholder='blur'/>
            </div>

            <div className='lg:col-span-6 col-span-12'>
              <Image src={Image6} height={930} width={14680} className='self-center pt-4 lg:pl-2 pl-0' quality={100} unoptimized='true' placeholder='blur'/>
            </div>
          </div>

          <video width="18800" height="1800" loop autoPlay muted className='pt-4'>
            <source src="/assets/projects/coin/coin-07.mp4" type="video/mp4" />
          </video>

          <div className='w-full flex justify-end mt-4'>            
              <Button text={'BACK TO HOME'} link={'/#projects'} />            
          </div>
        </div>
      </Animation>
    </>
  )
}

export default coin
