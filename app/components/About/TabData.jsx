import React from "react";
import { skillsData } from "../Projects";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Frontend Development",
    id: "frontend-development",
    content: (
      <ul className="flex gap-10 items-center justify-center">
        {skillsData
          .filter((skill) => skill.type === "Frontend Development")
          .map((skill) => (
            <li
              key={skill.id}
              className="flex flex-col items-center group py-4 px-6 hover:py-2 hover:px-4"
            >
              <Image
                src={skill.img}
                alt="skill image"
                className="w-10  group-hover:w-14"
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
      <ul className="flex gap-10 items-center justify-center">
        {skillsData
          .filter((skill) => skill.type === "Libraries/Frameworks")
          .map((skill) => (
            <li
              key={skill.id}
              className="flex flex-col items-center group py-4 px-6 hover:py-2 hover:px-4"
            >
              <Image
                src={skill.img}
                alt="skill image"
                className="w-10  group-hover:w-14"
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
      <ul className="flex gap-10 items-center justify-center">
        {skillsData
          .filter((skill) => skill.type === "Testing")
          .map((skill) => (
            <li
              key={skill.id}
              className="flex flex-col items-center group py-4 px-6 hover:py-2 hover:px-4"
            >
              <Image
                src={skill.img}
                alt="skill image"
                className="w-10  group-hover:w-14"
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
      <ul className="flex gap-10 items-center justify-center">
        {skillsData
          .filter((skill) => skill.type === "Version Control & Collaboration")
          .map((skill) => (
            <li
              key={skill.id}
              className="flex flex-col items-center group py-4 px-6 hover:py-2 hover:px-4"
            >
              <Image
                src={skill.img}
                alt="skill image"
                className="w-10  group-hover:w-14"
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
      <ul className="flex gap-10 items-center justify-center">
        {skillsData
          .filter((skill) => skill.type === "Backend Interaction")
          .map((skill) => (
            <li
              key={skill.id}
              className="flex flex-col items-center group py-4 px-6 hover:py-2 hover:px-4"
            >
              <Image src={skill.img} alt="skill image" className="w-10" />{" "}
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
