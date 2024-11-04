"use client";
import * as React from "react";
import ProjectHeader from "@/components/project-header/ProjectHeader";
import Image from "next/image";
import Image1 from "../../public/assets/projects/coin/coin-01.jpg";
import Image3 from "../../public/assets/projects/coin/coin-03.jpg";
import Image4 from "../../public/assets/projects/coin/coin-04.jpg";
import Image5 from "../../public/assets/projects/coin/coin-05.jpg";
import Image6 from "../../public/assets/projects/coin/coin-06.jpg";
import Animation from "@/components/animations/Animation";
import Button from "@/components/button/Button";
import Pill from "@/components/pill/Pill";
import ThirdButton from "@/components/button/ThirdButton";

const coin = () => {
  return (
    <>
      <Animation>
        <ProjectHeader
          title={"3D COIN"}
          tags={[<Pill text={"3D"} />, <Pill text={"ANIMATION"} />]}
          description={
            "A custom cover and animation crafted specifically for a Spotify canvas loop."
          }
          year={"2023"}
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
            alt="3D coin design"
          />

          <video
            width="19200"
            height="1080"
            loop
            autoPlay
            muted
            className="mt-4"
          >
            <source src="/assets/projects/coin/coin-02.mp4" type="video/mp4" />
          </video>

          <Image
            src={Image3}
            height={"auto"}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="3D coin"
          />

          <Image
            src={Image4}
            height={"auto"}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="3D coin"
          />

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image5}
                height={930}
                width={14680}
                className="mt-4 self-center pr-0 lg:pr-2"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="3D coin"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image6}
                height={930}
                width={14680}
                className="mt-4 self-center pl-0 lg:pl-2"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="3D coin"
              />
            </div>
          </div>

          <video
            width="18800"
            height="1800"
            loop
            autoPlay
            muted
            className="mt-4"
          >
            <source src="/assets/projects/coin/coin-07.mp4" type="video/mp4" />
          </video>

          <div className="spacing-y-4 mt-4 flex max-h-max w-full flex-wrap justify-end">
            <Image
              src={"/assets/projects/hyalu-preview.png"}
              alt="hyaluoficial project preview"
              width={148}
              height={40}
              className="min-h-10 max-h-10  justify-center self-center"
              quality={100}
              unoptimized={true}
            />
            <ThirdButton
              text={"NEXT PROJECT: HYALUOFICIAL"}
              link={"/hyaluoficial"}
            />
          </div>
        </div>
      </Animation>
    </>
  );
};

export default coin;
