// 'use client'
import Image from "next/image";
import Clock from "../clock/Clock";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="grid grid-cols-12 bg-footer bg-cover bg-center pt-60">
      <div
        className="col-span-12 flex flex-col place-content-end lg:col-span-6"
        id="contact"
      >
        <h1 className="mx-4 pt-4 text-half text-black lg:text-xl">
          LET'S START
        </h1>
        <h1 className="pl-12 font-grotesk text-half font-[1] italic text-accent lg:text-xl">
          CREATING.
        </h1>
      </div>

      <div className="col-span-12 mb-6 flex flex-col place-content-end content-end items-end justify-items-end lg:col-span-6">
        <Image
          className="mb-4 mr-4 mt-14 rotate-90 self-end lg:mt-0"
          src="/assets/main/Arrow.svg"
          height={23}
          width={23}
        />
        <a
          href="mailto:pedro@peagace.com"
          className="cursor:pointer mr-4 self-end break-all text-right font-grotesk text-halfest font-[1] italic text-black underline decoration-1 underline-offset-8 transition duration-100 ease-out hover:text-accent hover:transition hover:duration-100 hover:ease-out xs:font-[1] sm:font-[1] md:font-[1] lg:text-half lg:font-[1] xl:font-[1] xxl:font-[1]"
        >
          PEDRO@PEAGACE.COM
        </a>
      </div>

      <div className="col-span-6 mb-4 ml-4 flex flex-col place-content-end">
        <div className="justify-content-start flex justify-center justify-items-center self-start">
          <Image
            src="/assets/main/main-logo.svg"
            height={28}
            width={28}
            className=" opacity-60"
          />
          <h1 className="self-center pl-2 text-left text-xs uppercase text-gray">
            PEAGACE © {year}
            <br></br>CREATING SINCE 1996
          </h1>
        </div>
      </div>

      <div className="col-span-6 mb-4 mr-4 flex flex-col place-content-end">
        <div className="justify-content-end flex justify-end justify-items-end self-end">
          <h1 className="self-center pr-4 text-right text-xs uppercase text-gray">
            LOCAL TIME<br></br>
            <Clock />
          </h1>
          <h1 className="self-center pl-2 text-right text-xs uppercase text-gray">
            VERSION<br></br>4.2.0
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
