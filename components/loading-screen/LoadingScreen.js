"use client";
import { useProgress } from "@react-three/drei";
import { useSpring, animated, config, easings } from "@react-spring/web";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export const LoadingScreen = ({ started, onStarted }) => {
  const year = new Date().getFullYear();
  const { progress } = useProgress();
  const [loadingStatus, setLoadingStatus] = useState(true);

  const { animPage, animPos } = useSpring({
    animPage: progress === 100 ? "0vh" : "100vh",
    animPos: progress === 100 ? "-35px" : "0px",
    config: {
      duration: 750,
      easing: easings.easeInOutExpo,
    },
    delay: 400,
    onRest: () => {
      setLoadingStatus(false);
    },
  });
  const { animLogoPosition, animLogoOpacity } = useSpring({
    animLogoPosition: progress === 100 ? "-75px" : "0px",
    animLogoOpacity: progress === 100 ? 0 : 1,
    config: {
      duration: 600,
      easing: easings.easeInOutExpo,
    },
    delay: 100,
  });

  return (
    <>
      {loadingStatus && (
        <animated.div
          style={{
            width: "100vw",
            height: animPage,
            position: "fixed",
            background: "linear-gradient(0deg, #C2C3CC 0%, #E7E8ED 100%);",
            top: animPos,
            display: "flex",
            justifyContent: "center",
            zIndex: "9999",
            padding: "16px",
          }}
        >
          <animated.div
            style={{
              position: "relative",
              y: animLogoPosition,
              opacity: animLogoOpacity,
              display: "flex",
              width: "full",
              width: "100vw",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Image
              width={291}
              height={40}
              alt="image"
              src="/assets/main/PEAGACE.svg"
              className="pb-5"
            />

            <animated.div
              style={{
                position: "flex",
                left: "0",
                right: "0",
                bottom: "45%",
                height: "2px",
                width: "291px",
                backgroundColor: "#B0B2C0",
              }}
            >
              <animated.div
                style={{
                  left: "0",
                  bottom: "0",
                  height: "3px",
                  width: `${progress}%`,
                  backgroundColor: "#272727",
                }}
              ></animated.div>
              <p className="self-center pt-5 text-center text-xs text-newgray">
                © {year}
              </p>
            </animated.div>
          </animated.div>
        </animated.div>
      )}
    </>
  );
};
