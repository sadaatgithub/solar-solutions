import React from "react";
import Container from "./Container";
import { MdAutorenew } from "react-icons/md";
import { GiReceiveMoney, GiEarthAmerica, GiSolarPower } from "react-icons/gi";
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
    <Container className="min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-20">
      <div className="flex flex-col gap-6 col-span-full md:col-span-1">
        <p className="font-semibold text-orange-500">BENEFITS</p>
        <h2 className="text-5xl font-bold text-gray-700">Why Go For Solar</h2>
        <p className="text-gray-500">
          Switching to solar power is an effective way to reduce reliance on
          traditional fossil fuels and help combat climate change. In addition,
          solar energy can lead to significant long-term cost savings on energy
          bills and increase the value of your property. By harnessing the power
          of the sun, you can not only reduce your carbon footprint but also
          improve your financial bottom line.
        </p>
        <button className="w-full md:max-w-[250px] self-start mt-4  px-6 py-3 bg-orange-500 text-white  rounded-sm shadow-2xl shadow-orange-200
        relative btn_overlay">
        <span className="z-10">Get Free Consultation</span>
        </button>
      </div>
      <div className="grid-col-1 md:col-span-2  grid  sm:grid-cols-2  md:gap-y-16 gap-12 gap-x-12">
        {benefits.map((benefit) => (
          <div key={benefit.id} className=" relative">
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
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhyGoForSolar;
