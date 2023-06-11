"use client"
import React from 'react'
import Container from '@/app/components/Container'
import PageWrapper from '@/app/components/PageWrapper'
import { useParams } from 'next/navigation'
import PagePathBanner from '@/app/components/PagePathBanner'
import Image from 'next/image'
import MaterialSupply from '../component/MaterialSupply'
import { motion as m } from 'framer-motion'
import { fadeIn, slideIn, textVariant } from '@/lib/animation'
import DivTitle from '@/app/components/common/heading/DivTitle'
import Button from '@/app/components/common/heading/buttons/Button'

const services = [
  {
    id: 1,
    slug:"solar-work",
    title:"Efficient and Professional Solar Work for Your Energy Needs",
    subheading:`At Solar Solutions, we take pride in offering comprehensive solar work services to fulfill your 
    specific energy requirements. With our team of experienced professionals, 
    we are committed to providing efficient and reliable solutions for both residential and commercial projects.`,
    content:[
      
      {
        id:1,
        heading:"Design and Engineering",
        desc:`Our solar work begins with a meticulous design and engineering phase. We assess your property's unique characteristics, 
        such as roof orientation, shading, and available space, to create a tailored solar system design. Our experts utilize advanced tools and technologies to ensure maximum energy production and optimal system performance.`,
        img:"/solarVEctor.jpg",

      },
      {
        id:2,
        heading:"Installation",
        desc:`Once the design is finalized, our skilled technicians execute the installation process with precision and expertise. We follow industry best practices
         and safety standards to guarantee a seamless and hassle-free installation experience. Whether it's rooftop solar panels or ground-mounted systems, we handle the entire installation process, including mounting, wiring, and connection to your electrical system.`,
        //  <a href="https://storyset.com/worker">Worker illustrations by Storyset</a>
        img:"/solar_animate.gif",
        
      },
      {
        id:3,
        heading:"System Integration and Optimization",
        desc:`We go beyond installation by seamlessly integrating your solar system with your existing electrical infrastructure. Our team ensures that the system is properly 
        connected and synchronized to maximize energy efficiency and minimize any potential disruptions. We conduct thorough testing and quality checks to guarantee optimal system performance.`,
        img:"/system-animate.svg",
      },
      {
        id:4,
        heading:"Maintenance and Monitoring",
        desc:`To ensure your solar system operates at peak performance throughout its lifespan, we offer comprehensive maintenance and monitoring services.
         Our technicians conduct regular inspections, cleaning, and system optimization to identify and address any potential issues. Through advanced monitoring systems, we track the performance of your solar system and promptly respond to any deviations or anomalies.`,
         img:"/maintenance-animate.svg",
      },
      {
        id:5,
        heading:"Customer Support",
        desc:`At Solar Solutions, we prioritize customer satisfaction. Our dedicated customer support team is available to address any questions or concerns you may have throughout the entire solar work process. We strive to provide clear communication, timely assistance, and ongoing support to ensure your complete satisfaction.`,
        img:"/support-animate.svg",

      },
      



    ],
    footerHeading:`By choosing our solar work services, you can have peace of mind knowing 
    that you are receiving top-notch expertise, reliable solutions, and long-term benefits. Experience the difference of our efficient and professional solar work tailored to meet your energy needs. Contact us today to discuss your solar project and take the first step towards a sustainable and cost-effective energy future.`,
    cta:"/contact"
  },
  {
    id:2,
    slug:"ht-lt-panels",
    title:"HT (High Tension) and LT (Low Tension) Services",
    subheading:`At Solar Solutions, we provide comprehensive HT and LT services to meet the diverse energy needs of our customers. Whether you require a large-scale utility project or a residential installation, our experienced team is equipped to deliver tailored solutions for both HT and LT solar systems.`,
    content:[
      {
        id:1,
        heading:"HT Services",
        desc:`Our HT services cater to projects that require high voltage transmission and distribution. With our expertise in HT solar installations, we can design, engineer, and implement solar solutions for utility-scale projects, commercial installations, and other applications that demand higher voltage levels. Our team ensures compliance with safety regulations and employs specialized equipment to guarantee reliable and efficient operation of HT solar systems.`,
       img:"/electrician-animate.svg",
      },
      {
        id:2,
        heading:"LT Services",
        desc:`For residential and small to medium-sized commercial projects, our LT services are designed to meet the specific energy requirements of individual customers. We offer professional design, installation, and maintenance services for LT solar systems. Our team works closely with you to develop a customized solution that maximizes energy production, optimizes cost savings, and integrates seamlessly with your existing electrical infrastructure.`,
        img:"/electrician-animate-2.svg",
      },
      {
        id:3,
        heading:"Expertise and Safety",
        desc:`With our in-depth knowledge and experience in both HT and LT solar systems, we prioritize safety and adhere to industry best practices. Our qualified professionals are well-versed in the intricacies of working with different voltage levels and follow rigorous safety protocols throughout the project lifecycle. You can trust us to ensure the safe and reliable operation of your HT or LT solar system.`,
        img:"/safety-animate.svg",
      },
      {
        id:4,
        heading:"Quality Assurance and Support",
        desc:`At Solar Solutions, we are committed to delivering high-quality HT and LT services. We use top-of-the-line equipment and components, sourced from trusted manufacturers,
         to ensure the longevity and performance of your solar system. Additionally, our customer support team is always available to address any questions or concerns you may have, providing ongoing assistance and guidance.`,
         img:"/support-animate.svg",
      }
    ],
    footerHeading:`By offering comprehensive HT and LT services, we aim to meet the diverse needs of our customers across a wide range of solar projects. Whether it's a large-scale utility installation or a residential system, we have the expertise and resources to deliver reliable, efficient, and cost-effective solutions. Contact us today to discuss your HT or LT solar requirements and let us help you harness the power of solar energy.`,
    cta:"/contact"
  },
  {
    id:3,
    slug:"consultant",
    title:"Solar Consultant",
    subheading:`At Solar Solutions, we offer professional solar consultation services to help our customers make informed decisions about their solar energy projects. Our dedicated team of experts is here to provide guidance, expertise, and personalized solutions tailored to your specific needs.`,
    content:[
      {
        id:1,
        heading:"Comprehensive Assessment",
        desc:`During a solar consultation, our knowledgeable consultants will conduct a comprehensive assessment of your property, taking into account factors such as roof orientation, shading, available space, and energy consumption patterns. This assessment allows us to understand your unique requirements and design a solar system that maximizes energy production and efficiency.`,
        img:"/assessment.gif",
        // <a href="https://storyset.com/business">Business illustrations by Storyset</a>
        // <a href="https://storyset.com/business">Business illustrations by Storyset</a>
      },
      {
        id:2,
        heading:"Customized Solar Solutions",
        desc:`Based on the assessment, our consultants will work closely with you to develop a customized solar solution that aligns with your goals, preferences, and budget. We take into consideration your energy needs, financial objectives, and any specific requirements you may have to ensure that the proposed solar system meets your expectations.`,
        img:"/customization-animate.svg"
        
      },
      {
        id:3,
        heading:"Financial Analysis",
        desc:`As part of our solar consultation service, we provide a detailed financial analysis that outlines the potential cost savings and return on investment (ROI) associated with your solar project.
         Our experts will assess available incentives, financing options, and utility policies to provide you with a clear understanding of the financial benefits of going solar`,
         img:"/consulting-animate.svg"
      },
      {
        id:4,
        heading:"Regulatory and Permitting Assistance",
        desc:`Navigating the regulatory landscape and obtaining the necessary permits for solar installations can be complex. Our consultants are well-versed in local regulations and will
         guide you through the entire permitting process, ensuring compliance with all relevant codes and regulations.`,
          img:"/consulting-animate.svg"
      },
      {
        id:5,
        heading:"Technology and Equipment Recommendations",
        desc:`With our extensive knowledge of solar technologies and equipment, we will recommend the most suitable solar panels, 
        inverters, and other components for your project. We partner with reputable manufacturers to provide high-quality, reliable, and efficient equipment that meets your specific requirements.`,
        img:"/support-animate.svg"
      },
      {
        id:6,
        heading:"Ongoing Support",
        desc:`Our commitment to our customers extends beyond the initial consultation. We offer ongoing support throughout the entire solar journey, from the initial consultation to post-installation maintenance and monitoring. Our team is always available to answer any questions, address concerns, and provide ongoing assistance to ensure your solar system operates optimally.`,
        img:"/support-animate.svg"
      }
    ],
    footerHeading:`By choosing our solar consultation service, you can benefit from our expertise, industry insights, and personalized approach. We aim to empower you with the knowledge and confidence to make informed decisions about your solar energy project. Contact us today to schedule a solar consultation and take the first step toward a sustainable energy future.`,
    cta:"/contact"

  }
]

