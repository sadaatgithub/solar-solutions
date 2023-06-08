import React from "react";
import PageWrapper from "../components/PageWrapper";
import PagePathBanner from "../components/PagePathBanner";
import ServiceMain from "../components/Services/ServiceMain";
import Container from "../components/Container";


export const metadata = {
  title: {
    default: 'Solar Solutions',
    template: 'Solar Solutions',
    absolute: 'Services | Solar Solutions',
  },
  description: 'By Choudhary Engineering',
};
const Services = () => {
  return (
    <PageWrapper>
      <PagePathBanner />
      <Container>
        <ServiceMain />
      </Container>
    </PageWrapper>
  );
};

export default Services;
