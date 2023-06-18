"use client";
import React from "react";
import config from "../../../app/index.json";
import TopSubHeading from "../common/heading/TopSubHeading";
import DivTitle from "../common/heading/DivTitle";
import { motion as m } from "framer-motion";
import { fadeIn } from "@/lib/animation";
import Project from "../Project";

const RecentProject = () => {
  const projects = [...config.projects];
  return (
    <div className="flex flex-col gap-20 py-20">
      <div className="flex flex-col gap-4 px-4 lg:px-20 items-center">
        <TopSubHeading text="What We Do" />
        <DivTitle text="Recent Projects" />
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 place-items-center">
        {projects
          .sort((a, b) => b.capacity - a.capacity)
          .slice(0, 4)
          .map((project, idx) => (
            <m.div
              className=""
              key={project.id}
              variants={fadeIn("up", "tween", idx * 0.3, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Project project={project} />
            </m.div>
          ))}
      </div>
    </div>
  );
};

export default RecentProject;
