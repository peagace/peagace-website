// 'use client'
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"

const ProjectHeader = ({ category, title, year}) => {
    return (
        <section className='bg-lightgray h-full w-full flex px-4 pt-[200px]'>
            <div className='self-center w-full'>
                <h1 className='text-halfer sm:text-half md:text-lg xl:text-xl text-black break-words'>{title}</h1>
                <div className='flex justify-between'>
                    <p className='text-xs text-gray'>{category}</p>
                    <p className='text-xs text-gray text-right'>{year}</p>
                </div>            
            </div>
      </section>
    );
};

export default ProjectHeader;