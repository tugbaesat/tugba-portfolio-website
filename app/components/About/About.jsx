"use client";
import React, { useRef, useState, useTransition } from "react";
import Image from "next/image";
import pc from "../../../public/pc.jpeg";
import { motion, useInView } from "framer-motion";
import TabButton from "./TabButton";
import TAB_DATA from "./TabData";
const services = [
  {
    title: "Custom Freelance Website Design",
    id: 1,
    description:
      "I specialize in creating visually striking and user-friendly websites that resonate with your brand. My designs are crafted to captivate your audience and drive engagement, ensuring your business stands out in Los Angeles’ bustling marketplace.",
  },
  {
    title: "Freelance Web Development Services",
    id: 2,
    description:
      "I offer top-tier development services, building websites that are robust, secure, and scalable. Utilizing the latest technologies, I ensure your site performs flawlessly across all devices and browsers, delivering an exceptional user experience.",
  },
  {
    title: "Fully Responsive Websites for Every Device",
    id: 3,
    description:
      "With most users accessing websites via mobile devices, I prioritize responsive design. Your website will adapt seamlessly to desktops, tablets, and smartphones, offering a consistent and professional experience for every visitor.",
  },
  {
    title: "SEO-Optimized Landing Pages",
    id: 4,
    description:
      "I understand the importance of visibility in local searches. I develop landing pages optimized for search engines, enhancing your visibility in local search results. By incorporating targeted keywords and adhering to SEO best practices, I help drive organic traffic to your site.",
  },
];
const About = () => {
  const variants = {
    initial: {
      x: -200,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const [tab, setTab] = useState(TAB_DATA[0].id);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const currentTabData = TAB_DATA.find((t) => t.id === tab);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
      className="flex flex-col items-center justify-center h-screen gap-2 overflow-hidden text-left bg-gradient-to-b from-dark-secondary-bg to-dark-primary-bg md:gap-10 lg:flex-row lg:justify-center lg:items-start"
    >
      {/* <motion.div
        variants={variants}
        className="flex flex-col items-center justify-center md:gap-4 lg:items-start"
      >
        <Image
          src={pc}
          alt="old computer image"
          className="object-cover w-60 md:w-40 md:h-20 rounded-3xl "
        />
        <h2 className="text-3xl text-center text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
          {" "}
          <b>About </b> Me
        </h2>
      </motion.div> */}
      {/* <motion.div
        variants={variants}
        className="w-full px-4 text-xs text-center lg:text-left lg:w-1/2 md:text-xl lg:flex lg:flex-col lg:gap-6 "
      >
        <motion.p variants={variants}>
          I’m a Web Developer & Designer based in Los Angeles, CA.
          With a strong background in UX/UI design and frontend development, I
          thrive on creating seamless, user-centric digital experiences that
          blend functionality with aesthetics. My work is driven by a commitment
          to detail, performance optimization, and delivering results that
          exceed client expectations.
        </motion.p>
        <motion.p variants={variants}>
          I have experience designing and developing high-conversion websites
          and applications using modern frameworks like React.js and Tailwind
          CSS, ensuring a focus on responsive design and accessibility. I’m also
          skilled in SEO optimization where I ensure 100% performance,
          accessibility, and SEO rankings.
        </motion.p>
        <motion.p variants={variants}>
          I’m always excited to work on innovative projects that push the
          boundaries of design and technology. My passion for continuous
          learning keeps me up-to-date with the latest trends, and I’m always
          looking for new opportunities to grow and take on exciting challenges.
        </motion.p>
      </motion.div> */}
      <motion.table variants={variants} className="w-4/5 table-fixed">
        <motion.tbody variants={variants} className="">
          {services.map((service) => (
            <motion.tr variants={variants}
              key={service.id}
              className="flex flex-col border-b-2 md:flex-row"
            >
              <td className="py-10 text-3xl font-extrabold md:py-16 md:px-12 text-dark-primary-text md:w-1/2 font-heading">
                {service.title}
              </td>
              <td className="py-10 text-justify md:py-16 md:pr-12 md:w-1/2">
                {service.description}
              </td>
            </motion.tr>
          ))}
        </motion.tbody>
      </motion.table>
      {/* <motion.div variants={variants} className="lg:w-[48rem]">
        <h3 className="text-xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-center py-2 ">
          Tech Stack
        </h3>

        <div className="flex flex-col gap-2 px-6 text-left md:flex-row">
          {TAB_DATA.map((tabData) => (
            <TabButton
              key={tabData.id}
              selectTab={() => handleTabChange(tabData.id)}
              active={tab === tabData.id}
            >
              {tabData.title}
            </TabButton>
          ))}
        </div>
        <div className="mt-6 text-xs text-left">
          {currentTabData ? currentTabData.content : null}
        </div>
      </motion.div> */}
    </motion.div>
  );
};

export default About;
