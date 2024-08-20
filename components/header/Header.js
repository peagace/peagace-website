"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SmallButton from "../small-button/SmallButton";

export default function Header() {
  return (
    <>
      <div className="fixed z-50 w-full px-5 py-5">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <a href="/" className="group">
              <Image
                src="/assets/main/gray-logo.svg"
                alt="PHC"
                width={28}
                height={28}
                className="mr-[10px] mix-blend-difference transition duration-100 ease-out hover:transition hover:duration-100 hover:ease-out  group-hover:blur-sm"
              />
            </a>
            <div className="flex flex-row">
              <p className="cursor:pointer self-center text-xs uppercase text-gray underline transition duration-100 ease-out hover:text-accent hover:transition hover:duration-100 hover:ease-out">
                <a href="/#about" className="px-[10px] py-[10px]">
                  ABOUT
                </a>
              </p>
              <p className="cursor:pointer self-center text-xs uppercase text-gray underline transition duration-100 ease-out hover:text-accent hover:transition hover:duration-100 hover:ease-out">
                <a href="/#projects" className="px-[10px] py-[10px]">
                  PROJECTS
                </a>
              </p>
              <p className="cursor:pointer self-center text-xs uppercase text-gray underline transition duration-100 ease-out hover:text-accent hover:transition hover:duration-100 hover:ease-out">
                <a href="/#contact" className="px-[10px] py-[10px]">
                  CONTACT
                </a>
              </p>
            </div>
          </div>
          <div className="hidden self-center sm:flex">
            <SmallButton
              text={"PEDRO@PEAGACE.COM"}
              link={"mailto:pedro@peagace.com"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
