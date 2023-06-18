'use client'
import { fadeIn } from '@/lib/animation'
import { motion as m } from 'framer-motion'
import React from 'react'


const AnimateComponent = ({children,className,type}) => {
  return (
    <m.div variants={fadeIn(type,'spring',0.1,0.5)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className={`${className || " "}`}>{children}</m.div>
  )
}

export default AnimateComponent