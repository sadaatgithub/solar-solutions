import React from "react";
import Container from "./Container";

import ContactForm from "./Contact/ContactForm";
import ContactFormDetails from "./Contact/ContactFormDetails";

const Quote = () => {
  // bg-[url('../public/solar-hero-two.jpg')] bg-cover bg-no-repeat relative after:content-[''] after:absolute after:bg-black/80  after:inset-0
  return (
    <Container className="flex flex-col md:flex-row gap-20 min-h-screen bg-white">
      <ContactFormDetails title="Request A Free Quote"/>
      <ContactForm title="Get A Free Quote" className="md:w-1/2 w-full"/>
    </Container>
  );
};

export default Quote;
