'use client'
import React from 'react'
import { motion as m } from 'framer-motion'
import { textVariant, textVariant2 } from '@/lib/animation'

const DivTitle = ({text}) => {
  return (
    <m.h2  variants={textVariant(0.3)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.5}} className="text-5xl font-bold text-gray-700 capitalize">{text}</m.h2>
  )
}

export default DivTitle