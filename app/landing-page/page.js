'use client'
import * as React from 'react';

import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/contact-form/ContactForm';
import Experience from '@/components/canvas/Canvas';
import Button from '@/components/button/Button';
import Clock from '@/components/clock/Clock';
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from '@/components/project-card/ProjectCard';


const Home = () => {
  return (
    <>
     
      {/* INTRO */}
      <section className='bg-lightgray relative h-screen w-full flex'>
      {/* <div className='absolute w-full h-full'>
        <Experience />
      </div> */}
        <div className='flex flex-col self-end w-full'>
          <div className='grid grid-cols-12 mx-4'>  
            <div className='col-span-12 mb-4 max-w-max'>
              <Button text={'SCHEDULE OPEN'} link={'/contato'}/>  
            </div>                  
            <h1 className='col-span-12 text-halfer xxl:text-xl xl:text-lg lg:text-medium md:text-medium sm:text-half text-black break-words'>PEAGACE<br></br>MULTIDISCIPLINARY DESIGNER WITH OVER 8+ YEARS OF EXPERIENCE IN <span className='italic font-[1] font-grotesk'>CREATING</span>.</h1>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className='bg-lightgray grid grid-cols-12'>
            <p className='col-span-12 text-base mt-14 text-black mx-4 md:col-span-6'>Designer at <a href="https://www.hokup.com.br/" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>hokup.com.br</a><br></br><br></br>
            <a href="mailto:pedro@peagace.com" className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>pedro@peagace.com</a><br></br>São Paulo, Brasil <Clock/> GMT-3</p>
            <p className='col-span-12 md:col-span-6 md:col-start-7 text-base mt-14 text-black mx-4'>Brazilian Art Director with over 8+ years of experience with Branding, UI/UX design for digital projects, 3D modeling and animation, Game Design, and JavaScript Front-end Development for apps and websites.</p>
      </section>

      {/* PROJECTS */}
      <section className='bg-lightgray grid grid-cols-12'>
        <div className='col-span-12 xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6 mx-4 mt-24'>            
          <ProjectCard category={'CONCEPT DESIGN / 3D / SIMULATION'} title={'NIKE AIR PILLS'} image={'bg-project-preview-01'}/>      
        </div>

        <div className='col-span-12 xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6 mx-4 mt-24'>
          <ProjectCard category={'CONCEPT DESIGN / 3D / ANIMATION'} title={'SÓ MAIS UMA'} image={'bg-project-preview-02'}/>
        </div> 

        <div className='col-span-12 xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6  mx-4 mt-24'>
          <ProjectCard category={'PRODUCT DESIGN / 3D'} title={'NFTOYER'} image={'bg-project-preview-03'}/>                
        </div>

        <div className='col-span-12 xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6  mx-4 mt-24'>
          <div className='bg-gray h-[600px]'></div>
          <p className='text-xs mt-4 text-gray'>3D / ANIMATION</p>
          <p className='text-base mt-2 text-black font-thin'>CHARLIE BROWN JR. SKATEBOARD</p>          
        </div>     

        <div className='col-span-12 xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6  mx-4 mt-24'>
          <div className='bg-gray h-[600px]'></div>
          <p className='text-xs mt-4 text-gray'>CONCEPT DESIGN / 3D</p>
          <p className='text-base mt-2 text-black font-thin'>NISSAN GTR R-35</p>          
        </div>     

        <div className='col-span-12 xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6  mx-4 mt-24'>
          <div className='bg-gray h-[600px]'></div>
          <p className='text-xs mt-4 text-gray'>3D / ANIMATION</p>
          <p className='text-base mt-2 text-black font-thin'>SKATE WHEEL</p>           
        </div>       
      </section>

      {/* SKILLS */}
      <div className='bg-lightgray relative w-full'>      
        <motion.h1 initial={{ opacity:0, y: 100 }}
        whileInView={{ opacity:1, y: 0}}
        transition={{ delay:0.2, duration: 0.4, easings: ['easeOut'] }}        
        viewport={{ once: true }} className='text-halfer xxl:text-xl xl:text-lg lg:text-medium md:text-medium sm:text-half text-black mx-4 pt-36'><span className='italic font-[1] font-grotesk'>CREATIVE DESIGN</span> BY<br></br> ART DIRECTION, 3D, ANIMATION, ILLUSTRATION, BRANDING, STORYTELING, UI <span className='italic font-[1] font-grotesk'>and</span> CODE.</motion.h1>   
      </div>

      {/* INFO */}
      <section className='bg-lightgray grid grid-cols-12 px-4 md:px-0'>
        <div className='col-span-12 xxl:col-span-4 xxl:col-start-8 xl:col-span-4 xl:col-start-8 lg:col-span-6 lg:col-start-6 md:mx-4 mt-16'>
          <p className='text-xs mt-4 text-gray'>SKILLS</p>
          <p className='text-base mt-2 text-black font-thin'>Art Direction, Graphic Design, 3D, Animation, Illustration, 2D, Game Design, Branding, UI Design for websites and apps, Front-end dev. & more.</p>          
        </div>     

        <div className='col-span-12 xxl:col-span-4 xxl:col-start-8 xl:col-span-4 xl:col-start-8 lg:col-span-6 lg:col-start-6 md:mx-4 mt-16'>
          <p className='text-xs mt-4 text-gray'>WHERE</p>
          <p className='text-base mt-2 text-black font-thin'><a href="mailto:pedro@peagace.com" className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>pedro@peagace.com</a><br></br>Working as Designer at <a href="https://www.hokup.com.br/" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>hokup.com.br</a><br></br>Living in São Paulo, Brasil</p>          
        </div> 

        <div className='col-span-12 xxl:col-span-4 xxl:col-start-8 xl:col-span-4 xl:col-start-8 lg:col-span-6 lg:col-start-6 md:mx-4 mt-16'>
          <p className='text-xs mt-4 text-gray'>SOCIAL</p>
          <p className='text-base mt-2 text-gray font-thin'>
            <a href="https://www.instagram.com/peagace/" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Instagram</a>, <a href="https://www.behance.net/peagace" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Behance</a>, <a href="https://www.linkedin.com/in/phalencarbatista/" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>LinkedIn</a>, <a href="https://twitter.com/peagace_" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Twitter</a>, <a href="https://www.artstation.com/peagace" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Artstation</a>, <a href="https://discordapp.com/users/286355001876545536" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Discord</a>, & <a href="https://open.spotify.com/user/12176495314?si=34fb2f883fac4c61" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Spotify</a>
          </p>
        </div> 
      </section>

      {/* FOOTER */}
      <section className='bg-lightgray'>
        <section className='flex flex-row justify-between pt-48 mx-4 '>
          <div className='max-w-max'><Button text={'START PROJECT'} link={'/contato'}/>  </div>
          
          <h4 className='text-base text-black'>PEAGACE © 2023</h4>
        </section>      
      
        <h1 className='text-halfer xxl:text-xl xl:text-lg lg:text-medium md:text-medium sm:text-half text-black pt-4 mx-4'>SCHEDULE OPEN</h1>    

        <section className='flex justify-end mx-4'>
          <a href="mailto:pedro@peagace.com" className='text-halfer break-all xxl:text-xl xl:text-lg lg:text-medium md:text-medium sm:text-half text-black sm:font-[1] xs:font-[1] md:font-[1] lg:font-[1] xl:font-[1] xxl:font-[1] decoration-2 underline-offset-8 underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent italic font-[1] font-grotesk'>PEDRO@PEAGACE.COM</a>       
        </section>
      </section>
    </>
  )
}

export default Home
