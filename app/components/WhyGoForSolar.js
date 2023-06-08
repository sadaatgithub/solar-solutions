"use client"
import React from "react";
import Container from "./Container";
import { MdAutorenew } from "react-icons/md";
import { GiReceiveMoney, GiEarthAmerica, GiSolarPower } from "react-icons/gi";
import Link from "next/link";
import { motion as m, AnimatePresence } from "framer-motion";
import { fadeIn, container,textVariant,slideIn, textContainer } from "@/lib/animation";
const benefits = [
  {
    id: 1,
    title: "Renewable",
    desc: "Solar energy is a renewable source of energy, meaning it won't deplete like traditional fossil fuels.",
    icon: <MdAutorenew />,
  },
  {
    id: 2,
    title: "Enviornment Friendly",
    desc: "Solar energy doesn't release any greenhouse gases or other harmful pollutants into the atmosphere, making it a clean and sustainable energy source.",
    icon: <GiEarthAmerica />,
  },
  {
    id: 3,
    title: "Cost-Effective",
    desc: "Once installed, solar panels can significantly reduce your energy bills and pay for themselves in a few years",
    icon: <GiReceiveMoney />,
  },
  {
    id: 4,
    title: "Low Mentainance",
    desc: "Solar energy is a renewable source of energy, meaning it won't deplete like traditional fossil fuels.Solar panels require very little maintenance, making them a hassle-free investment.",
    icon: <GiSolarPower />,
  },
];

const WhyGoForSolar = () => {
  return (
    <Container  className="min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-20">
      <m.div variant={container} initial="hidden" whileInView="show" viewport={{once:false, amount:0.3}} className="flex flex-col gap-6 col-span-full md:col-span-1">
        <m.p  variants={textVariant(0.1)} className="font-semibold text-orange-500">BENEFITS</m.p>
        <m.h2 variants={textVariant(0.3)} className="text-5xl font-bold text-gray-800">Why Go For Solar</m.h2>
        <m.p variants={textVariant(0.5)} className="text-gray-500">
          Switching to solar power is an effective way to reduce reliance on
          traditional fossil fuels and help combat climate change. In addition,
          solar energy can lead to significant long-term cost savings on energy
          bills and increase the value of your property. By harnessing the power
          of the sun, you can not only reduce your carbon footprint but also
          improve your financial bottom line.
        </m.p>
        <m.button variants={textVariant(0.7)} className="w-full md:max-w-[250px] self-start mt-4  px-6 py-3 bg-orange-500 text-white  rounded-sm shadow-2xl shadow-orange-200
        relative btn_overlay"><Link href="/contact">
        <span className="z-10">Get Free Consultation</span></Link>
        </m.button>
      </m.div>
      <m.div variant={textContainer}   className="grid-col-1 md:col-span-2  grid  sm:grid-cols-2  md:gap-y-16 gap-12 gap-x-12 overflow-hidden">
        {benefits.map((benefit,idx) => (
          <m.div variants={textVariant(idx*0.2)} initial="hidden" whileInView="show" viewport={{once:false, amount:0.3}}  key={benefit.id} className=" relative">
            <div
              className="flex flex-col gap-6 sm:col-span-1 [&>svg]:text-4xl
           [&>svg]:text-orange-400 p-2 z-[10] [&>svg]:drop-shadow-md"
            >
              {benefit.icon}
              <h6 className="text-xl font-bold  text-sky-800 ">
                {benefit.title}
              </h6>
              <p className="text-gray-500">
                {benefit.desc}
              </p>
            </div>
          </m.div>
        ))}
      </m.div>
    </Container>
  );
};

export default WhyGoForSolar;
