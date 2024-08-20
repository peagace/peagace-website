"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SmallButton from "../small-button/SmallButton";
import Clock from "../clock/Clock";

export default function NewHeader() {
  return (
    <>
      <div className="fixed z-50 w-full bg-header-gradient px-5 pb-10 pt-5">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <a href="/" className="group">
              <Image
                src="/assets/main/phc-black-logo.svg"
                alt="PEAGACE© LOGO"
                width={30}
                height={30}
                className="duration-400 transition ease-out hover:translate-y-[2px] hover:brightness-0 hover:ease-out group-hover:blur-sm"
              />
            </a>
            <div className=" self-center ">
              <p className="cursor:pointer duration-400 self-center text-xs uppercase text-newblack  underline transition ease-out hover:translate-y-[2px] hover:brightness-0">
                <a
                  href="mailto:pedro@peagace.com"
                  target={"_blank"}
                  className="mx-5 py-5"
                >
                  PEDRO@PEAGACE.COM
                </a>
              </p>
            </div>
          </div>

          <div className="hidden flex-row md:flex">
            <p className="cursor:pointer duration-400 self-center text-xs uppercase text-newblack underline transition ease-out hover:translate-y-[2px] hover:brightness-0">
              <a href="/#about" className="px-5 py-5">
                ABOUT
              </a>
            </p>
            <p className="cursor:pointer duration-400 self-center text-xs uppercase text-newblack underline transition ease-out hover:translate-y-[2px] hover:brightness-0">
              <a href="/#projects" className="px-5 py-5">
                PROJECTS
              </a>
            </p>
            <p className="cursor:pointer duration-400 self-center text-xs uppercase text-newblack underline transition ease-out hover:translate-y-[2px] hover:brightness-0">
              <a href="/#contact" className="px-5 py-5">
                CONTACT
              </a>
            </p>
          </div>

          <div className="flex flex-row">
            <h1 className="self-center text-right text-xs uppercase text-newblack">
              <Clock /> GMT-3
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
