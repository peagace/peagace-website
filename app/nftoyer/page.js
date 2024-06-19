"use client";
import * as React from "react";
import ProjectHeader from "@/components/project-header/ProjectHeader";
import Image from "next/image";
import Image1 from "../../public/assets/projects/nftoyer/nftoyer-01.jpg";
import Image2 from "../../public/assets/projects/nftoyer/nftoyer-02.jpg";
import Image3 from "../../public/assets/projects/nftoyer/nftoyer-03.jpg";
import Image4 from "../../public/assets/projects/nftoyer/nftoyer-04.jpg";
import Image5 from "../../public/assets/projects/nftoyer/nftoyer-05.jpg";
import Image6 from "../../public/assets/projects/nftoyer/nftoyer-06.jpg";
import Image7 from "../../public/assets/projects/nftoyer/nftoyer-07.jpg";
import Image8 from "../../public/assets/projects/nftoyer/nftoyer-08.jpg";
import Image9 from "../../public/assets/projects/nftoyer/nftoyer-09.jpg";
import Image10 from "../../public/assets/projects/nftoyer/nftoyer-10.jpg";
import Image11 from "../../public/assets/projects/nftoyer/nftoyer-11.jpg";
import Image13 from "../../public/assets/projects/nftoyer/nftoyer-13.jpg";
import Animation from "@/components/animations/Animation";
import Button from "@/components/button/Button";

const nftoyer = () => {
  return (
    <>
      <Animation>
        <ProjectHeader
          title={"NFTOYER"}
          category={"PRODUCT DESIGN / 3D"}
          year={"2022"}
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
            alt="NFT Chorão Charlie Brown Jr."
          />

          <Image
            src={Image2}
            height={"auto"}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="Toy Art"
          />

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-4">
              <Image
                src={Image3}
                height={998}
                width={14680}
                className="mt-4 self-center lg:mt-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="3D Character Details"
              />
            </div>

            <div className="col-span-12 lg:col-span-4">
              <Image
                src={Image4}
                height={998}
                width={14680}
                className="mt-0 self-center lg:mt-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="3D toy"
              />
            </div>

            <div className="col-span-12 lg:col-span-4">
              <Image
                src={Image5}
                height={998}
                width={14680}
                className="mt-0 self-center lg:mt-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="3D Sneaker"
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
            alt="3D wireframe"
          />

          <div className="grid grid-cols-12">
            <div className="col-span-12 flex flex-col lg:col-span-4">
              <Image
                src={Image7}
                height={1185}
                width={6240}
                className="self-center pr-0 pt-4 lg:pr-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="3D head wireframe"
              />

              <Image
                src={Image8}
                height={932}
                width={6240}
                className="self-end pr-0 pt-4 lg:pr-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="3D chest wireframe"
              />
            </div>

            <div className="col-span-12 lg:col-span-8">
              <Image
                src={Image9}
                height={2055}
                width={6240}
                className="h-full self-center pt-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="3D character wireframe"
              />
            </div>
          </div>

          <Image
            src={Image10}
            height={672}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="3D finger skate"
          />

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image11}
                height={930}
                width={14680}
                className="self-center pr-0 pt-4 lg:pr-2"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="3D Fingerboard"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <video
                width="19200"
                height="930"
                loop
                autoPlay
                muted
                className="pl-0 pt-4 lg:pl-2"
              >
                <source
                  src="/assets/projects/nftoyer/nftoyer-12-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <Image
            src={Image13}
            height={1135}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="3D skatepark"
          />

          <div className="mt-4 flex w-full justify-end">
            <Button text={"BACK TO HOME"} link={"/#projects"} />
          </div>
        </div>
      </Animation>
    </>
  );
};

export default nftoyer;
