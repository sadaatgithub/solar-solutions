'use client'
import React from 'react'
import Container from './Container'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { FaStar } from 'react-icons/fa';
import config from "../../app/index.json"
import Image from 'next/image';


const Testimonial = () => {
  const testimonials = config.testimonials

  return (
    <Container className="flex flex-col gap-20 items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col gap-6 items-center">
            <h2 className="text-5xl font-bold text-sky-700">Customer Testimonials</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <Swiper  
        slidesPerView={2}
        spaceBetween={20}
        slidesPerGroup={2}
        loop={true}
        lazy={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        // loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          240:{
            slidesPerView: 1,
            spaceBetween: 0,
          slidesPerGroup:1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          slidesPerGroup:2,

          },
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper  w-full h-full relative overflow-hidden  group flex place-items-stretch"
      >
        {testimonials.map((data,idx) => {
          return (
            <SwiperSlide 
              key={idx}
              className="w-full  flex flex-col p-8  rounded-md bg-white grow "
            >
             
                <div className="flex flex-col  w-full gap-8 h-full ">
                  <span className="flex text-yellow-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                  <div className="text-center flex gap-2  relative">
                   

                    <p className="text-left text-gray-500">
                      {data.text} 
                    </p>
                  
                  </div>

                  <div className="flex items-center  gap-4">
                  <Image width={80} height={80} 
                  src={data.image}
                  alt={data.patient}
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-medium text-gray-900">
                     {data.name}
                  </p>
                  <p className="text-orange-300">
                    {data.designation}
                  </p>
                  </div>
                  </div>
                </div>
               
            </SwiperSlide>
          );
        })}
        {/* <div className="absolute top-1/2 -left-20 -translate-y-1/2 z-20 group-hover:left-2 transition-all duration-200 ease-linear">
        <SwiperButtonLeft />
        </div>
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 z-20 group-hover:right-2 transition-all duration-200 ease-linear">
        <SwiperButtonRight />
        </div> */}
      </Swiper>

    </Container>
    )
}

export default Testimonial