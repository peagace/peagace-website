'use client'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion"

const Animation = ({ children, delay }) => {
    return (
        <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, mixBlendMode:'color-burn'}}
                    animate={{ opacity: 1, mixBlendMode:'normal'}}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, delay: delay }}
                >
                    {children}
                </motion.div>
        </AnimatePresence>
    )
}

export default Animation