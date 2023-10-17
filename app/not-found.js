// import { BtnChev } from '@/components/buttons/BtnChev'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const notFound = () => {
    return (
        <section className="bg-cream h-screen flex justify-center items-center">
            <div className='container flex flex-col justify-center items-center'>
                <Image className='mb-4' src="/assets/main/main-logo-icon.svg" width={50} height={50} alt='Main Logo' />
                <h1 className="text-xl mb-4 text-primary font-semibold text-center">
                    Não conseguimos encontrar essa página!
                </h1>
                <p className='text-secondary text-base mb-20 text-center'>Parece que o conteúdo que você está buscando não existe.</p>
                <Link href="/" className="px-4 py-1 rounded-full text-black bg-white font-bold"> Voltar para home</Link>
            </div>
        </section>
    )
}

export default notFound