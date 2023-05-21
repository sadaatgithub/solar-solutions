import React from 'react'
import Image from "next/image";
import aboutImage from "../../../public/solar-installation.jpg";

const Services = () => {
  return (
    <div className="flex gap-8 w-full flex-col lg:flex-row">
        <div className="xl:w-[45%] flex flex-col border md:w-/3 overflow-hidden shadow-xl rounded-md">
          <div className="max-h-96 overflow-hidden">
            <Image
              src={aboutImage}
              width={640}
              height={480}
              alt="our team"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="p-6">
            <h3 className="font-bold pb-6 text-[40px] text-sky-800">Solar Work</h3>
            <p className="text-gray-500">
            Our solar installation service provides expert design and installation of custom solar energy solutions for residential and commercial clients. 
            Our licensed professionals ensure a seamless installation process and long-term performance optimization.
            </p>
            <div className="pt-8">
              <button>Know More</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:w-[55%] gap-8 ">
          <div className="flex gap-8  flex-col sm:flex-row lg:flex-col xl:flex-row ">

          {/* service two */}

            <div className="border shadow-xl rounded-md p-6 w-full xl:w-1/2 flex flex-col">
              <svg
                width="36"
                height="40"
                viewBox="0 0 36 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pb-4"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.46 10.24L35.18 9.74C34.8188 9.13538 34.3094 8.63286 33.7 8.28L20.28 0.54C19.6724 0.1875 18.9826 0.00124 18.28 0H17.7C16.9974 0.00124 16.3076 0.1875 15.7 0.54L2.28 8.3C1.67394 8.65052 1.17052 9.15394 0.82 9.76L0.54 10.26C0.1875 10.8677 0.00124 11.5575 0 12.26V27.76C0.00124 28.4626 0.1875 29.1524 0.54 29.76L0.82 30.26C1.17958 30.859 1.68098 31.3604 2.28 31.72L15.72 39.46C16.3246 39.8198 17.0164 40.0066 17.72 40H18.28C18.9826 39.9988 19.6724 39.8126 20.28 39.46L33.7 31.7C34.312 31.3574 34.8174 30.852 35.16 30.24L35.46 29.74C35.8082 29.1306 35.9942 28.442 36 27.74V12.24C35.9988 11.5375 35.8126 10.8477 35.46 10.24ZM17.7 4H18.28L30 10.76L18 17.68L6 10.76L17.7 4ZM20 35L31.7 28.24L32 27.74V14.22L20 21.16V35Z"
                  fill="#F57F11"
                />
              </svg>

              <h5 className="pb-2 text-2xl font-bold text-sky-800">HT-LT panels</h5>
              <p className="text-gray-500">We offers installation and maintenance services for both LT and HT solar systems</p>
              <div className="pt-6 mt-auto">
                <button className="">Read More</button>
              </div>
            </div>

          {/* service three */}
            <div className="shadow-xl border rounded-md p-6 w-full xl:w-1/2">
              <svg
                width="36"
                height="40"
                viewBox="0 0 36 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pb-4"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M35.46 10.24L35.18 9.74C34.8188 9.13538 34.3094 8.63286 33.7 8.28L20.28 0.54C19.6724 0.1875 18.9826 0.00124 18.28 0H17.7C16.9974 0.00124 16.3076 0.1875 15.7 0.54L2.28 8.3C1.67394 8.65052 1.17052 9.15394 0.82 9.76L0.54 10.26C0.1875 10.8677 0.00124 11.5575 0 12.26V27.76C0.00124 28.4626 0.1875 29.1524 0.54 29.76L0.82 30.26C1.17958 30.859 1.68098 31.3604 2.28 31.72L15.72 39.46C16.3246 39.8198 17.0164 40.0066 17.72 40H18.28C18.9826 39.9988 19.6724 39.8126 20.28 39.46L33.7 31.7C34.312 31.3574 34.8174 30.852 35.16 30.24L35.46 29.74C35.8082 29.1306 35.9942 28.442 36 27.74V12.24C35.9988 11.5375 35.8126 10.8477 35.46 10.24ZM17.7 4H18.28L30 10.76L18 17.68L6 10.76L17.7 4ZM20 35L31.7 28.24L32 27.74V14.22L20 21.16V35Z"
                  fill="#F57F11"
                />
              </svg>

              <h5 className="pb-2 text-2xl font-bold text-sky-800 ">Consultant</h5>
              <p className="text-gray-500">We provide consulting and design services to assist customers in planning and implementing customized solar energy solutions.</p>
              <div className="pt-6">
                <button className="">Read More</button>
              </div>
            </div>
          </div>

        <div className="flex flex-col-reverse h-full border sm:flex-row   rounded-md shadow-xl">
            <div className="flex flex-col justify-center w-full sm:w-1/2 p-6  ">
            <h5 className="pb-2 text-2xl font-bold text-sky-800">Solar Equipments Supply</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="pt-6">
                <button>Read More</button>
            </div>


            </div>
            <div className="w-full sm:w-1/2">
            <Image
              src={aboutImage}
              width={640}
              height={480}
              alt="our team"
              className="w-full h-full object-cover "
            />
            </div>
        </div>
        </div>
      </div>
  )
}

export default Services