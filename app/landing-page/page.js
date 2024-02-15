'use client'
import * as React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Experience from '@/components/canvas/Canvas';
import Button from '@/components/button/Button';
import Clock from '@/components/clock/Clock';
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from '@/components/project-card/ProjectCard';
import { LoadingScreen } from '@/components/loading-screen/LoadingScreen';

const Home = () => {

  const year = new Date().getFullYear()
  const [start, setStart] = React.useState(false);

  return (
    <>

      {/* LOADING SCREEN */}
      <LoadingScreen started={start} onStarted={() => {
        setStart(true)
        console.log('trigger')
      }
      } />

      {/* INTRO */}
      <section className='bg-lightgray relative h-screen w-full flex'>
        <div className='absolute w-full h-full pointer-events-none'>
          <Experience />
        </div>
        <div className='flex flex-col self-end w-full '>
          <div className='grid grid-cols-12 px-4 '>
            <div className='col-span-12 mb-4 max-w-max'>
              <Button text={'SCHEDULE OPEN'} link={'/#contact'} />
            </div>
            <h1 className='col-span-12 text-halfer sm:text-half md:text-lg xl:text-xl text-black break-words'>PEAGACE<br></br>WORLDWIDE DESIGNER WITH OVER 8+ YEARS OF EXPERIENCE IN <span className='italic font-[1] font-grotesk'>CREATING</span>.</h1>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className='bg-lightgray grid grid-cols-12 pt-[60px] px-4' id="about">

        <div className='lg:col-span-4 col-span-12'>
          <p className='text-xs text-gray'>WHO  /  私は誰ですか  /  КТО Я</p>
          <p className='text-base pt-[10px] text-black'>Pedro Henrique, 27y.<br></br>Living in São Paulo, Brasil <Clock /> GMT-3</p>
          <p className='text-base text-black font-thin pt-[30px] max-w-none lg:max-w-[360px]'><a href="https://www.instagram.com/peagace/" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Instagram</a>, <a href="https://www.behance.net/peagace" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Behance</a>, <a href="https://www.linkedin.com/in/phalencarbatista/" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>LinkedIn</a>, <a href="https://twitter.com/peagace_" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Twitter</a>, <a href="https://www.artstation.com/peagace" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Artstation</a>, <a href="https://discordapp.com/users/286355001876545536" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Discord</a>, & <a href="https://open.spotify.com/user/12176495314?si=34fb2f883fac4c61" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Spotify</a></p>
        </div>

        <div className='lg:col-span-6 lg:col-start-6 col-span-12 pt-[60px] lg:pt-0'>
          <p className='text-xs text-gray'>ABOUT  /  私について  /  ОБО МНЕ</p>
          <p className='text-base pt-[10px] text-black pb-[40px]'>Designer with over 8+ years of experience helping worlwide brands to create unique digital projects from scratch blending Art Direction, Animation, 3D, Illustration, Branding, UI and Code seamlessly.
            <br></br> <br></br>Currently co-founder and Designer at <a href="https://www.hokup.com.br/" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>hokup.com.br</a>.</p>
          <Button text={'pedro@peagace.com'} link={'mailto:pedro@peagace.com'} />
        </div>

      </section>

      {/* PROJECTS */}
      <section className='bg-lightgray grid grid-cols-12 pt-20' id="projects" initial={{ opacity: 0, y: 30 }}
      >
        <div className='col-span-12 lg:col-span-5 mx-4'>
          <a href={'/sflex'}>
            <div className='group'>
              <motion.div className={`bg-project-preview-03 lg:h-[511px] h-[600px] bg-contain bg-no-repeat bg-center`}
                initial={{ backgroundSize: '100%', borderRadius: '0px' }}
                whileHover={{ backgroundSize: '110%', borderRadius: '18px' }}
                transition={{ duration: 1.5, ease: [0, 0.55, 0.45, 1] }}
              />
              <p className='text-xs mt-4 text-gray max-w-max group-hover:tracking-[.15em] group-hover:transition-all ease-[cubic-bezier(0.55, 0, 1, 0.45)] duration-[1500ms]'>LOGO DESIGN / VISUAL IDENTITY</p>
              <p className='text-base mt-2 text-black font-thin max-w-max group-hover:text-accent group-hover:tracking-[.15em] group-hover:transition-all ease-[cubic-bezier(0.55, 0, 1, 0.45)] duration-[1500ms]'>SFLEX</p>
            </div>
          </a>
        </div>

        <div className='col-span-12 lg:col-span-7 lg:col-start-6 mx-4 pt-10 lg:pt-0'>
          <a href={'/nftoyer'}>
            <div className='group'>
              <motion.div className={`bg-project-preview-02 lg:h-[1063px] h-[600px] bg-contain bg-no-repeat bg-center`}
                initial={{ backgroundSize: '100%', borderRadius: '0px' }}
                whileHover={{ backgroundSize: '110%', borderRadius: '18px' }}
                transition={{ duration: 1.5, ease: [0, 0.55, 0.45, 1] }}
              />
              <p className='text-xs mt-4 text-gray max-w-max group-hover:tracking-[.15em] group-hover:transition-all ease-[cubic-bezier(0.55, 0, 1, 0.45)] duration-[1500ms]'>PRODUCT DESIGN / 3D</p>
              <p className='text-base mt-2 text-black font-thin max-w-max group-hover:text-accent group-hover:tracking-[.15em] group-hover:transition-all ease-[cubic-bezier(0.55, 0, 1, 0.45)] duration-[1500ms]'>NFTOYER</p>
            </div>
          </a>
        </div>

        <div className='col-span-12 lg:col-span-6 mx-4 lg:pt-5 pt-10'>
          <a href={'/coin'}>
            <div className='group'>
              <motion.div className={`bg-project-preview-04 lg:h-[908px] h-[600px] bg-contain bg-no-repeat bg-center`}
                initial={{ backgroundSize: '100%', borderRadius: '0px' }}
                whileHover={{ backgroundSize: '110%', borderRadius: '18px' }}
                transition={{ duration: 1.5, ease: [0, 0.55, 0.45, 1] }}
              />
              <p className='text-xs mt-4 text-gray max-w-max group-hover:tracking-[.15em] group-hover:transition-all ease-[cubic-bezier(0.55, 0, 1, 0.45)] duration-[1500ms]'>CONCEPT DESIGN / 3D / ANIMATION</p>
              <p className='text-base mt-2 text-black font-thin max-w-max group-hover:text-accent group-hover:tracking-[.15em] group-hover:transition-all ease-[cubic-bezier(0.55, 0, 1, 0.45)] duration-[1500ms]'>FMP x TELLA</p>
            </div>
          </a>
        </div>

        <div className='col-span-12 lg:col-span-6 lg:col-start-7 mx-4 lg:pt-5 pt-10'>
          <motion.div className={`bg-project-preview-05 lg:h-[511px] h-[600px] bg-contain bg-no-repeat bg-center`}
            initial={{ backgroundSize: '100%', borderRadius: '0px' }}
          />
          <p className='text-xs mt-4 text-gray max-w-max'>POTTE</p>
          <p className='text-base mt-2 text-gray font-thin max-w-max'>COMING SOOON</p>
        </div>

        <div className='col-span-12 lg:col-span-7 lg:col-start-1 mx-4 lg:pt-5 pt-10'>          
            <motion.div className={`bg-project-preview-06 lg:h-[1063px] h-[600px] bg-contain bg-no-repeat bg-center`}
              initial={{ backgroundSize: '100%', borderRadius: '0px' }}
            />
            <p className='text-xs mt-4 text-gray max-w-max'>NISSAN GTR R35</p>
            <p className='text-base mt-2 text-gray font-thin max-w-max'>COMING SOON</p>
        </div>

        <div className='col-span-12 lg:col-span-5 mx-4 lg:pt-5 pt-10'>
          <motion.div className={`bg-project-preview-01 lg:h-[511px] h-[600px] bg-contain bg-no-repeat bg-center`}
            initial={{ backgroundSize: '100%', borderRadius: '0px' }}
          />
          <p className='text-xs mt-4 text-gray max-w-max'>NIKE AIR PILLS</p>
          <p className='text-base mt-2 text-gray font-thin max-w-max'>COMING SOOON</p>
        </div>

      </section>

      {/* SKILLS */}
      {/* <div className='bg-lightgray relative w-full'>
        <motion.h1 initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, easings: ['easeOut'] }}
          viewport={{ once: true }} className='text-halfer xxl:text-xl xl:text-lg lg:text-medium md:text-medium sm:text-half text-black mx-4 pt-36'><span className='italic font-[1] font-grotesk'>CREATIVE DESIGN</span> BY<br></br> ART DIRECTION, 3D, ANIMATION, ILLUSTRATION, BRANDING, STORYTELING, UI <span className='italic font-[1] font-grotesk'>and</span> CODE.</motion.h1>
      </div> */}

      {/* INFO */}
      {/* <section className='bg-lightgray grid grid-cols-12 px-4 md:px-0'>
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
      </section> */}
    </>
  )
}

export default Home
