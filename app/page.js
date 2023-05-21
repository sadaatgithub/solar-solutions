import Hero from './components/Hero'
import WhyGoForSolar from './components/WhyGoForSolar'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import Quote from './components/Quote'
import Testimonial from './components/Testimonial'
import PageWrapper from './components/PageWrapper'
import RecentProject from './components/RecentProjects/RecentProject'

export default function Home() {
  return (
    <>
    <PageWrapper>
    <Hero/>
    <WhyGoForSolar/>
    <AboutUs/>
    <OurServices/>
    <RecentProject/>
    <Testimonial/>
    <Quote/>
    </PageWrapper>
    </>
  )
}
