'use client'
import * as React from 'react';
import ProjectHeader from '@/components/project-header/ProjectHeader';
import Image from 'next/image';
import Image1 from '../../public/assets/projects/sflex/sflex-01.jpg'
import Image2 from '../../public/assets/projects/sflex/sflex-02.jpg'
import Image3 from '../../public/assets/projects/sflex/sflex-03.jpg'
import Image4 from '../../public/assets/projects/sflex/sflex-04.jpg'
import Image5 from '../../public/assets/projects/sflex/sflex-05.jpg'
import Image6 from '../../public/assets/projects/sflex/sflex-06.jpg'
import Image7 from '../../public/assets/projects/sflex/sflex-07.jpg'
import Image8 from '../../public/assets/projects/sflex/sflex-08.jpg'
import Image9 from '../../public/assets/projects/sflex/sflex-09.jpg'
import Animation from '@/components/animations/Animation';
import Button from '@/components/button/Button';

const sflex = () => {

  return (
    <>
      <Animation>
        <ProjectHeader title={'SFLEX'} category={'LOGO DESIGN / VISUAL IDENTITY'} year={'2023'} />

        <div className='w-full h-full bg-lightgray pt-4 px-4'>
          <Image src={Image1} height={'auto'} width={18800} className='self-center' quality={100} unoptimized='true' placeholder='blur' priority/>

          <Image src={Image2} height={'auto'} width={18800} className='self-center mt-4' quality={100} unoptimized='true' placeholder='blur' />

          <div className='grid grid-cols-12'>
            <div className='lg:col-span-6 col-span-12'>
              <Image src={Image3} height={'auto'} width={14680} className='self-center mt-4 lg:pr-2 pr-0' quality={100} unoptimized='true' placeholder='blur' />
            </div>

            <div className='lg:col-span-6 col-span-12'>
              <Image src={Image4} height={'auto'} width={14680} className='self-center mt-4 lg:pl-2 pl-0' quality={100} unoptimized='true' placeholder='blur' />
            </div>
          </div>

          <Image src={Image5} height={1100} width={18800} className='self-center mt-4' quality={100} unoptimized='true' placeholder='blur' />

          <Image src={Image6} height={1101} width={18800} className='self-center mt-4' quality={100} unoptimized='true' placeholder='blur' />

          <Image src={Image7} height={1337} width={18800} className='self-center mt-4' quality={100} unoptimized='true' placeholder='blur' />

          <Image src={Image8} height={1100} width={18800} className='self-center mt-4' quality={100} unoptimized='true' placeholder='blur' />

          <Image src={Image9} height={920} width={18800} className='self-center mt-4' quality={100} unoptimized='true' placeholder='blur' />

          <div className='w-full flex justify-end mt-4'>            
              <Button text={'BACK TO HOME'} link={'/#projects'} />            
          </div>

        </div>
      </Animation>

    </>
  )
}

export default sflex
