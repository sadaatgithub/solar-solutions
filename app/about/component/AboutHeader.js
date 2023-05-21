import Container from "@/app/components/Container";
import React from "react";

const AboutHeader = () => {
  return (
    <Container className="flex gap-20">
      <div className="text-5xl w-full font-bold text-gray-700">
        <h2>Powering a brighter future through solar innovation</h2>
      </div>
      <div className="w-full flex flex-col gap-6 text-gray-500">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
          faucibus massa sollicitudin amet augue. Nibh metus a semper purus
          mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
          adipiscing velit non nulla in amet pellentesque. </p>
          <p>Sit turpis pretium
          eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
          Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus.
          </p>
      </div>
    </Container>
  );
};

export default AboutHeader;
