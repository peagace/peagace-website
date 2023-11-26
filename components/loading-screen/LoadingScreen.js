'use client';
import { useProgress } from "@react-three/drei";
import { useSpring, animated, config, easings } from '@react-spring/web'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import Image from "next/image";

export const LoadingScreen = ({ started, onStarted }) => {
    const { progress } = useProgress();
    const [loadingStatus, setLoadingStatus] = useState(true);

    const { animPage } = useSpring({
        animPage: progress === 100 ? ('0vh') : ('100vh'),
        config: {
            duration: 750,
            easing: easings.easeInOutExpo,
        },
        delay: 600,
        onRest: () => {
            setLoadingStatus(false)
        }
    });
    const {
        animLogoPosition,
        animLogoOpacity
    } = useSpring({
        animLogoPosition: progress === 100 ? ('-75px') : ('0px'),
        animLogoOpacity: progress === 100 ? (0) : (1),
        config: {
            duration: 600,
            easing: easings.easeInOutExpo,
        },
        delay: 200,
    });

    return (
        <>
            {loadingStatus && (
                <animated.div
                    style={{
                        width: '100vw',
                        height: animPage,
                        position: 'fixed',
                        background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(23,23,32,1) 100%)',
                        top: '0px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: '9999',
                    }}
                >
                    <animated.div
                        style={{
                            position: 'relative',
                            width: '250px',
                            height: '140px',
                            y: animLogoPosition,
                            opacity: animLogoOpacity,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            width={100}
                            height={100}
                            alt='image'
                            src="/assets/main/main-logo.svg"
                        />

                        <animated.div
                            style={{
                                position: 'absolute',
                                left: '0',
                                bottom: '0',
                                height: '2px',
                                width: `100%`,
                                backgroundColor: '#ffffff4b'
                            }}
                        >
                            <animated.div
                                style={{
                                    position: 'absolute',
                                    left: '0',
                                    bottom: '0',
                                    height: '2px',
                                    width: `${progress}%`,
                                    backgroundColor: 'white'
                                }}
                            >

                            </animated.div>
                        </animated.div>
                    </animated.div>

                </animated.div>
            )}
        </>
    )
};