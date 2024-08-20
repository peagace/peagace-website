// 'use client'
import Image from "next/image";
import Clock from "../clock/Clock";
import Link from "next/link";
import Social from "../social/Social";
import PillSchedule from "../pill/PillSchedule";

const NewFooter = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <section className="bg-lightgray px-5 pb-5 pt-10" id="contact">
        <div className="flex w-full flex-col place-items-center content-center items-center justify-center justify-items-center place-self-center justify-self-center rounded-xl border border-outlinegray bg-darkgray object-center p-5 lg:col-span-4">
          <PillSchedule text={"Open Schedule"} />

          <p className="mt-5 text-center text-fourtyfour text-newblack">
            LET’S <span className="font-grotesk font-[1] italic">START</span>{" "}
            YOUR NEXT BIG{" "}
            <span className="font-grotesk font-[1] italic">PROJECT</span>.
          </p>

          <p className="mt-[60px] text-center text-base text-newgray">
            Drop me a line at
          </p>

          <div className="w-full pt-5">
            <Link
              href={"mailto:pedro@peagace.com"}
              target={"_blank"}
              className="group flex justify-center rounded-xl border border-outlinegray bg-acid pb-[10px] pt-[13px] duration-[400ms] ease-[cubic-bezier(0.1,1,.34,1)] hover:rounded-[100px] hover:bg-newblack"
            >
              <p className="text-btn uppercase text-newblack duration-[400ms] ease-[cubic-bezier(0.1,1,.34,1)] group-hover:text-acid ">
                pedro@peagace.com
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-5 flex w-full ">
          <div className="mx-5 h-[1px] w-full self-center bg-outlinegray"></div>
          <p className="min-w-max self-center text-eighteen text-newgray">
            or hit me up on
          </p>
          <div className="mx-5 h-[1px] w-full self-center bg-outlinegray"></div>
        </div>
        <div className="mt-5 flex w-full justify-center ">
          <Social />
        </div>
      </section>
      <section className="bg-footer-gradient pb-5 pt-20">
        <Image
          src={"/assets/main/PEAGACE.svg"}
          alt="PEAGACE ©"
          width={4000}
          height={24}
          className="px-5"
        />
        <div className="flex justify-between px-5 pt-5">
          <p className="pt-1 text-sm text-newgray">CREATING SINCE 1996</p>
          <p className="pt-1 text-sm text-newgray">v2.1 © {year}</p>
        </div>
      </section>
    </>
  );
};

export default NewFooter;
