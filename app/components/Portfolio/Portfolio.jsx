"use client";
import React, { useRef } from "react";
import { projectsData } from "../Projects";
import { motion, useScroll, useSpring } from "framer-motion";
import SingleProject from "./SingleProject";

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 30 });
  return (
    <div ref={ref} className="relative">
      <div className="sticky top-0 left-0 pt-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-4xl md:text-7xl">
        <h2>Featured Works</h2>
        <motion.div
          style={{ scaleX }}
          className="bg-[#494949] dark:bg-[#dedede] h-2"
        ></motion.div>
      </div>
      {projectsData.map((project) => {
        console.log(project.skills);
        return (
          <SingleProject
            key={project.id}
            title={project.title}
            src={project.image}
            description={project.description}
            propertyTitles={project.propertyTitles}
            properties={project.properties}
            code={project.gitUrl}
            demo={project.previewUrl}
            skills={project.skills}
          />
        );
      })}
    </div>
  );
};

export default Portfolio;
