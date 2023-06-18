import React from "react";
import Container from "./Container";

import ContactForm from "./Contact/ContactForm";
import ContactFormDetails from "./Contact/ContactFormDetails";
import AnimateComponent from "./animate/AnimateComponent";

const Quote = () => {
  // bg-[url('../public/solar-hero-two.jpg')] bg-cover bg-no-repeat relative after:content-[''] after:absolute after:bg-black/80  after:inset-0
  return (
    <Container className="flex flex-col md:flex-row gap-20 min-h-screen bg-white w-full">
      <AnimateComponent className="w-full" type="right">
      <ContactFormDetails title="Request A Free Quote"/>
      </AnimateComponent>
      <AnimateComponent className="w-full" type="left">
      <ContactForm title="Get A Free Quote" className="w-full"/>
      </AnimateComponent>
    </Container>
  );
};

export default Quote;
