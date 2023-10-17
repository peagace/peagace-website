// 'use client'
import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/data/footer-data";
import { generalData } from "@/data/general-data";

const Footer = () => {
    return (
        <footer className="bg-footer-bg">
            <div className="container">
                <div className="grid gap-x-4 gap-y-12 pt-24 pb-24 grid-cols-12">

                    <div className=" col-span-12 lg:col-span-3">
                        {/* <!-- Logo --> */}
                        <Link href="/" className="">
                            <Image
                                src="/assets/main/main-logo.svg"
                                className="grayscale brightness-[10] mb-5"
                                alt="BRITE Informática"
                                height={30}
                                width={120}
                            />
                        </Link>
                        <Link href="#" className="mb-6">
                            {/* <img
                    src="/images/LogoCirsys.svg"
                    className="max-h-7 dark:block block mb-6"
                    alt="CIRSYS Tech"
                  /> */}
                        </Link>
                        <p className="text-secondary text-xs mb-2 max-w-[260px] "> {generalData.slogan} </p>
                        <p className="text-secondary text-xs mb-2 max-w-[260px] "> © {new Date().getFullYear()} {generalData.name} </p>
                        <div className='flex flex-row mb-12'>
                            {generalData.links.map((i) => (
                                <a target='_blank' href={i.href} className="mr-4">
                                    <Image
                                        src={i.image}
                                        alt="Social media icon"
                                        width={18}
                                        height={18}
                                        className="hover:brightness-200 ease-out transition duration-200"
                                    />
                                </a>
                            ))}
                            {/* <Image
                                src="/assets/icons/social/linkedin.svg"
                                alt="Hokup Logo"
                                width={18}
                                height={18}
                                className="hover:brightness-200 ease-out transition duration-200"
                            />
                            <a target='_blank' href='https://www.instagram.com/brite.informatica/' className="mr-4">
                                <Image
                                    src="/assets/icons/social/instagram.svg"
                                    alt="Hokup Logo"
                                    width={18}
                                    height={18}
                                    className="hover:brightness-200 ease-out transition duration-200"
                                />
                            </a> */}
                            {/* <a target='_blank' href='https://www.facebook.com/profile.php?id=100093501758299' className="mr-4">
                                <Image
                                    src="/assets/icons/social/facebook.svg"
                                    alt="Hokup Logo"
                                    width={20}
                                    height={20}
                                    className="hover:brightness-200 ease-out transition duration-200"
                                />
                            </a> */}
                        </div>
                        <div className="flex flex-row">
                            {/* <Image
                                src="/assets/icons/certified-lenovo-partner-03.svg"
                                alt="Hokup Logo"
                                width={84}
                                height={28}
                                className="mr-2"
                            /> */}
                            {/* <p className="text-[10px] text-secondary max-w-[114px]">Business Informática LTDA 62.547.484/0001-40</p> */}

                        </div>

                    </div>

                    <div className="w-full hidden lg:block">
                    </div>

                    {footerData.map((single) => (
                        <div
                            className={`${single.diffClass} col-span-6 lg:col-span-2`}
                            key={single.id}
                        >
                            <h4 className="text-secondary text-md mb-6 text-footer-title">
                                {single.title}
                            </h4>
                            <ul className="text-white text-md flex flex-col ">
                                {single.list.map((item) => {
                                    const { id, href, text } = item;
                                    return (
                                        <li key={id} className="my-1">
                                            <Link href={href} className="hover:text-footer-text-hover text-footer-text ease-out transition duration-200">
                                                {text}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-black hover:bg-white group transition duration-500 ease-out">
                <a className="" href="https://hokup.com.br" target="_blank">
                    <div className="container flex items-center ">
                        <Image className="group-hover:brightness-0 mr-4" src="/assets/main/main-logo-icon.svg" width={12} height={12} />
                        <p className="pr-2 text-white text-xs group-hover:text-black group-hover:font-bold">created at hokup.com.br</p>
                    </div>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
