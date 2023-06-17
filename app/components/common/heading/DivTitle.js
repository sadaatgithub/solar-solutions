'use client'
import React from 'react'
import { motion as m } from 'framer-motion'
import { textVariant } from '@/lib/animation'

const DivTitle = ({text,className}) => {
  return (
    <m.h2  variants={textVariant(0.3)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className={`${className || " "} text-4xl md:text-5xl font-bold text-gray-700 capitalize text-center md:text-start`}>{text}</m.h2>
  )
}

export default DivTitle