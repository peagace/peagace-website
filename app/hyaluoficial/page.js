"use client";
import * as React from "react";
import ProjectHeader from "@/components/project-header/ProjectHeader";
import Image from "next/image";
import Image1 from "../../public/assets/projects/hyaluoficial/hyalu-1.jpg";
import Image2 from "../../public/assets/projects/hyaluoficial/hyalu-2.jpg";
import Image3 from "../../public/assets/projects/hyaluoficial/hyalu-3.jpg";
import Image4 from "../../public/assets/projects/hyaluoficial/hyalu-4.jpg";
import Image5 from "../../public/assets/projects/hyaluoficial/hyalu-5.jpg";
import Image6 from "../../public/assets/projects/hyaluoficial/hyalu-6.jpg";
import Image7 from "../../public/assets/projects/hyaluoficial/hyalu-7.jpg";
import Image8 from "../../public/assets/projects/hyaluoficial/hyalu-8.jpg";
import Image9 from "../../public/assets/projects/hyaluoficial/hyalu-9.jpg";
import Animation from "@/components/animations/Animation";
import Button from "@/components/button/Button";
import Pill from "@/components/pill/Pill";
import ThirdButton from "@/components/button/ThirdButton";

const hyaluoficial = () => {
  const STYLES = {
    videoIframeContainer: {
      padding: "56.25% 0 0 0",
      position: "relative",
    },
    videoIframe: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  };
  return (
    <>
      <Animation>
        <ProjectHeader
          title={"HYALUOFICIAL"}
          tags={[
            <Pill text={"STORYBOARDING"} />,
            <Pill text={"ART DIRECTION"} />,
            <Pill text={"3D"} />,
            <Pill text={"ANIMATION"} />,
            <Pill text={"SIMULATION"} />,
            <Pill text={"EDITING"} />,
          ]}
          description={
            "A collaborative design & animation project showcasing 3D visuals for OficialFarma, a leading pharmaceutical brand."
          }
          year={"2024"}
        />

        <div className="h-full w-full bg-lightgray px-4 pt-4">
          {/* VIDEO */}
          <div style={STYLES.videoIframeContainer}>
            <iframe
              title="vimeo-player"
              src={"https://player.vimeo.com/video/1025722391"}
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
              style={STYLES.videoIframe}
            ></iframe>
          </div>

          <Image
            src={Image1}
            height={"auto"}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            priority
            alt="hyaluoficial visual identity design"
          />

          <div className="mb-0 grid grid-cols-12 gap-4 lg:mb-4">
            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image2}
                height={998}
                width={14680}
                className="mt-4 self-center"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="hyaluoficial icon and brandmark"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image3}
                height={998}
                width={14680}
                className="mb-4 mt-0 self-center lg:mb-0 lg:mt-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="hyaluoficial business card"
              />
            </div>
          </div>

          {/* SEAMLESS GIF */}
          <div style={STYLES.videoIframeContainer}>
            <iframe
              src="https://player.vimeo.com/video/1025726246?%0Aautoplay=1&amp;loop=1&amp;muted=1&amp;autopause=0&amp;background=1&amp;title=0&amp;byline=0&amp;portrait=0"
              width="1920"
              height="1080"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={STYLES.videoIframe}
            ></iframe>
          </div>

          <Image
            src={Image4}
            height={"auto"}
            width={18800}
            className="my-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="hyaluoficial logo"
          />

          {/* SEAMLESS GIF */}
          <div style={STYLES.videoIframeContainer}>
            <iframe
              src="https://player.vimeo.com/video/1025726238?%0Aautoplay=1&amp;loop=1&amp;muted=1&amp;autopause=0&amp;background=1&amp;title=0&amp;byline=0&amp;portrait=0"
              width="1920"
              height="1080"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={STYLES.videoIframe}
            ></iframe>
          </div>

          <div className="mb-0 grid grid-cols-12 gap-4 lg:mb-4">
            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image5}
                height={998}
                width={14680}
                className="mt-4 self-center"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="hyaluoficial icon and brandmark"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <Image
                src={Image6}
                height={998}
                width={14680}
                className="mb-4 mt-0 self-center lg:mb-0 lg:mt-4"
                quality={100}
                unoptimized="true"
                placeholder="blur"
                alt="hyaluoficial business card"
              />
            </div>
          </div>

          {/* SEAMLESS GIF */}
          <div style={STYLES.videoIframeContainer}>
            <iframe
              src="https://player.vimeo.com/video/1025726258?%0Aautoplay=1&amp;loop=1&amp;muted=1&amp;autopause=0&amp;background=1&amp;title=0&amp;byline=0&amp;portrait=0"
              width="1920"
              height="1080"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={STYLES.videoIframe}
            ></iframe>
          </div>

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
                alt="hyaluoficial icon and brandmark"
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
                alt="hyaluoficial business card"
              />
            </div>
          </div>

          <Image
            src={Image9}
            height={"auto"}
            width={18800}
            className="mt-4 self-center"
            quality={100}
            unoptimized="true"
            placeholder="blur"
            alt="hyaluoficial social media layout"
          />

          <div className="spacing-y-4 mt-4 flex max-h-max w-full flex-wrap justify-end">
            <Image
              src={"/assets/projects/jetcross-preview.png"}
              alt="jetcross project preview"
              width={148}
              height={40}
              className="min-h-10 max-h-10  justify-center self-center"
              quality={100}
              unoptimized={true}
            />
            <ThirdButton text={"NEXT PROJECT: JETCROSS"} link={"/jetcross"} />
          </div>
        </div>
      </Animation>
    </>
  );
};

export default hyaluoficial;
