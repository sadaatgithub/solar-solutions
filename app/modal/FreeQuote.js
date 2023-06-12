'use client'
import React, { useState } from 'react'
import ContactForm from '../components/Contact/ContactForm'
import { FaCheckCircle, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

const FreeQuote = ({closeModal}) => {
  const [isSuccess,setIsSuccess] = useState(false)
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}} className="fixed inset-0 bg-black/70 z-30 grid place-items-center backdrop-blur-sm">
        <motion.div initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}} className="bg-white w-[90%] h-[95%] md:w-1/2 p-10 flex flex-col justify-center items-center rounded-sm gap-12 relative">
        <FaTimes onClick={() => closeModal(false)} color='orange' className="absolute right-2 top-2 md:right-10 md:top-10 text-black cursor-pointer text-2xl"/>
      
       
        <ContactForm setIsSuccess={setIsSuccess} title="Get A Quote" className="w-full" closeModal={closeModal}/>

        </motion.div>
    </motion.div>
  )
}

export default FreeQuote

// 