// 'use client'
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Pill from "../pill/Pill";

const ProjectHeader = ({ category, title, year, tags, description }) => {
  return (
    // <section className="flex h-full w-full bg-lightgray px-4 pt-[200px]">
    //   <div className="w-full self-center">
    //     <h1 className="break-words text-halfer text-black sm:text-half md:text-lg xl:text-xl">
    //       {title}
    //     </h1>
    //     <div className="flex justify-between">
    //       <p className="text-xs text-gray">{category}</p>
    //       <p className="text-right text-xs text-gray">{year}</p>
    //     </div>
    //   </div>
    // </section>
    <section className="grid grid-cols-12 gap-5 bg-lightgray px-5 pb-10 pt-[140px] lg:gap-10">
      <p className="col-span-2 text-eighteen text-newgray group-hover:text-newblack lg:col-span-1">
        {year}
      </p>
      <p className="col-span-10 text-twentyfour uppercase text-newblack duration-[800ms] ease-[cubic-bezier(0,.97,.34,1)] group-hover:tracking-[0.4rem] group-hover:text-black lg:col-span-3">
        {title}
      </p>
      <p className="col-span-12 text-base text-newblack lg:col-span-3">
        {description}
      </p>
      <div className="col-span-12 lg:col-span-4 lg:col-start-9">
        <div className="flex flex-wrap self-start">{tags}</div>
      </div>
    </section>
  );
};

export default ProjectHeader;
