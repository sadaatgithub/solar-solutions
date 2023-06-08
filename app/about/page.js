import React from 'react'
import Testimonial from '../components/Testimonial'
import AboutHeader from './component/AboutHeader'
import AboutStat from './component/AboutStat'
import AboutUs from '../components/AboutUs'
import PagePathBanner from '../components/PagePathBanner'
import PageWrapper from '../components/PageWrapper'

export const metadata = {
  title: {
    default: 'Solar Solutions',
    template: 'Solar Solutions',
    absolute: 'About | Solar Solutions',
  },
  description: 'By Choudhary Engineering',
};

const About = () => {
  return (
  
    <PageWrapper>
    <PagePathBanner/>
    <AboutUs/>
    {/* <AboutHeader/> */}
    <AboutStat/>
    {/* <OurServices/> */}
    <Testimonial/>
    </PageWrapper>
  

  )
}

export default About