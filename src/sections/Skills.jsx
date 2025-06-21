"use client";
import StarIcon from "../assets/icons/star.svg";
import JS from "../assets/icons/square-js.svg";
import Tailwind from "../assets/icons/tailwind-css-svgrepo-com.svg";
import React from "../assets/icons/react.svg";
import Redux from "../assets/icons/redux-logo-svgrepo-com(1).svg";
import Query from "../assets/icons/query.svg";
import Next from "../assets/icons/next-js-svgrepo-com.svg";
import GitHub from "../assets/icons/github.svg";
import Framer from "../assets/icons/Framer.svg";
import { motion } from "framer-motion";
import Card from "../components/Card";
import ToolboxItems from "../components/ToolboxItems";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Javascript",
    icon: JS,
  },
  {
    title: "Tailwind CSS",
    icon: Tailwind,
  },
  {
    title: "React",
    icon: React,
  },
  {
    title: "React Query",
    icon: Query,
  },
  {
    title: "Redux Toolkit",
    icon: Redux,
  },

  {
    title: "Next.JS",
    icon: Next,
  },
  {
    title: "Framer Motion",
    icon: Framer,
  },
  {
    title: "Github",
    icon: GitHub,
  },
];

const Skills = [
  {
    title: "HTML5",
    left: "5%",
    top: "5%",
  },
  {
    title: "CSS3",
    left: "9%",
    top: "50%",
  },
  {
    title: "SCSS",
    left: "60%",
    top: "45%",
  },

  {
    title: "JavaScript",
    left: "40%",
    top: "47%",
  },
  {
    title: "Bootstrap",
    left: "55%",
    top: "15%",
  },
  {
    title: "Tailwind",
    left: "35%",
    top: "68%",
  },
  {
    title: "React",
    left: "25%",
    top: "55%",
  },
  {
    title: "React Query",
    left: "45%",
    top: "75%",
  },
  {
    title: "Redux Toolkit",
    left: "31%",
    top: "25%",
  },
  {
    title: "Next JS",
    left: "18%",
    top: "40%",
  },
  {
    title: "Framer Motion",
    left: "21%",
    top: "12%",
  },
  {
    title: "GSAP",
    left: "71%",
    top: "32%",
  },
  {
    title: "Shadcn",
    left: "11%",
    top: "72%",
  },

  {
    title: "Clerk",
    left: "66%",
    top: "76%",
  },
  {
    title: "Git",
    left: "12%",
    top: "26%",
  },
  {
    title: "Github",
    left: "26%",
    top: "86%",
  },
];

export const SkillSection = () => {
  const ref=useRef(null)
  return (
    <section id="skills" className="py-16 md:px-16 lg:px-10">
      <div className="flex justify-center">
        <p
          className="uppercase font-semibold tracking-widest 
          bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text
          text-transparent text-center"
        >
          Skills and ToolBox
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        Technologies I Work With
      </h2>
      <p className="text-center md:text-lg lg:text-xl  text-white/60 mt-6 max-w-md mx-auto">
        Explore my technical expertise and soft skills that drive successful
        projects
      </p>
      <div className="mt-20 flex flex-col justify-center lg:items-center gap-4 ">
        <Card className="h-[320px] lg:h-[290px] !p-0 lg:!max-w-4xl">
          <div className="flex flex-col px-6 pt-6">
            <div className="inline-flex items-center gap-2">
              <StarIcon className="text-emerald-300 size-9" />
              <h3 className="font-serif text-3xl">My Preferred Tech Stack</h3>
            </div>
            <p className="text-sm text-white/60 mt-2">
             Here are my favorite tools and technologies that I love using in my projects.
              
            </p>
          </div>
          <ToolboxItems
            items={toolboxItems}
            className="mt-6"
            itemsClassName="animate-move-left [animation-duration:30s]"
          />
          <ToolboxItems
            items={toolboxItems}
            className="mt-6 "
            itemsClassName="animate-move-right [animation-duration:20s]"
          />
        </Card>

        <Card className="h-[420px] !p-0 flex flex-col lg:w-[100%]">
          <div className="flex flex-col px-6 pt-6">
            <div className="inline-flex items-center gap-2">
              <StarIcon className="text-emerald-300 size-9" />
              <h3 className="font-serif text-3xl">All Skills and Tools</h3>
            </div>
            <p className="text-sm text-white/60 mt-2">
              Explore the technologies and tools I use to craft expceptional
              digital experiences.
            </p>
          </div>

          <div className="relative flex-1" ref={ref}>
            {Skills.map((skill) => (
              <motion.div
                key={skill.title}
                className="inline-flex items-center px-4
            bg-gradient-to-r from-emerald-300 to-sky-400 
            rounded-full py-1.5 absolute cursor-pointer"
                style={{
                  left: skill.left,
                  top: skill.top,
                }}
                drag
                dragConstraints={ref}
              >
                <span className="font-semibold text-gray-950 flex items-center">
                  {" "}
                  <StarIcon className="text-emerald-800 size-5" /> {skill.title}
                  <StarIcon className="text-emerald-800 size-5" />
                </span>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
