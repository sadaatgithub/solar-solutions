'use client'
import React from 'react'
import Container from './Container'
import config from "../../app/index.json"
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import DivTitle from './common/heading/DivTitle'
import TopSubHeading from './common/heading/TopSubHeading'
import { motion as m } from 'framer-motion'
import { fadeIn, slideIn } from '@/lib/animation'
import DottedAbstract from './common/DottedAbstract'

const Testimonials = () => {
    const testimonials = config.testimonials
  return (
    <Container className="flex flex-col gap-20 items-center justify-center min-h-screen bg-gray-50 relative">
      <DottedAbstract className="-left-10 top-0"/>
         <div className="flex flex-col gap-6 items-center">
          <TopSubHeading text="What They Say About Us"/>
            <DivTitle text="Customer Testimonials"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial,idx) => 
        <m.div key={idx} variants={fadeIn('up','tween',0.1*idx,0.5)} initial="hidden"  whileInView="show" viewport={{once:true, amount:0.3}} className="flex flex-col gap-6 p-8  rounded-md shadow-md border shadow-gray-100 bg-white">
                 <div className="flex text-orange-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                 <p className="text-gray-500">{testimonial.text}</p>
                 <div className="flex items-center  gap-4 mt-auto">
                  <Image width={80} height={80} 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-medium text-gray-900">
                     {testimonial.name}
                  </p>
                  <p className="text-orange-300">
                    {testimonial.designation}
                  </p>
                  </div>
                  </div>
        </m.div> )}
        </div>
    </Container>
  )
}

export default Testimonials