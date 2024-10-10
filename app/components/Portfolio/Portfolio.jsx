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
      <div className="sticky top-0 pt-[90vh] lg:pt-[10vh] text-center text-transparent  text-4xl lg:text-7xl">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Featured Works</h2>
        <motion.div
          style={{ scaleX }}
          className="h-2 bg-gradient-to-r from-brand-primary to-brand-secondary"
        ></motion.div>
      </div>

      {projectsData.map((project) => {
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
