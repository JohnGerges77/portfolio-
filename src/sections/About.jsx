"use client";
import { motion } from "framer-motion";
import SocialIcons from "@/components/SocialIcons";


function AboutSection() {
  return (
    <div className="py-16 md:px-16 lg:px-10  overflow-x-hidden" >
      <div className="flex justify-center">
        <p
          className="uppercase font-semibold tracking-widest 
          bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text
          text-transparent text-center"
        >
          About Me
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        A Glimpse Into My World
      </h2>
      <p className="text-center md:text-lg lg:text-xl  text-white/60 mt-6 max-w-md mx-auto">
        Learn more about who I am, what I do, what inpires me.
      </p>
      <div
        className="flex flex-col items-center mt-16 mx-5 font-sans text-base sm:text-lg text-gray-200 text-center leading-8 
      lg:items-start lg:text-left lg:text-2xl lg:ml-[10%] "
      >
        <motion.div
          initial={{ x: +100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl lg:text-3xl mb-10 font-bold 
        bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text  text-transparent "
        >
          Frontend developer React || Next.JS
        </motion.div>

        <motion.div
          className="mt-3 max-w-[95%] sm:max-w-[85%] xl:max-w-[72%]"
          initial={{ x: +100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          I&apos;m John Gerges, a Front-end Developer and a Computer Science
          graduate, Class of 2025. I focus on building fast, responsive, and
          user-friendly websites using modern technologies like Next.js, React,
          and Tailwind CSS.
        </motion.div>

        <motion.div
          initial={{ x: +100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-300 to-sky-400 h-[1px] w-[90%] my-5 sm:w-[85%] xl:w-[80%]"
        ></motion.div>

        <motion.div
          className="max-w-[95%] sm:max-w-[85%] xl:max-w-[72%]"
          initial={{ x: +100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          My journey into web development began through self-learning on
          platforms like Udemy. I developed strong skills in tools such as
          Tailwind CSS, React, Next.Js, GSAP, and Framer Motion. I&apos;m passionate
          about delivering seamless digital experiences and continuously growing
          my capabilities.
        </motion.div>
        <motion.div
          initial={{ x: +100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-300 to-sky-400 h-[0.5px] w-[90%] my-5 sm:w-[85%] xl:w-[80%]"
        ></motion.div>
        <motion.div
          initial={{ x: +100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
   
        >
      <SocialIcons />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;
