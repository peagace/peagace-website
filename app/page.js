"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Experience from "@/components/canvas/Canvas";
import Button from "@/components/button/Button";
import Clock from "@/components/clock/Clock";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/project-card/ProjectCard";
import { LoadingScreen } from "@/components/loading-screen/LoadingScreen";
import Animation from "@/components/animations/Animation";
import Social from "@/components/social/Social";
import Pill from "@/components/pill/Pill";
import Project from "@/components/project/Project";
import PillSchedule from "@/components/pill/PillSchedule";
import SecondaryButton from "@/components/button/SecondaryButton";

const Home = () => {
  // const year = new Date().getFullYear();
  const [start, setStart] = React.useState(false);

  return (
    <div className="bg-lightgray px-[0px]">
      {/* LOADING SCREEN */}
      <LoadingScreen
        started={start}
        onStarted={() => {
          setStart(true);
          console.log("trigger");
        }}
      />

      <Animation>
        {/* INTRO */}
        {/* <section className="relative flex h-screen w-full bg-lightgray">
          <div className="pointer-events-none absolute h-full w-full">
            <Experience />
          </div>
          <div className="flex w-full flex-col self-end pb-[40px] lg:pb-0">
            <div className="grid grid-cols-12 px-4 ">
              <div className="col-span-12 mb-4 max-w-max">
                <Button text={"SCHEDULE OPEN"} link={"/#contact"} />
              </div>
              <h1 className="col-span-12 break-words text-halfer text-black sm:text-half md:text-lg xl:text-xl">
                PEAGACE<br></br>WORLDWIDE DESIGNER WITH OVER 8 YEARS OF
                EXPERIENCE IN{" "}
                <span className="font-grotesk font-[1] italic">CREATING</span>.
              </h1>
            </div>
          </div>
        </section> */}

        {/* INTRO V2*/}
        <section className="relative flex h-screen w-full bg-hero-gradient">
          <div className="pointer-events-none absolute h-full w-full">
            <Experience />
          </div>
          <div className="flex w-full flex-col self-end pb-5">
            <div className="grid grid-cols-12 px-5 ">
              <div className="mb-10 flex max-w-max">
                <Button text={"ABOUT"} link={"/#about"} />
                <div className="z-10 ml-5">
                  <SecondaryButton text={"PROJECTS"} link={"/#projects"} />
                </div>
              </div>
              <div className="col-span-12 hidden sm:block">
                <Image
                  src={"/assets/main/hero.svg"}
                  alt="hero"
                  width={4000}
                  height={5000}
                  className=""
                />
              </div>
              <div className="col-span-12 block pb-5 sm:hidden">
                <Image
                  src={"/assets/main/hero-mobile.svg"}
                  alt="hero"
                  width={4000}
                  height={5000}
                  className="pb-5"
                />
              </div>
              {/* <h1 className="text-mediumhalf col-span-12 break-words text-black sm:text-lg xl:text-xl xxl:text-xxl">
                MAKING<br></br>
                <span>
                  <h1 className="text-mediumhalf col-span-12 break-words text-right text-black sm:text-lg xl:text-xl xxl:text-xxl">
                    NICE PIXELS
                  </h1>
                </span>{" "}
                <span className="font-grotesk font-[1] italic">MOVE</span>.
              </h1> */}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        {/* <section
          className="grid grid-cols-12 bg-lightgray px-4 pt-[60px]"
          id="about"
        >
          <div className="col-span-12 lg:col-span-4">
            <p className="text-xs text-gray">WHO / 私は誰ですか / КТО Я</p>
            <p className="pt-[10px] text-base text-black">
              Pedro Henrique, 28.<br></br>Living in São Paulo, Brazil <Clock />{" "}
              GMT-3
            </p>
            <p className="max-w-none pt-[30px] text-base font-thin text-black lg:max-w-[360px]">
              <a
                href="https://www.instagram.com/peagace/"
                target={"_blank"}
                rel={"noreferrer"}
                className="cursor:pointer text-base text-black underline transition duration-100 ease-out hover:text-accent hover:transition hover:duration-100 hover:ease-out"
              >
                Instagram
              </a>
              ,{" "}
              <a
                href="https://www.behance.net/peagace"
                target={"_blank"}
                rel={"noreferrer"}
                className="cursor:pointer text-base text-black underline transition duration-100 ease-out hover:text-accent hover:transition hover:duration-100 hover:ease-out"
              >
                Behance
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/phalencarbatista/"
                target={"_blank"}
                rel={"noreferrer"}
                className="cursor:pointer text-base text-black underline transition duration-100 ease-out hover:text-accent hover:transition hover:duration-100 hover:ease-out"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                href="https://twitter.com/peagace_"
                target={"_blank"}
                rel={"noreferrer"}
                className="cursor:pointer text-base text-black underline transition duration-100 ease-out hover:text-accent hover:transition hover:duration-100 hover:ease-out"
              >
                Twitter
              </a>
              ,{" "}
              <a
                href="https://www.artstation.com/peagace"
                target={"_blank"}
                rel={"noreferrer"}
                className="cursor:pointer text-base text-black underline transition duration-100 ease-out hover:text-accent hover:transition hover:duration-100 hover:ease-out"
              >
                Artstation
              </a>
              ,{" "}
              <a
                href="https://discordapp.com/users/286355001876545536"
                target={"_blank"}
                rel={"noreferrer"}
                className="cursor:pointer text-base text-black underline transition duration-100 ease-out hover:text-accent hover:transition hover:duration-100 hover:ease-out"
              >
                Discord
              </a>
              , &{" "}
              <a
                href="https://open.spotify.com/user/12176495314?si=34fb2f883fac4c61"
                target={"_blank"}
                rel={"noreferrer"}
                className="cursor:pointer text-base text-black underline transition duration-100 ease-out hover:text-accent hover:transition hover:duration-100 hover:ease-out"
              >
                Spotify
              </a>
            </p>
          </div>

          <div className="col-span-12 pt-[60px] lg:col-span-6 lg:col-start-6 lg:pt-0">
            <p className="text-xs text-gray">ABOUT / 私について / ОБО МНЕ</p>
            <p className="pb-[40px] pt-[10px] text-base text-black">
              Designer with over 8 years of experience helping worldwide brands
              create unique digital projects from scratch by seamlessly blending
              Art Direction, Animation, 3D, Illustration, Branding, UI, and
              Code.
              <br></br> <br></br>Currently co-founder and Designer at{" "}
              <a
                href="https://www.hokup.com.br/"
                target={"_blank"}
                rel={"noreferrer"}
                className="cursor:pointer text-base text-black underline transition duration-100 ease-out hover:text-accent hover:transition hover:duration-100 hover:ease-out"
              >
                hokup.com.br
              </a>
              .
            </p>
            <Button
              text={"pedro@peagace.com"}
              link={"mailto:pedro@peagace.com"}
            />
          </div>
        </section> */}

        {/* ABOUT V2 */}
        <section className="bg-lightgray p-5" id="about">
          <div className="grid w-full grid-cols-12 gap-5 rounded-xl border border-outlinegray bg-darkgray p-5 lg:col-span-4">
            <p className="col-span-12 mt-[140px] pt-[10px] text-left text-eighteen text-newgray lg:col-span-4 lg:text-right">
              ABOUT — について
            </p>
            <p className="col-span-12 mt-0 text-fourtyfourresponse text-newblack lg:col-span-8 lg:mt-[140px] lg:text-fourtyfour">
              Hello — I'm a{" "}
              <a
                href="https://www.google.com/maps/?q=S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%2C%20Brazil"
                target={"_blank"}
                rel={"noreferrer"}
                className="cursor:pointer underline decoration-2 duration-100 ease-out hover:text-gray hover:transition hover:duration-100 hover:ease-out"
              >
                São Paulo
              </a>
              -based Designer & Art Director, helping worldwide brands craft
              exquisite visual projects.
            </p>

            <div className="col-span-12 mt-10 flex lg:col-span-8 lg:col-start-5 ">
              <div className="h-[100px] w-[100px]">
                <Image
                  src="/assets/main/peagace-profile.jpg"
                  className="rounded-full"
                  alt="Peagace profile"
                  height={100}
                  width={100}
                />
              </div>

              <div className="ml-6 flex flex-col justify-center">
                <p className="text-base text-newblack">
                  Pedro Henrique Alencar, 28
                </p>
                <p className="mt-1 text-sm text-newgray">
                  Creating since 1996 ©
                </p>
                <div className="mt-3">
                  <Social />
                </div>
              </div>
            </div>

            <div className="col-span-12 w-full pt-20">
              <Link
                href={"/#contact"}
                target={""}
                className="group flex justify-center rounded-xl border border-outlinegray bg-acid pb-[7px] pt-[13px] duration-[400ms] ease-[cubic-bezier(0.1,1,.34,1)] hover:rounded-[100px]   hover:bg-newblack"
              >
                <p className="text-btn uppercase text-newblack duration-[400ms] ease-[cubic-bezier(0.1,1,.34,1)] group-hover:text-acid">
                  GET IN TOUCH
                </p>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-1 ml-2.5 self-center"
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
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        {/* <section
          className="grid grid-cols-12 bg-lightgray pt-20"
          id="projects"
          initial={{ opacity: 0, y: 30 }}
        >
          <div className="col-span-12 mx-4 lg:col-span-5">
            <a href={"/potte"}>
              <div className="group">
                <motion.div
                  className={`h-[600px] bg-project-preview-01 bg-contain bg-center bg-no-repeat lg:h-[511px]`}
                  initial={{ backgroundSize: "100%", borderRadius: "0px" }}
                  whileHover={{ backgroundSize: "110%", borderRadius: "18px" }}
                  transition={{ duration: 1.5, ease: [0, 0.55, 0.45, 1] }}
                />
                <p className="ease-[cubic-bezier(0.55, 0, 1, 0.45)] mt-4 max-w-max text-xs text-gray duration-[1500ms] group-hover:tracking-[.15em] group-hover:transition-all">
                  3D / ANIMATION
                </p>
                <p className="ease-[cubic-bezier(0.55, 0, 1, 0.45)] mt-2 max-w-max text-base font-thin text-black duration-[1500ms] group-hover:tracking-[.15em] group-hover:text-accent group-hover:transition-all">
                  POTTE
                </p>
              </div>
            </a>
          </div>

          <div className="col-span-12 mx-4 pt-10 lg:col-span-7 lg:col-start-6 lg:pt-0">
            <a href={"/nftoyer"}>
              <div className="group">
                <motion.div
                  className={`h-[600px] bg-project-preview-02 bg-contain bg-center bg-no-repeat lg:h-[1063px]`}
                  initial={{ backgroundSize: "100%", borderRadius: "0px" }}
                  whileHover={{ backgroundSize: "110%", borderRadius: "18px" }}
                  transition={{ duration: 1.5, ease: [0, 0.55, 0.45, 1] }}
                />
                <p className="ease-[cubic-bezier(0.55, 0, 1, 0.45)] mt-4 max-w-max text-xs text-gray duration-[1500ms] group-hover:tracking-[.15em] group-hover:transition-all">
                  PRODUCT DESIGN / 3D
                </p>
                <p className="ease-[cubic-bezier(0.55, 0, 1, 0.45)] mt-2 max-w-max text-base font-thin text-black duration-[1500ms] group-hover:tracking-[.15em] group-hover:text-accent group-hover:transition-all">
                  NFTOYER
                </p>
              </div>
            </a>
          </div>

          <div className="col-span-12 mx-4 pt-10 lg:col-span-6 lg:pt-5">
            <a href={"/coin"}>
              <div className="group">
                <motion.div
                  className={`h-[600px] bg-project-preview-04 bg-contain bg-center bg-no-repeat lg:h-[908px]`}
                  initial={{ backgroundSize: "100%", borderRadius: "0px" }}
                  whileHover={{ backgroundSize: "110%", borderRadius: "18px" }}
                  transition={{ duration: 1.5, ease: [0, 0.55, 0.45, 1] }}
                />
                <p className="ease-[cubic-bezier(0.55, 0, 1, 0.45)] mt-4 max-w-max text-xs text-gray duration-[1500ms] group-hover:tracking-[.15em] group-hover:transition-all">
                  CONCEPT DESIGN / 3D / ANIMATION
                </p>
                <p className="ease-[cubic-bezier(0.55, 0, 1, 0.45)] mt-2 max-w-max text-base font-thin text-black duration-[1500ms] group-hover:tracking-[.15em] group-hover:text-accent group-hover:transition-all">
                  FMP x TELLA
                </p>
              </div>
            </a>
          </div>

          <div className="col-span-12 mx-4 pt-10 lg:col-span-6 lg:col-start-7 lg:pt-5">
            <a href={"/sflex"}>
              <div className="group">
                <motion.div
                  className={`h-[600px] bg-project-preview-03 bg-contain bg-center bg-no-repeat lg:h-[511px]`}
                  initial={{ backgroundSize: "100%", borderRadius: "0px" }}
                  whileHover={{ backgroundSize: "110%", borderRadius: "18px" }}
                  transition={{ duration: 1.5, ease: [0, 0.55, 0.45, 1] }}
                />
                <p className="ease-[cubic-bezier(0.55, 0, 1, 0.45)] mt-4 max-w-max text-xs text-gray duration-[1500ms] group-hover:tracking-[.15em] group-hover:transition-all">
                  LOGO DESIGN / VISUAL IDENTITY
                </p>
                <p className="ease-[cubic-bezier(0.55, 0, 1, 0.45)] mt-2 max-w-max text-base font-thin text-black duration-[1500ms] group-hover:tracking-[.15em] group-hover:text-accent group-hover:transition-all">
                  SFLEX
                </p>
              </div>
            </a>
          </div>

          <div className="col-span-12 mx-4 pt-10 lg:col-span-7 lg:col-start-1 lg:pt-5">
            <motion.div
              className={`h-[600px] bg-project-preview-05 bg-contain bg-center bg-no-repeat saturate-0 lg:h-[1063px]`}
              initial={{ backgroundSize: "100%", borderRadius: "0px" }}
            />
            <p className="mt-4 max-w-max text-xs text-gray">NISSAN GTR R35</p>
            <p className="mt-2 max-w-max text-base font-thin text-gray">
              COMING SOON
            </p>
          </div>

          <div className="col-span-12 mx-4 pt-10 lg:col-span-5 lg:pt-5">
            <motion.div
              className={`h-[600px] bg-project-preview-06 bg-contain bg-center bg-no-repeat saturate-0 lg:h-[511px]`}
              initial={{ backgroundSize: "100%", borderRadius: "0px" }}
            />
            <p className="mt-4 max-w-max text-xs text-gray">NIKE AIR PILLS</p>
            <p className="mt-2 max-w-max text-base font-thin text-gray">
              COMING SOON
            </p>
          </div>
        </section> */}

        {/* PROJECTS v2*/}
        <section
          className="grid grid-cols-12 gap-5 bg-lightgray px-5 py-[120px]"
          id="projects"
          initial={{ opacity: 0, y: 30 }}
        >
          <p className="col-span-12 pt-[10px] text-left text-eighteen text-newgray lg:col-span-4 lg:text-right">
            PROJECTS — プロジェクト
          </p>
          <p className="col-span-12 text-fourtyfourresponse  text-newblack lg:col-span-8 lg:text-fourtyfour">
            Exploring and crafting digital experiences where Design, Art
            Direction and Animation meet.
          </p>
        </section>

        <div className="my-5 flex w-full bg-lightgray px-5">
          <p className="text-eighteen text-newgray">2024</p>
          <div className="ml-5 h-[1px] w-full self-end bg-outlinegray"></div>
        </div>

        {/* <Project
          id={"001"}
          title={"NIKE AIR PILLS"}
          description={
            "Product exploration about Nike medicine that makes you feel lighter."
          }
          tags={[
            <Pill text={"ART DIRECTION"} />,
            <Pill text={"3D"} />,
            <Pill text={"CONCEPT DESIGN"} />,
            <Pill text={"SIMULATION"} />,
          ]}
          image={"/assets/projects/air-02.jpg"}
          alt={"Project 001: NIKE AIR PILLS"}
          link={"/nikeair"}
        /> */}

        {/* <Project
          id={"002"}
          title={"GROCK"}
          description={"Personal exploration of a graffiti character."}
          tags={[
            <Pill text={"ART DIRECTION"} />,
            <Pill text={"3D"} />,
            <Pill text={"CONCEPT DESIGN"} />,
          ]}
          image={"/assets/projects/grock-01.jpg"}
          alt={"Project 002: GROCK"}
          link={"/grock"}
        /> */}

        <Project
          id={"001"}
          title={"JETCROSS"}
          description={
            "Branding, graphic design, and 3D product visualization for a mini jet boat factory."
          }
          tags={[
            <Pill text={"BRANDING"} />,
            <Pill text={"GRAPHIC DESIGN"} />,
            <Pill text={"3D"} />,
            <Pill text={"RENDERING"} />,
            <Pill text={"UI DESIGN"} />,
          ]}
          image={"/assets/projects/jetcross-cover.jpg"}
          alt={"Project 001: JETCROSS"}
          link={"/jetcross"}
        />

        <Project
          id={"002"}
          title={"POTTE"}
          description={
            "Dynamic product animation crafted for Potte, highlighting their plastic containers."
          }
          tags={[
            <Pill text={"ART DIRECTION"} />,
            <Pill text={"3D"} />,
            <Pill text={"ANIMATION"} />,
          ]}
          image={"/assets/projects/potte-02.jpg"}
          alt={"Project 002: POTTE"}
          link={"/potte"}
        />

        <div className="my-5 flex w-full bg-lightgray px-5">
          <p className="min-w-max text-eighteen text-newgray">
            2023 and earlier
          </p>
          <div className="ml-5 h-[1px] w-full self-end bg-outlinegray"></div>
        </div>

        <Project
          id={"003"}
          title={"SFLEX"}
          description={
            "Visual identity and UI Design created for a leading metallurgy company in Brazil."
          }
          tags={[<Pill text={"BRANDING"} />, <Pill text={"UI/WEB DESIGN"} />]}
          image={"/assets/projects/sflex-02.jpg"}
          alt={"Project 003: SFLEX"}
          link={"/sflex"}
        />

        <Project
          id={"004"}
          title={"NFTOYER"}
          description={
            "Pioneering the first Brazilian NFT project with verified celebrity collaborations."
          }
          tags={[
            <Pill text={"CO-FOUNDER"} />,
            <Pill text={"ART DIRECTION"} />,
            <Pill text={"3D"} />,
            <Pill text={"NFT"} />,
          ]}
          image={"/assets/projects/nftoyer-02.jpg"}
          alt={"Project 004: NFTOYER"}
          link={"/nftoyer"}
        />

        <Project
          id={"005"}
          title={"3D COIN"}
          description={
            "A custom cover and animation crafted specifically for a Spotify canvas loop."
          }
          tags={[<Pill text={"3D"} />, <Pill text={"ANIMATION"} />]}
          image={"/assets/projects/mais-uma-02.jpg"}
          alt={"Project 005: 3D COIN"}
          link={"/coin"}
        />

        {/* INFO */}
        <section className="grid grid-cols-12 gap-5 bg-lightgray px-5 pt-[120px]">
          <p className="col-span-12 pt-[10px] text-left text-eighteen text-newgray lg:col-span-4 lg:text-right">
            SKILLS — スキル
          </p>
          <p className="col-span-12 text-fourtyfourresponse  text-newblack lg:col-span-8 lg:text-fourtyfour">
            Over 8 years of experience in the creative field:
          </p>
        </section>

        <section className="grid grid-cols-12 bg-lightgray px-5 pb-[120px]">
          <div className="col-span-12 pt-10 md:col-span-6 lg:col-span-4 lg:col-start-5">
            <div className="flex w-full">
              <p className="text-eighteen text-newgray">CREATIVE</p>
              <div className="mx-5 h-[1px] w-full self-end bg-outlinegray" />
            </div>
            <div className="flex flex-wrap pt-5">
              <Pill text={"ART DIRECTION"} />
              <Pill text={"3D"} />
              <Pill text={"ANIMATION"} />
              <Pill text={"2D"} />
              <Pill text={"MOTION"} />
              <Pill text={"BRANDING"} />
              <Pill text={"LOGO"} />
              <Pill text={"GRAPHIC DESIGN"} />
              <Pill text={"UI & UX"} />
              <Pill text={"WEB DESIGN"} />
            </div>
          </div>

          <div className="col-span-12 pt-10 md:col-span-6 lg:col-span-4 lg:col-start-9">
            <div className="flex w-full">
              <p className="text-eighteen text-newgray">TECH</p>
              <div className="ml-5 h-[1px] w-full self-end bg-outlinegray" />
            </div>
            <div className="flex flex-wrap pt-5">
              <Pill text={"FRONT-END"} />
              <Pill text={"JAVASCRIPT"} />
              <Pill text={"REACT"} />
              <Pill text={"NEXT.JS"} />
              <Pill text={"WEBGL"} />
              <Pill text={"WEB3"} />
            </div>
          </div>

          <div className="col-span-12 pt-10 lg:col-start-5">
            <div className="flex w-full">
              <p className="text-eighteen text-newgray">CURRENT</p>
              <div className="ml-5 h-[1px] w-full self-end bg-outlinegray" />
            </div>
            <div className="pt-5">
              <p className="col-span-12 text-base text-newblack lg:col-span-3">
                Co-founder and Designer at{" "}
                <a
                  href="https://www.hokup.com.br/"
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="cursor:pointer text-base text-newblack underline transition duration-100 ease-out hover:text-gray hover:transition hover:duration-100 hover:ease-out"
                >
                  hokup.com.br
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </Animation>
    </div>
  );
};

export default Home;
