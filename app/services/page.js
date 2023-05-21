import React from "react";
import PageWrapper from "../components/PageWrapper";
import PagePathBanner from "../components/PagePathBanner";
import ServiceMain from "../components/Services/ServiceMain";
import Container from "../components/Container";

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
