// 'use client'
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"

const ProjectCard = ({ category, title, link, image }) => {
    return (
        <div className='group'>
            <motion.div className={`${image} h-[600px] bg-cover bg-no-repeat bg-center`}
            initial={{backgroundSize: '100%', borderRadius:'0px'}}
            whileHover={{ backgroundSize: '110%', borderRadius:'18px' }}        
            transition={{duration: 1.5, ease:[0, 0.55, 0.45, 1]}}
            />
            <p className='text-xs mt-4 text-gray max-w-max group-hover:tracking-[.15em] group-hover:transition-all ease-[cubic-bezier(0.55, 0, 1, 0.45)] duration-[1500ms]'>{category}</p>
            <p className='text-base mt-2 text-black font-thin max-w-max group-hover:text-accent group-hover:tracking-[.15em] group-hover:transition-all ease-[cubic-bezier(0.55, 0, 1, 0.45)] duration-[1500ms]'>{title}</p>
        </div>
    );
};

export default ProjectCard;