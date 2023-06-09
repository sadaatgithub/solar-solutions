import React from 'react'
import PagePathBanner from '../components/PagePathBanner'
import PageWrapper from '../components/PageWrapper'
import Container from '../components/Container'
import ContactFormDetails from '../components/Contact/ContactFormDetails'
import ContactForm from '../components/Contact/ContactForm'
import AnimateComponent from '../components/animate/AnimateComponent'


export const metadata = {
  title: {
    default: 'Solar Solutions',
    template: 'Solar Solutions',
    absolute: 'Contact | Solar Solutions',
  },
  description: 'By Choudhary Engineering',
};
const Contact = () => {
  return (
    <PageWrapper>
    <PagePathBanner/>
      <Container className="flex gap-20 flex-col md:flex-row w-full">
        <AnimateComponent className="w-full" type="right">
        <ContactFormDetails title="Dont Hesitate to contact us"/>
        </AnimateComponent>
        <AnimateComponent className="w-full" type="left">
        <ContactForm title="Send Message" className="w-full"/>
        </AnimateComponent>
      </Container>
    </PageWrapper>
  )
}

export default Contact