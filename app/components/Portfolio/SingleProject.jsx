"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { skillsData } from "../Projects";

const SingleProject = ({
  key,
  projectId,
  title,
  src,
  description,
  properties,
  code,
  demo,
  propertyTitles,
  skills,
}) => {
  const ref = useRef();
  const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleTitleClick = (index) => {
    setSelectedPropertyIndex(index);
  };

  return (
    <section key={key}>
      <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden lg:flex-row">
        <div className="flex flex-col-reverse items-center px-6 text-center lg:m-10 lg:max-w-7xl lg:h-full lg:flex-row lg:gap-10 md:justify-evenly lg:text-left">
          <motion.div
            style={{ y }}
            className="flex-1 flex flex-col gap-6 lg:pt-[100px] md:pt-20 textContainer"
          >
            <h3 className="text-3xl font-bold lg:text-6xl">{title}</h3>
            <p className="text-xs text-justify lg:text-sm">{description}</p>
            {/* <div className="flex text-left">
              {propertyTitles && propertyTitles.length > 0 && (
                <h5>
                  {propertyTitles.map((title, index) => (
                    <button
                      key={index}
                      onClick={() => handleTitleClick(index)}
                      className={`lg:pr-6 lg:py-2 py-0.5 pr-2 text-left
                    {${
                      index === selectedPropertyIndex
                        ? "text-slate-400 underline"
                        : "text-[#adb7be] "
                    }`}
                    >
                      {title}
                    </button>
                  ))}
                </h5>
              )}
              <p className="text-sm text-left">{properties[selectedPropertyIndex]}</p>
            </div> */}
            <div className="flex justify-evenly">
              {skills.map((skill, index) => (
                <Image
                  key={index}
                  src={skill}
                  alt="skill image"
                  className="w-6 lg:w-10"
                />
              ))}
            </div>
            <div className="flex items-start justify-center">
              {/* <a href={code} className="flex w-full justify-evenly">
                <motion.button className="w-40 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-[#f1eaea]  dark:text-[#001b1d]">
                  <motion.span className="block p-2 transition-all duration-75 ease-in bg-[#FFE182] bg-opacity-0 rounded-full group-hover:bg-opacity-40">
                    Code
                  </motion.span>
                </motion.button>
              </a> */}
              <div class="relative inline-flex group">
                <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <a
                  href={demo}
                  class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  {" "}
                  <motion.button>
                    <motion.span>Preview</motion.span>
                  </motion.button>
                </a>
              </div>
              {/* <a href={demo} className="flex w-full justify-evenly">
                <motion.button className="w-40 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-[#f1eaea]  dark:text-[#001b1d]">
                  <motion.span className="block p-2 transition-all duration-75 ease-in bg-[#FFE182] bg-opacity-0 rounded-full group-hover:bg-opacity-40">
                    Preview
                  </motion.span>
                </motion.button>
              </a> */}
            </div>
          </motion.div>

          <div
            ref={ref}
            className="lg:flex-1 w-[75%] md:mb-40 lg:mb-0 md:w-1/2  lg:h-1/2 px-10"
          >
            <Image
              src={src}
              alt="project images"
              className="lg:rounded-t-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;
