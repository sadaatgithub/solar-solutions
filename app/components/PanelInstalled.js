'use client'
import { zoomIn } from '@/lib/animation'
import {  motion as m } from 'framer-motion'
import React from 'react'

const PanelInstalled = () => {
// const count = useMotionValue(0)
// const rounded = useTransform(count, latest => Math.round(latest))

// useEffect(() => {
//     const controls = animate(count, 100)
  
//     return controls.stop
//   }, [])
  return (
    <m.div variants={zoomIn(0.5,0.5)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className="absolute bottom-10 left-10 md:bottom-10 bg-white/90 border border-white backdrop-blur md:-left-20 w-auto px-8 py-4 shadow-2xl flex flex-col rounded-md">
            <m.p  className="text-5xl font-bold text-orange-500 drop-shadow-md">250+</m.p>
            <p className="text-sky-700 font-semibold ">Panels Installed</p>
        </m.div>
  )
}

export default PanelInstalled