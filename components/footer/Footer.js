// 'use client'
import Image from "next/image";
import Clock from "../clock/Clock";

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <section className='bg-footer bg-center bg-cover grid grid-cols-12 pt-56'>
            <div className='col-span-12 lg:col-span-6 flex flex-col place-content-end' id='contact'>
                <h1 className='text-half lg:text-xl text-black pt-4 mx-4  '>LET'S START</h1>
                <h1 className='text-half lg:text-xl italic font-[1] font-grotesk text-accent'>CREATING.</h1>
            </div>

            <div className='col-span-12 lg:col-span-6 flex flex-col justify-items-end content-end items-end place-content-end mb-6'>
                <Image className='rotate-90 self-end mb-4 mr-4 lg:mt-0 mt-14' src="/assets/main/Arrow.svg" height={23} width={23} />
                <a href="mailto:pedro@peagace.com" className='mr-4 self-end text-right text-halfest lg:text-half break-all text-black sm:font-[1] xs:font-[1] md:font-[1] lg:font-[1] xl:font-[1] xxl:font-[1] decoration-1 underline-offset-8 underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent italic font-[1] font-grotesk'>PEDRO@PEAGACE.COM</a>
            </div>


            <div className='col-span-6 flex flex-col place-content-end ml-4 mb-4'>
                <div className='flex justify-items-center justify-content-start self-start justify-center'>
                    <Image src="/assets/main/main-logo.svg" height={28} width={28} className=' opacity-60' />
                    <h1 className='text-left text-xs text-gray uppercase self-center pl-2'>PEAGACE © {year}<br></br>CREATING SINCE 1996</h1>
                </div>
            </div>

            <div className='col-span-6 flex flex-col place-content-end mr-4 mb-4'>
                <div className='flex justify-items-end justify-content-end self-end justify-end'>
                    <h1 className='text-right text-xs text-gray uppercase self-center pr-4'>LOCAL TIME<br></br><Clock/></h1>
                    <h1 className='text-right text-xs text-gray uppercase self-center pl-2'>VERSION<br></br>4.2.0</h1>
                </div>
            </div>
        </section>
    );
};

export default Footer;