const Page = () => {


    const {slug} = useParams()
    const service = services.filter(service => service.slug === slug)
  return (
    <PageWrapper>
      <PagePathBanner/>
      {slug != "solar-material-supply"? 
      <Container className="min-h-screen ">{service.map(service => (
        <div key={service.id} className="flex flex-col gap-20 mx-auto ">
            <div className="flex flex-col gap-6 text-center">
              <DivTitle text={service.title}/>
            <m.p variants={textVariant(0.1)} initial="hidden"  whileInView="show" viewport={{once:true, amount:0.3}} className="text-xl text-gray-500">{service.subheading}</m.p>
            </div>
            {service.content.map(content =>{
              const isEven = content.id % 2
              return (
                <div key={content.id}  className={`${ isEven? "md:flex-row-reverse":""} flex items-center flex-col-reverse md:flex-row gap-8  mx-auto overflow-hidden`}>
                  <m.div variants={fadeIn(isEven?'left':'right','spring',0.1,0.5)} initial="hidden"  whileInView="show" viewport={{once:true, amount:0.3}} className="flex flex-col md:w-1/2 gap-4">
                <h3 className="text-2xl font-bold text-gray-700"><span className="text-5xl text-orange-400 mr-3">{content.id}</span>{content.heading}</h3>
                <p className="text-gray-500">{content.desc}</p>
                </m.div>
                <m.div variants={fadeIn(isEven? 'right':'left','spring',0.1,0.5)} initial="hidden"  whileInView="show" viewport={{once:true, amount:0.3}} className="md:w-1/2">
                <Image src={content.img} width={640} height={480} className="w-full" alt=""/>
                </m.div>
                </div>
              )
            })}
            <div className="">
             <p className="text-lg text-gray-600">{service.footerHeading}</p>
            </div>
            <div className="bg-orange-500 flex justify-around items-center py-16 gap-12 rounded-lg shadow-lg flex-col md:flex-row">
              <h2 className="md:text-5xl text-3xl  font-bold text-white capitalize">Start your saving now...!</h2>
              <Button text="Get in Touch" className="bg-white cursor-pointer"/>
              
            </div>
            <div className="flex flex-col">
            <span className="text-sm text-gray-500 italic underline"><a href="https://storyset.com/business">Business illustrations by Storyset</a></span>
            <span className="text-sm text-gray-500 italic underline"><a href="https://storyset.com/worker">Worker illustrations by Storyset</a></span>
            </div>
        </div>
      ))}
      </Container>:<MaterialSupply/>
      }
    </PageWrapper>
  )
}

export default Page