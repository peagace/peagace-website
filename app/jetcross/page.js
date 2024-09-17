"use client";
import * as React from "react";
import ProjectHeader from "@/components/project-header/ProjectHeader";
import Image from "next/image";
import Image1 from "../../public/assets/projects/jetcross/jetcross-01.jpg";
import Image2 from "../../public/assets/projects/jetcross/jetcross-02.jpg";
import Image3 from "../../public/assets/projects/jetcross/jetcross-03.jpg";
import Image4 from "../../public/assets/projects/jetcross/jetcross-04.jpg";
import Image5 from "../../public/assets/projects/jetcross/jetcross-05.jpg";
import Image6 from "../../public/assets/projects/jetcross/jetcross-06.jpg";
import Image7 from "../../public/assets/projects/jetcross/jetcross-07.jpg";
import Image8 from "../../public/assets/projects/jetcross/jetcross-08.jpg";
import Image9 from "../../public/assets/projects/jetcross/jetcross-09.jpg";
import Image10 from "../../public/assets/projects/jetcross/jetcross-10.jpg";
import Image11 from "../../public/assets/projects/jetcross/jetcross-11.jpg";
import Image12 from "../../public/assets/projects/jetcross/jetcross-12.jpg";
import Image13 from "../../public/assets/projects/jetcross/jetcross-13.jpg";
import Image14 from "../../public/assets/projects/jetcross/jetcross-14.jpg";
import Image15 from "../../public/assets/projects/jetcross/jetcross-15.jpg";
import Image16 from "../../public/assets/projects/jetcross/jetcross-16.jpg";
import Animation from "@/components/animations/Animation";
import Button from "@/components/button/Button";
import Pill from "@/components/pill/Pill";
import ThirdButton from "@/components/button/ThirdButton";

const jetcross = () => {
  return (
    <>
      <Animation>
        <ProjectHeader
          title={"JETCROSS"}
          tags={[
            <Pill text={"BRANDING"} />,
            <Pill text={"GRAPHIC DESIGN"} />,
            <Pill text={"3D"} />,
            <Pill text={"RENDERING"} />,
            <Pill text={"UI DESIGN"} />,
          ]}
          description={
            "Branding, graphic design, and 3D product visualization for a mini jet boat factory. This project was developed in collaboration with @hokup.com.br."
          }
          year={"2024"}
        />

        <div className="h-full w-full bg-lightgray px-4 pt-4">
          <Image
            src={Image1}
            height={"auto"}
            width={18800}
            className="self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            priority
            alt="Jetcross visual identity design"
          />

          <Image
            src={Image2}
            height={"auto"}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="Jetcross logo"
          />

          <Image
            src={Image3}
            height={"auto"}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="Jetcross social media layout"
          />

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image4}
                height={998}
                width={14680}
                className="mt-4 self-center"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="Jetcross icon and brandmark"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image5}
                height={998}
                width={14680}
                className="mt-0 self-center lg:mt-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="Jetcross business card"
              />
            </div>
          </div>

          <Image
            src={Image6}
            height={884}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="Aquaseeker ad"
          />

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image7}
                height={998}
                width={14680}
                className="mt-4 self-center"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="Aquaseeker detailed 3D"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image8}
                height={998}
                width={14680}
                className="mt-0 self-center lg:mt-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="3D aquaseeker in water"
              />
            </div>
          </div>

          <Image
            src={Image9}
            height={672}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="Jetcross logo grid"
          />

          <Image
            src={Image10}
            height={672}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="Jetcross branding design"
          />

          <Image
            src={Image11}
            height={672}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="Jetcross aquaseeker boat"
          />

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image12}
                height={998}
                width={14680}
                className="mt-4 self-center"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="3D mini jet boat"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image13}
                height={998}
                width={14680}
                className="mt-0 self-center lg:mt-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="Business presentation layout for Jetcross"
              />
            </div>
          </div>

          <Image
            src={Image14}
            height={672}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="Jetcross social media patterns"
          />

          <Image
            src={Image15}
            height={672}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="Landing page UI Design"
          />

          <Image
            src={Image16}
            height={672}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="Web UI design for Jetcross"
          />

          <div className="spacing-y-4 mt-4 flex max-h-max w-full flex-wrap justify-end">
            <Image
              src={"/assets/projects/potte-preview.png"}
              alt="potte project preview"
              width={148}
              height={40}
              className="min-h-10 max-h-10  justify-center self-center"
              quality={100}
              unoptimized={true}
            />
            <ThirdButton text={"NEXT PROJECT: POTTE"} link={"/potte"} />
          </div>
        </div>
      </Animation>
    </>
  );
};

export default jetcross;
