"use client";
import * as React from "react";
import ProjectHeader from "@/components/project-header/ProjectHeader";
import Image from "next/image";
import Image1 from "../../public/assets/projects/sflex/sflex-01.jpg";
import Image2 from "../../public/assets/projects/sflex/sflex-02.jpg";
import Image3 from "../../public/assets/projects/sflex/sflex-03.jpg";
import Image4 from "../../public/assets/projects/sflex/sflex-04.jpg";
import Image5 from "../../public/assets/projects/sflex/sflex-05.jpg";
import Image6 from "../../public/assets/projects/sflex/sflex-06.jpg";
import Image7 from "../../public/assets/projects/sflex/sflex-07.jpg";
import Image8 from "../../public/assets/projects/sflex/sflex-08.jpg";
import Image9 from "../../public/assets/projects/sflex/sflex-09.jpg";
import Animation from "@/components/animations/Animation";
import Button from "@/components/button/Button";
import Pill from "@/components/pill/Pill";
import SecondaryButton from "@/components/button/SecondaryButton";
import PillSchedule from "@/components/pill/PillSchedule";
import Link from "next/link";
import Social from "@/components/social/Social";
import ThirdButton from "@/components/button/ThirdButton";

const sflex = () => {
  return (
    <>
      <Animation>
        <ProjectHeader
          title={"SFLEX"}
          tags={[<Pill text={"BRANDING"} />, <Pill text={"UI/WEB DESIGN"} />]}
          description={
            "Visual identity and UI Design created for a leading metallurgy company in Brazil."
          }
          year={"2023"}
        />

        <div className="h-full w-full bg-lightgray px-5 pt-5">
          <Image
            src={Image1}
            height={"auto"}
            width={18800}
            className="self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            priority
          />

          <Image
            src={Image2}
            height={"auto"}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
          />

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image3}
                height={"auto"}
                width={14680}
                className="mt-4 self-center pr-0 lg:pr-2"
                quality={100}
                unoptimized="true"
                placeholder="blur"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image4}
                height={"auto"}
                width={14680}
                className="mt-4 self-center pl-0 lg:pl-2"
                quality={100}
                unoptimized="true"
                placeholder="blur"
              />
            </div>
          </div>

          <Image
            src={Image5}
            height={1100}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
          />

          <Image
            src={Image6}
            height={1101}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
          />

          <Image
            src={Image7}
            height={1337}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
          />

          <Image
            src={Image8}
            height={1100}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
          />

          <Image
            src={Image9}
            height={920}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
          />

          <div className="spacing-y-4 mt-4 flex max-h-max w-full flex-wrap justify-end">
            <Image
              src={"/assets/projects/nftoyer-preview.png"}
              alt="hero"
              width={148}
              height={40}
              className="min-h-10 max-h-10  justify-center self-center"
              quality={100}
              unoptimized={true}
            />
            <ThirdButton text={"NEXT PROJECT: NFTOYER"} link={"/nftoyer"} />
          </div>
        </div>
      </Animation>
    </>
  );
};

export default sflex;
