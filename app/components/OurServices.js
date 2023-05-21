import Container from "./Container";

import ServiceHeader from "./Services/ServiceHeader";
import ServiceMain from "./Services/ServiceMain";

const OurServices = () => {
  return (
    <Container className="flex flex-col gap-20 items-center">
      <ServiceHeader/>
      <ServiceMain/>
    </Container>
  );
};

export default OurServices;
