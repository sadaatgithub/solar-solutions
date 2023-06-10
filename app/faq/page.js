import React from 'react'
import PageWrapper from '../components/PageWrapper'
import Container from '../components/Container'
import Faqs from './component/Faqs'
import Link from 'next/link'
import PagePathBanner from '../components/PagePathBanner'


export const metadata = {
  title: {
    default: 'Solar Solutions',
    template: 'Solar Solutions',
    absolute: 'FAQs | Solar Solutions',
  },
  description: 'By Choudhary Engineering',
};
const Faq = () => {
  const subtitle = "Find Answers to Your Solar Queries"
  return (
    <PageWrapper>
      <PagePathBanner subtitle={subtitle}/>
        <Container className="min-h-screen flex flex-col gap-20 justify-center items-center">
          <div className=" flex-col gap-4 items-center lg:w-2/3 hidden">
            <h2 className="text-5xl font-bold">FAQs</h2>
            <p className="text-xl text-gray-500 text-center"></p>
          </div>

            <Faqs/>

            <div className="flex flex-col gap-6 items-center justify-center">
              <div className="flex flex-col gap-4 items-center justify-center">
                <h4 className="text-[32px] font-bold">Still have a question?</h4>
                <p className="text-xl">Feel free to contact us</p>
              </div>
              <Link href="/contact" className="px-6 py-3 border border-orange-500 w-[104px]"><button>Contact</button></Link>
            </div>
        </Container>
    </PageWrapper>
  )
}

export default Faq