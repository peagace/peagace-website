// import { BtnChev } from '@/components/buttons/BtnChev'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const notFound = () => {
    return (
        <section className="bg-lightgray h-screen flex justify-center items-center">
            <div className='container flex flex-col justify-center items-center z-[1]'>
                <Image className='mb-4' src="/assets/main/main-logo.svg" width={50} height={50} alt='Main Logo' />
                <h1 className='text-xs text-gray text-center uppercase'>PÁGINA NÃO ENCONTRADA / ページが見つかりません。/ СТРАНИЦА НЕ НАЙДЕНА</h1>
                <h1 className='text-half xxl:text-xl xl:text-xl lg:text-xl md:text-xl sm:mtext-xl text-center text-black'>
                PAGE NOT <span className='font-[1]'>FOUND</span>.
                </h1>

                <p className='text-sm text-center text-gray uppercase pt-14 pb-8'>WHAT THE F*#CK ARE YOU LOOKING FOR?</p>
                <Link href="/" className='text-base text-black underline hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>NAVIGATE BACK HOME<span className="after:content-['_↗']"></span></Link>

            </div>
            <h1 className='text-[500px] text-[#c2c2c2] font-[1] absolute z-[0]'>404</h1>
                
        </section>
    )
}

export default notFound