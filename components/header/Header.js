'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import MenuToggle from './Toggle'
import Link from 'next/link'
import { generalData } from '@/data/general-data'
import { headerData } from '@/data/header-data'


export default function Header() {

  const [toggle, setToggle] = useState(false)
  const [display, setDisplay] = useState(false)
  const pathname = usePathname()

  //anim
  const openNav = {
    open: {
      height: '100vh',
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 1
      }
    },
    closed: {
      height: '80px',
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.3
      }
    }
  }

  const openLinks = {
    open: {
      opacity: 1,
      transition: {
        // type: 'spring',
        duration: 0.5,
        delay: 0.3
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0
      }
    }
  }

  const openSocial = {
    open: {
      opacity: 1,
      transition: {
        // type: 'spring',
        duration: 0.5,
        delay: 0.6
      },
    },
    closed: {
      opacity: 0,
      transition: {
        // type: 'spring',
        // bounce: 0.2,
        duration: 0.2,
        delay: 0
      }
    }
  }


  return (
    <>
      <motion.div
        className='z-[999] w-screen fixed flex flex-col mx-4 justify-center justify-items-center'
        animate={toggle ? "open" : "closed"}
        variants={openNav}
        initial={false}
      >
        <div className='grid grid-cols-12'>
          {/* Logo */}
          <a href='/' className='col-span-2'>
            <Image
              src="/assets/main/main-logo.svg"
              alt="PHC"
              width={45}
              height={45}
              className='backdrop-invert'
            />
          </a>

          {/* Navigation */}
          <div className='col-span-4 col-start-6 self-center'>
            {headerData.map((i) => (
              <Link key={i.id} href={i.href} className='text-base text-black underline hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent px-4'>
                {i.text}
              </Link>
            ))}
          </div>

          <div className='col-span-3 col-start-10 self-center'>          
            <Link href="/contato" className='text-base text-black underline hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>PEDRO@PEAGACE.COM<span className="after:content-['_↗']"></span></Link>
          </div>

          {/* Hamburger */}
          <motion.nav
            initial={false}
            animate={toggle ? "open" : "closed"}
            className='block md:hidden ml-auto'
          >
            <MenuToggle
              toggle={() => {
                setToggle(!toggle)
              }}
            />
          </motion.nav>
        </div>

        <div className={`${toggle ? "" : "hidden"} container md:hidden flex flex-col justify-between h-full`} >
          <motion.div
            initial={false}
            animate={toggle ? "open" : "closed"}
            variants={openLinks}
            style={{}}
            className='block'>
            <ul className='font-manrope uppercase text-lg text-content mt-5'>
              {headerData.map((i) => (
                <Link key={i.id} href={i.href} className={`mx-5 ease-in-out transition duration-300`} onClick={() => setToggle(false)}>
                  <p className={`${pathname === '/sobre' && 'text-green'} text-base ease-out transition duration-500 hover:ease-out hover:transition hover:duration-500 hover:text-white py-2`}>
                    {i.text}
                  </p>
                </Link>
              ))}
            </ul>
          </motion.div>

          <motion.div
            style={{}}
            className={`block pb-4`}
            initial={false}
            animate={toggle ? "open" : "closed"}
            variants={openSocial}
          >
            <div className='flex flex-row mb-1'>
              {generalData.links.map((i) => (
                <a target='_blank' href={i.href} className='mr-4'>
                  <Image
                    src={i.image}
                    alt={`asd ${i.name}`}
                    width={18}
                    height={18}
                  />
                </a>
              ))}
            </div>
            <a href={`mailto:${generalData.email}`} className='text-gray hover:text-dark-gray font-manrope font-normal'>{generalData.email}</a>
          </motion.div>
        </div>

      </motion.div>
    </>
  )
}

