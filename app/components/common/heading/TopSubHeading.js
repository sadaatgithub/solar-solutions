'use client'
import { textVariant } from '@/lib/animation'
import { motion as m } from 'framer-motion'
import React from 'react'

const TopSubHeading = ({text}) => {
  return (
    <m.p variants={textVariant(0.1)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className="font-semibold text-orange-500 uppercase">{text}</m.p>
  )
}

export default TopSubHeading