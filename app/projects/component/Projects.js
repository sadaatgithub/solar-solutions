"use client";
import React, { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import Container from "@/app/components/Container";
import config from "../../../app/index.json";
import Project from "@/app/components/Project";

const Projects = () => {
  const projects = [...config.projects];
  const [filteredData, setFilterData] = useState(projects.sort((a,b) => b.capacity - a.capacity));
  const [activeCategory, setActiveCategory] = useState("All");
  const category = [...new Set(projects.map((project) => project.category))];

  const setCategory = (category) => {
    if (category === "All") {
      setFilterData(projects);
      setActiveCategory("All");
    } else {
      setFilterData(projects.filter((project) => project.category == category));
      setActiveCategory(category);
    }
  };
  return (
    <Container className="flex flex-col gap-y-10 ">
      <div className=" flex-col gap-6 items-center hidden">
        <h2 className="text-4xl font-bold text-sky-800">Projects</h2>
        <p>Helping you save energy and keep the lights on</p>
      </div>
      <div className="flex gap-4 justify-center text-sm ">
        <button
          onClick={() => setCategory("All")}
          className={`${
            activeCategory == "All"
              ? "border-b-2 border-orange-400 text-gray-700"
              : "border-b-2 border-b-transparent text-gray-400"
          }  py-1  uppercase`}
        >
          All
        </button>
        {category.map((category) => (
          <button
            key={category}
            onClick={() => setCategory(category)}
            className={`${
              activeCategory === category
                ? "border-b-2 border-orange-400 text-gray-700"
                : "border-b-2 border-b-transparent text-gray-400"
            } py-1 uppercase `}
          >
            {category}
          </button>
        ))}
      </div>
      <m.div
        layout
        className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 place-items-center mt-10"
      >
        <AnimatePresence>
          {filteredData.map((project) => (
            <m.div
              layout
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              key={project.id}
            >
              <Project project={project} />
            </m.div>
          ))}
        </AnimatePresence>
      </m.div>
    </Container>
  );
};

export default Projects;
