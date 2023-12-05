import React, { useRef } from "react";
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
}) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const isEvenKey = projectId % 2 === 0;
  return (
    <section key={key}>
      <div className="flex justify-center items-center w-full h-full overflow-hidden">
        <div className="m-10 max-w-7xl h-full flex gap-10 items-center justify-center">
          {isEvenKey ? (
            <div ref={ref} className="flex-1 h-1/2">
              <Image
                src={src}
                alt="project images"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ) : null}
          <motion.div style={{ y }} className="flex-1 flex flex-col gap-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm">{description}</p>
            <p className="text-sm">{properties}</p>
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
          {isEvenKey ? null : (
            <div ref={ref} className="flex-1 h-1/2">
              <Image
                src={src}
                alt="project images"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleProject;
