import React from 'react'
import ContactForm from '@/components/contact-form/ContactForm'
import Image from 'next/image'
import Clock from '@/components/clock/Clock'

const page = () => {
    return (
        <>
            <section className='bg-lightgray h-screen w-full flex flex-col'>

                <div className='grid grid-cols-12 pt-28'>
                    <Image className='self-start ' src="/assets/main/Arrow.svg" height={23} width={23} />
                    <div className='lg:col-span-2 lg:col-start-9 col-span-5 col-start-2 self-start'>
                        <p className='text-xs text-gray'>WHERE</p>
                        <p className='text-base mt-2 text-black font-thin'>São Paulo, Brasil<br></br><Clock/> GMT-3</p>
                    </div>

                    <div className='lg:col-span-2 lg:col-start-11 col-span-6 col-start-7'>
                        <p className='text-xs text-gray'>SOCIAL</p>
                        <p className='text-base mt-2 text-gray font-thin'>
                            <a href="https://www.instagram.com/peagace/" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Instagram</a>, <a href="https://www.behance.net/peagace" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Behance</a>, <a href="https://www.linkedin.com/in/phalencarbatista/" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>LinkedIn</a>, <a href="https://twitter.com/peagace_" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Twitter</a>, <a href="https://www.artstation.com/peagace" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Artstation</a>, <a href="https://discordapp.com/users/286355001876545536" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Discord</a>, & <a href="https://open.spotify.com/user/12176495314?si=34fb2f883fac4c61" target={"_blank"} rel={"noreferrer"} className='text-base text-black underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent'>Spotify</a>
                        </p>
                    </div>
                </div>


                <div className='grid grid-cols-12 pt-40'>
                    <h1 className='col-span-6 text-halfer xxl:text-xl xl:text-lg lg:text-medium md:text-medium sm:text-half text-black break-words'>GET READY TO <span className='italic font-[1] font-grotesk'>VISUALIZE</span> YOUR PROJECT.</h1>
                </div>

                <div className='grid grid-cols-12'>
                    <a href="mailto:pedro@peagace.com" className='col-span-12 self-end text-right text-halfest lg:text-xl break-all text-black sm:font-[1] xs:font-[1] md:font-[1] lg:font-[1] xl:font-[1] xxl:font-[1] decoration-1 underline-offset-8 underline cursor:pointer hover:ease-out hover:transition hover:duration-100 ease-out transition duration-100 hover:text-accent italic font-[1] font-grotesk'>PEDRO@PEAGACE.COM</a>       
                </div>

            </section>



        </>
    )
}

export default page