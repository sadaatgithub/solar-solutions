import React from 'react'
import Testimonial from '../components/Testimonial'
import AboutHeader from './component/AboutHeader'
import AboutStat from './component/AboutStat'
import AboutUs from '../components/AboutUs'
import PagePathBanner from '../components/PagePathBanner'
import PageWrapper from '../components/PageWrapper'

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