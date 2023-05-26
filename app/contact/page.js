import React from 'react'
import PagePathBanner from '../components/PagePathBanner'
import PageWrapper from '../components/PageWrapper'
import Container from '../components/Container'
import ContactFormDetails from '../components/Contact/ContactFormDetails'
import ContactForm from '../components/Contact/ContactForm'

const Contact = () => {
  return (
    <PageWrapper>
    <PagePathBanner/>
      <Container className="flex gap-20 flex-col md:flex-row">
        <ContactFormDetails title="Dont Hesitate to contact us"/>
        <ContactForm title="Send Message" className="md:w-1/2 w-full"/>
      </Container>
    </PageWrapper>
  )
}

export default Contact