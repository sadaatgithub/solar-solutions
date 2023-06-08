import React from 'react'
import Container from './Container'
import config from "../../app/index.json"
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
    const testimonials = config.testimonials
  return (
    <Container className="flex flex-col gap-20 items-center justify-center min-h-screen">
         <div className="flex flex-col gap-6 items-center">
            <h2 className="text-5xl font-bold text-sky-700">Customer Testimonials</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {testimonials.map((testimonial,idx) => 
        <div key={idx} className="flex flex-col gap-6 p-8  rounded-md shadow-md border shadow-gray-100 ">
                 <div className="flex text-orange-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                 <p className="text-gray-500">{testimonial.text}</p>
                 <div className="flex items-center  gap-4 mt-auto">
                  <Image width={80} height={80} 
                  src={testimonial.image}
                  alt={testimonial.patient}
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
        </div> )}
        </div>
    </Container>
  )
}

export default Testimonials