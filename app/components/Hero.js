"use client"
import React,{useState} from 'react'
import config from "../../app/index.json"
import Container from './Container'
import Link from 'next/link'
import Portal from '../portal/Portal'
import FreeQuote from '../modal/FreeQuote'
import {motion as m, AnimatePresence } from 'framer-motion'
import { container, fadeIn, slideIn, textVariant } from '@/lib/animation'

const Hero = () => {
const hero = config.hero
const [openModal,setOpenModal] = useState(false)


  return (
    <Container className="bg-green-200 min-h-screen bg-[url('../public/solarimg.jpg')] bg-cover bg-no-repeat 
    flex flex-col justify-center items-center text-white  relative after:content-[''] after:absolute after:bg-black/70  after:inset-0">
        <m.div variants={container} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className="md:w-[70%] text-center flex flex-col gap-6 z-10 ">
        <m.h1 variants={textVariant(0.5)}  className='text-4xl md:text-6xl font-bold uppercase  '>{hero.title}</m.h1>
        <m.p variants={textVariant(0.7)} className='text-lg text-gray-200'>{hero.subtitle}</m.p>
        <div className="text-center flex gap-4 justify-center pt-4 flex-col md:flex-row [&>button]:relative [&>button]:btn_overlay">
            <m.button variants={fadeIn('up','spring',1,0.5)} className='px-6 py-3 bg-orange-500 rounded-sm btn_overlay' onClick={() => setOpenModal(!openModal)}>{hero.cta[0].title}</m.button>
            <m.button variants={fadeIn('up','spring',1.3,0.5)} className='border px-6 py-3 rounded-sm  btn_overlay'><Link href={hero.cta[1].href}>{hero.cta[1].title}</Link></m.button>
        </div>
        </m.div>
        <AnimatePresence>
        {openModal && 
        <Portal>
          <FreeQuote closeModal={setOpenModal}/>
          </Portal>}
          </AnimatePresence>
        
    </Container>
  )
}

export default Hero