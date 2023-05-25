import React from "react";
import Container from "./Container";
import Image from "next/image";
import aboutImage from "../../public/solar-hero.jpg";
import { FaChevronCircleRight } from "react-icons/fa";
import {FiPhoneCall} from "react-icons/fi"
import Link from "next/link";

const AboutUs = () => {
  return (
    <Container className="flex flex-col md:flex-row gap-10 lg:gap-20 w-full  min-h-screen">
      <div className="flex flex-col gap-6 md:w-1/2 z-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-orange-500 uppercase font-semibold">Who we are</p>
            <div className="flex flex-col gap-6">
              <h2 className="text-5xl font-bold text-gray-700 capitalize">
              Powering a brighter future through solar innovation
              </h2>
              <p className="text-lg text-gray-500">
                Our mission is to make solar energy accessible to everyone. We
                believe that solar is not only good for the environment, but
                also for our customers&apos; wallets. By helping homeowners and
                businesses switch to solar, we&apos;re making a positive impact
                on both the planet and their bottom line.
              </p>
            </div>
          </div>
          <div className="">
            <ul className="flex flex-col gap-4 text-gray-800 [&>li]:flex [&>li]:gap-2 [&>li]:items-center ">
              <li>
                <FaChevronCircleRight className="text-orange-400" />
                Flexible Cost-Effective Solutions
              </li>
              <li>
                <FaChevronCircleRight className="text-orange-400" />
                Produce Innovative Design Futuristic Blades
              </li>
              <li>
                <FaChevronCircleRight className="text-orange-400" />
                We Tailored For Specific Client’s Needs
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-4 flex gap-10 items-center flex-col sm:flex-row flex-wrap">
          <Link href="/about" className="w-full md:max-w-[200px] sm:max-w-1/2">
          <button className="w-full self-start px-6 py-3 bg-orange-500 text-white rounded-sm relative btn_overlay">
            Know More
          </button>
          </Link>
          <div className="flex gap-4 items-center">
            <FiPhoneCall  className="bg-orange-50 p-4 rounded-full font-thin w-12 h-12 text-orange-400"/>
            <div className="flex flex-col">
            <p className="text-gray-400">Have any questions?</p>
            <p className="font-bold">(+91) 9832659865</p></div>

          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:-translate-x-5 z-10 flex relative after:absolute after:content-[''] after:top-16 after:-bottom-2 md:after:-right-10 after:left-1/2 after:-z-10 after:bg-orange-300/20 ">
        <Image
          src={aboutImage}
          width={960}
          height={640}
          alt="our team"
          className="w-full  h-[90%] self-center object-cover object-left  "
        />
        <div className="absolute bottom-10 left-10 md:bottom-10 bg-white/90 border border-white backdrop-blur md:-left-20 w-auto px-8 py-4 shadow-2xl flex flex-col rounded-md">
            <p className="text-5xl font-bold text-orange-500 drop-shadow-md">25</p>
            <p className="text-sky-700 font-semibold ">Panels Installed</p>
        </div>
        
      </div>
    </Container>
  );
};

export default AboutUs;
