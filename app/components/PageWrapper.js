'use client'
import { motion ,AnimatePresence} from 'framer-motion'
import React from 'react'
import { usePathname } from "next/navigation";


const PageWrapper = ({children}) => {
    const path = usePathname()
  return (
    <AnimatePresence mode='wait'>
    <motion.div 
    key={path}
    initial="initialState"
    animate="animateState"
    exit="exitState"
    transition={{
      duration: 0.2,
    }}
    variants={{
      initialState: {
        opacity: 0,
        y:100,
        // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        // clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
      },
      animateState: {
        opacity: 1,
        y:0,
        // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      },
      exitState: {
        // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        opacity:0,
        y:100,
      },
    }}>
        {children}
        </motion.div>
        </AnimatePresence>
  )
}

export default PageWrapper