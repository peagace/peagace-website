// 'use client'
import Link from "next/link";

const SmallButton = ({ link, text, target }) => {
    return (
        <>
            <Link href={link} target={target} className='flex group'>
                <p className='self-center decoration-1 text-xs text-gray underline group-hover:text-accent group-hover:transition-all ease-out duration-200'>{text}</p>
                <svg width="10" height="10" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='-rotate-90 self-center ml-[10px]' >
                    <path d="M5.18182 24L24 24L24 5.18181" stroke="#666666" className='group-hover:stroke-accent group-hover:transition-all ease-out duration-200' />
                    <path d="M24 24L1 0.999999" stroke="#666666" className='group-hover:stroke-accent group-hover:transition-all ease-out duration-200' />
                </svg>
            </Link>
        </>
    );
};

export default SmallButton;