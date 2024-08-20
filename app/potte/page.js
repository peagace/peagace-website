"use client";
import * as React from "react";
import ProjectHeader from "@/components/project-header/ProjectHeader";
import Image from "next/image";
import Image1 from "../../public/assets/projects/potte/potte-01.jpg";
import Image2 from "../../public/assets/projects/potte/potte-02.jpg";
import Image3 from "../../public/assets/projects/potte/potte-03.jpg";
import Image4 from "../../public/assets/projects/potte/potte-04.jpg";
import Image5 from "../../public/assets/projects/potte/potte-05.jpg";
import Image6 from "../../public/assets/projects/potte/potte-06.jpg";
import Image7 from "../../public/assets/projects/potte/potte-07.jpg";
import Image8 from "../../public/assets/projects/potte/potte-08.jpg";
import Image9 from "../../public/assets/projects/potte/potte-09.jpg";
import Image10 from "../../public/assets/projects/potte/potte-10.jpg";
import Image11 from "../../public/assets/projects/potte/potte-11.jpg";
import Image12 from "../../public/assets/projects/potte/potte-12.jpg";
import Image13 from "../../public/assets/projects/potte/potte-13.jpg";
import Image14 from "../../public/assets/projects/potte/potte-14.jpg";
import Image15 from "../../public/assets/projects/potte/potte-15.jpg";
import Image16 from "../../public/assets/projects/potte/potte-16.jpg";
import Image17 from "../../public/assets/projects/potte/potte-17.jpg";
import Image18 from "../../public/assets/projects/potte/potte-18.jpg";
import Image19 from "../../public/assets/projects/potte/potte-19.jpg";

import Animation from "@/components/animations/Animation";
import Button from "@/components/button/Button";
import Pill from "@/components/pill/Pill";
import SecondaryButton from "@/components/button/SecondaryButton";
import ThirdButton from "@/components/button/ThirdButton";

const potte = () => {
  return (
    <>
      <Animation>
        <ProjectHeader
          title={"POTTE"}
          tags={[
            <Pill text={"ART DIRECTION"} />,
            <Pill text={"3D"} />,
            <Pill text={"ANIMATION"} />,
          ]}
          description={
            "Dynamic product animation crafted for Potte, highlighting their plastic containers."
          }
          year={"2024"}
        />

        <div className="h-full w-full bg-lightgray px-4 pt-4">
          {/* VIDEO INTRO */}
          <video
            width="19200"
            height="1080"
            controls
            poster="/assets/projects/potte/potte-video-preview.jpg"
          >
            <source
              src="/assets/projects/potte/ReelComp_3.mp4"
              type="video/mp4"
            />
          </video>

          {/* PRODUTOS */}
          <div className="grid grid-cols-12 gap-4 pt-4">
            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image1}
                quality={100}
                width={50000}
                unoptimized="true"
                placeholder="blur"
                alt="Disney licensed products"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image2}
                quality={100}
                width={50000}
                unoptimized="true"
                placeholder="blur"
                alt="Batman water bottle"
              />

              <Image
                src={Image3}
                quality={100}
                width={50000}
                unoptimized="true"
                className="mt-4"
                placeholder="blur"
                alt="Lilo Stitch tupperware"
              />
            </div>
          </div>

          {/* GAMER */}
          <Image
            src={Image5}
            width={18800}
            className="mt-4"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="Gaming 3D product rendering"
          />

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-4">
              <Image
                src={Image6}
                height={998}
                width={14680}
                className="mt-4 self-center lg:mt-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="joystick 3D model"
              />
            </div>

            <div className="col-span-12 lg:col-span-4">
              <Image
                src={Image7}
                height={998}
                width={14680}
                className="mt-0 self-center lg:mt-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="minecraft pickaxe"
              />
            </div>

            <div className="col-span-12 lg:col-span-4">
              <Image
                src={Image8}
                height={998}
                width={14680}
                className="mt-0 self-center lg:mt-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="3D gold coin"
              />
            </div>
          </div>

          {/* GRASS LOGO */}
          <Image
            src={Image9}
            height={"auto"}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="Grass logo"
          />

          <div className="grid grid-cols-12">
            <div className="col-span-12 flex flex-col lg:col-span-6">
              {/* <Image
                src={Image10}
                height={1451}
                width={6240}
                className="self-center pr-0 pt-4 lg:pr-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
              /> */}

              <Image
                src={Image11}
                height={851}
                width={6240}
                className="self-end pr-0 pt-4 lg:pr-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="Grass logo design"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image12}
                height={580}
                width={6240}
                className="self-center pt-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="Sustainable logo"
              />
            </div>
          </div>

          {/* CANDY */}
          <Image
            src={Image13}
            height={"auto"}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="3D Candy typography"
          />

          <div className="grid grid-cols-12 pt-4">
            <div className="col-span-12 lg:col-span-7">
              <Image
                src={Image14}
                width={6240}
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="3D donnut"
              />
            </div>

            {/* <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image15}
                className="pl-2"
                width={6240}
                quality={100}
                unoptimized="true"
                placeholder="blur"
              />
            </div> */}
          </div>

          {/* HELLO KITTY */}
          <Image
            src={Image16}
            height={"auto"}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="Hello Kitty 3D products"
          />

          {/* BABY */}
          <Image
            src={Image17}
            height={"auto"}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="3D Baby products"
          />

          <div className="grid grid-cols-12 gap-4 pt-4">
            <div className="col-span-12 lg:col-span-8">
              <Image
                src={Image18}
                height={6240}
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="3D cute sun"
              />
            </div>

            <div className="col-span-12 lg:col-span-4">
              <Image
                src={Image19}
                height={6240}
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="3D cute moon"
              />
            </div>
          </div>

          {/* FOOTER */}
          <div className="spacing-y-4 mt-4 flex max-h-max w-full flex-wrap justify-end">
            <Image
              src={"/assets/projects/sflex-preview.png"}
              alt="hero"
              width={148}
              height={40}
              className="min-h-10 max-h-10  justify-center self-center"
              quality={100}
              unoptimized={true}
            />
            <ThirdButton text={"NEXT PROJECT: SFLEX"} link={"/sflex"} />
          </div>
        </div>
      </Animation>
    </>
  );
};

export default potte;
