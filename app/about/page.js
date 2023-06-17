import React from 'react'
import AboutStat from './component/AboutStat'
import AboutUs from '../components/AboutUs'
import PagePathBanner from '../components/PagePathBanner'
import PageWrapper from '../components/PageWrapper'
import Testimonials from '../components/Testimonials'
import OurServices from '../components/OurServices'

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
    <AboutStat/>
    <OurServices/>
    <Testimonials/>
    </PageWrapper>
  

  )
}

export default About