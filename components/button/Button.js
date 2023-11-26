// 'use client'
import Link from "next/link";

const Button = ({ link, text, target }) => {
    return (
        <>
            <Link href={link} target={target} className='flex max-w-max group'>
                <p className='decoration-1 text-base text-black underline group-hover:text-accent group-hover:transition-all ease-out duration-200'>{text}</p>
                <svg width="16" height="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='-rotate-90 self-center ml-2.5 mb-1' >
                    <path d="M5.18182 24L24 24L24 5.18181" stroke="black" className='group-hover:stroke-accent group-hover:transition-all ease-out duration-200' />
                    <path d="M24 24L1 0.999999" stroke="black" className='group-hover:stroke-accent group-hover:transition-all ease-out duration-200' />
                </svg>
            </Link>
        </>
    );
};

export default Button;