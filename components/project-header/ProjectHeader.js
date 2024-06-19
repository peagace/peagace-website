// 'use client'
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ProjectHeader = ({ category, title, year }) => {
  return (
    <section className="flex h-full w-full bg-lightgray px-4 pt-[200px]">
      <div className="w-full self-center">
        <h1 className="break-words text-halfer text-black sm:text-half md:text-lg xl:text-xl">
          {title}
        </h1>
        <div className="flex justify-between">
          <p className="text-xs text-gray">{category}</p>
          <p className="text-right text-xs text-gray">{year}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectHeader;
