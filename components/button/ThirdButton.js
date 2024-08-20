// 'use client'
import Link from "next/link";

const ThirdButton = ({ link, text, target }) => {
  return (
    <>
      <Link
        href={link}
        target={target}
        className="group z-10 my-4 ml-4 flex max-w-max rounded-xl border border-outlinegray bg-acid px-6 pb-[9px] pt-[12px] duration-[400ms] ease-[cubic-bezier(0.1,1,.34,1)] hover:rounded-[100px] hover:bg-newblack"
      >
        <p className="text-btn uppercase text-newblack duration-200 ease-out group-hover:text-acid group-hover:transition-all">
          {text}
        </p>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-1 ml-2.5 -rotate-45 self-center"
        >
          <path
            d="M1 11.0001L11 11.0001L11 1.00006"
            stroke="#272727"
            strokeWidth="2"
            className="duration-[400ms] ease-[cubic-bezier(0.1,1,.34,1)] group-hover:stroke-acid group-hover:transition-all"
          />
          <path
            d="M11 11.0002L1.06944 1.06964"
            stroke="#272727"
            strokeWidth="2"
            className="duration-[400ms] ease-[cubic-bezier(0.1,1,.34,1)] group-hover:stroke-acid group-hover:transition-all"
          />
        </svg>
      </Link>
    </>
  );
};

export default ThirdButton;
