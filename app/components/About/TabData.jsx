import React from "react";
import { skillsData } from "../Projects";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Frontend Development",
    id: "frontend-development",
    content: (
      <ul className="flex items-center justify-center md:gap-10">
        {skillsData
          .filter((skill) => skill.type === "Frontend Development")
          .map((skill) => (
            <li
              key={skill.id}
              className="flex flex-col items-center h-20 text-center w-14 group group-hover:w-16 group-hover:h-20"
            >
              <Image
                src={skill.img}
                alt="skill image"
                className="w-10 group-hover:w-14"
                width={300}
                height={300}
              />{" "}
              <span className="opacity-0 group-hover:opacity-80">
                {skill.title}
              </span>
            </li>
          ))}
      </ul>
    ),
  },
  {
    title: "Libraries/Frameworks",
    id: "libraries-frameworks",
    content: (
      <ul className="flex items-center justify-center md:gap-10">
        {skillsData
          .filter((skill) => skill.type === "Libraries/Frameworks")
          .map((skill) => (
            <li
              key={skill.id}
              className="flex flex-col items-center h-20 text-center w-14 group group-hover:w-16 group-hover:h-20"
            >
              <Image
                src={skill.img}
                alt="skill image"
                className="w-10 group-hover:w-14"
              />{" "}
              <span className="opacity-0 group-hover:opacity-80">
                {skill.title}
              </span>
            </li>
          ))}
      </ul>
    ),
  },
  {
    title: "Testing",
    id: "testing",
    content: (
      <ul className="flex items-center justify-center gap-10">
        {skillsData
          .filter((skill) => skill.type === "Testing")
          .map((skill) => (
            <li
              key={skill.id}
              className="flex flex-col items-center h-20 text-center w-14 group group-hover:w-16 group-hover:h-20"
            >
              <Image
                src={skill.img}
                alt="skill image"
                className="w-10 group-hover:w-14"
              />{" "}
              <span className="opacity-0 group-hover:opacity-80">
                {skill.title}
              </span>
            </li>
          ))}
      </ul>
    ),
  },
  {
    title: "Version Control & Collaboration",
    id: "version-control",
    content: (
      <ul className="flex items-center justify-center gap-10">
        {skillsData
          .filter((skill) => skill.type === "Version Control & Collaboration")
          .map((skill) => (
            <li
              key={skill.id}
              className="flex flex-col items-center h-20 text-center w-14 group group-hover:w-16 group-hover:h-20"
            >
              <Image
                src={skill.img}
                alt="skill image"
                className="w-10 group-hover:w-14"
              />{" "}
              <span className="opacity-0 group-hover:opacity-80">
                {skill.title}
              </span>
            </li>
          ))}
      </ul>
    ),
  },
  {
    title: "Backend Interaction",
    id: "backend",
    content: (
      <ul className="flex items-center justify-center gap-10">
        {skillsData
          .filter((skill) => skill.type === "Backend Interaction")
          .map((skill) => (
            <li
              key={skill.id}
              className="flex flex-col items-center h-20 text-center w-14 group group-hover:w-16 group-hover:h-20"
            >
              <Image
                src={skill.img}
                alt="skill image"
                className="w-10 group-hover:w-14"
              />{" "}
              <span className="opacity-0 group-hover:opacity-80">
                {skill.title}
              </span>
            </li>
          ))}
      </ul>
    ),
  },
];

export default TAB_DATA;
