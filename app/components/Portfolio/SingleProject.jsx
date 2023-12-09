"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

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
      <div className="flex justify-center items-center w-full h-full overflow-hidden">
        <div className="m-10 max-w-7xl h-full flex gap-10 items-center justify-center">
          <motion.div style={{ y }} className="flex-1 flex flex-col gap-4">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm">{description}</p>
            <div className="flex ">
              {propertyTitles && propertyTitles.length > 0 && (
                <h5>
                  {propertyTitles.map((title, index) => (
                    <button
                      key={index}
                      onClick={() => handleTitleClick(index)}
                      className={`pr-6 py-2 text-left
                    {${
                      index === selectedPropertyIndex
                        ? "text-slate-400 underline font-bold"
                        : "text-[#adb7be] "
                    }`}
                    >
                      {title}
                    </button>
                  ))}
                </h5>
              )}
              <p className="text-sm">{properties[selectedPropertyIndex]}</p>
            </div>
            <div className="flex justify-evenly">
              {skills.map((skill, index) => (
                <Image
                  key={index}
                  src={skill}
                  alt="skill image"
                  className="w-10  group-hover:w-14"
                />
              ))}
            </div>
            <div className="flex">
              <a href={code} className="w-full ">
                <motion.button className="w-full items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-[#f1eaea]  dark:text-[#001b1d]">
                  <motion.span className="block p-5 transition-all duration-75 ease-in bg-[#FFE182] bg-opacity-0 rounded-full group-hover:bg-opacity-40">
                    Code
                  </motion.span>
                </motion.button>
              </a>

              <a href={demo} className="w-full ">
                <motion.button className="w-full items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-[#f1eaea]  dark:text-[#001b1d]">
                  <motion.span className="block p-5 transition-all duration-75 ease-in bg-[#FFE182] bg-opacity-0 rounded-full group-hover:bg-opacity-40">
                    Preview
                  </motion.span>
                </motion.button>
              </a>
            </div>
          </motion.div>

          <div ref={ref} className="flex-1 h-1/2">
            <Image
              src={src}
              alt="project images"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;
