import Hero from './components/Hero'
import WhyGoForSolar from './components/WhyGoForSolar'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import Quote from './components/Quote'
import Testimonial from './components/Testimonial'
import PageWrapper from './components/PageWrapper'
import RecentProject from './components/RecentProjects/RecentProject'
import Testimonials from './components/Testimonials'


export const metadata = {
  title: {
    default: 'Solar Solutions',
    template: 'Solar Solutions',
    absolute: 'Home | Solar Solutions',
  },
  description: 'Best Solar Solution Provider in Nagpur',
};
export default function Home() {

  
  return (
    <>
    <PageWrapper>
    <Hero/>
    <WhyGoForSolar/>
    <AboutUs/>
    <OurServices/>
    <RecentProject/>
    <Testimonials/>
    <Quote/>
    </PageWrapper>
    </>
  )
}
