


'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { generalData } from '@/data/general-data';
import { motion, AnimatePresence } from "framer-motion"
import Experience from '@/components/canvas/Canvas';
import Clock from '@/components/clock/Clock';

export default function Home() {
  const year = new Date().getFullYear()


  return (
    <section className='bg-lightgray relative h-screen w-full flex'>
      <motion.div className="flex flex-col py-4 px-4 h-full w-screen z-[1] self-center place-content-between bg-intro bg-cover"
        initial={{ opacity: 0.5, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, easings: ['easeOut'] }}
      >
        <h1 className='text-xs text-gray uppercase'>em desenvolvimento * 開発中で * в разработке</h1>

        <motion.div className='flex flex-col'>
          <Image className='rotate-90 self-end' src="/assets/main/Arrow.svg" height={23} width={23} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, easings: ['easeOut'] }}
            className='text-sm text-right text-gray uppercase self-end pt-4 pb-8'>THERE’S NOTHING TO SEE HERE. <span className='font-[1]'>YET</span>.</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, easings: ['easeOut'] }}
            className='text-half xxl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-xl text-right text-black'>UNDER <span className='italic font-grotesk'>DEV</span>.</motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1, easings: ['easeOut'] }}
            className='text-right text-base mt-4 text-gray font-thin'><a href="mailto:pedro@peagace.com" className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>pedro@peagace.com</a></motion.p >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2, easings: ['easeOut'] }}

            className='text-base text-gray text-right mt-2'>São Paulo, Brasil<br></br><span className='text-base text-gray text-right mt-2'><Clock/> GMT-3</span></motion.p >

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.4, easings: ['easeOut'] }}

            className='text-right text-base mt-4 text-gray font-thin'><a href="https://www.instagram.com/peagace/" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Instagram</a>, <a href="https://www.behance.net/peagace" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Behance</a>, <a href="https://www.linkedin.com/in/phalencarbatista/" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>LinkedIn</a>, <a href="https://twitter.com/peagace_" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Twitter</a>, <a href="https://www.artstation.com/peagace" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Artstation</a>, <a href="https://discordapp.com/users/286355001876545536" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Discord</a>, & <a href="https://open.spotify.com/user/12176495314?si=34fb2f883fac4c61" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Spotify</a></motion.p >

        </motion.div>

        <div className='self-end'>
          <div className='flex justify-items-center justify-content-center self-center justify-center'>
            <h1 className='text-right text-xs text-gray uppercase self-center pr-2'>PEAGACE © {year}<br></br>CREATING SINCE 1996</h1>
            <Image src="/assets/main/main-logo.svg" height={28} width={28} className='self-center' />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
