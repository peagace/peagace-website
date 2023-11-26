'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import SmallButton from '../small-button/SmallButton'

export default function Header() {

  return (
    <>
      <div className='fixed z-50 px-4 py-4 w-full'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row'>
            <a href='/' className='group'><Image src="/assets/main/gray-logo.svg" alt="PHC" width={28} height={28} className='mr-[10px] group-hover:blur-sm hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100  mix-blend-difference'/></a>
            <div className='flex flex-row'>
              <p className='self-center text-xs text-gray uppercase underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'><a href='/#about' className='py-[10px] px-[10px]'>ABOUT</a></p>
              <p className='self-center text-xs text-gray uppercase underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'><a href='/#projects' className='py-[10px] px-[10px]'>PROJECTS</a></p>
              <p className='self-center text-xs text-gray uppercase underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'><a href='/#contact' className='py-[10px] px-[10px]'>CONTACT</a></p>
            </div>
          </div>
          <div className='hidden sm:flex self-center'>
            <SmallButton text={'PEDRO@PEAGACE.COM'} link={'mailto:pedro@peagace.com'} />
          </div>
        </div>
      </div>
    </>
  )
}

