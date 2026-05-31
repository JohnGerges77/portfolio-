"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    badge: "Graduated",
    title: "Computer Science Graduate",
    meta: "Class of 2025",
    description:
      "Completed my Computer Science degree and built a strong foundation in frontend development, problem solving, and modern web technologies.",
    details: [
      "Focused on building fast, responsive user interfaces.",
      "Worked with TypeScript, React.js, Next.js, and animation tools.",
      "Turned academic learning into practical portfolio projects.",
    ],
    align: "left",
  },
  {
    badge: "First Job",
    title: "Front-End Developer | Alrowad",
    meta: "Egypt | Jul 2025 - Present",
    description:
      "Contributing to ERP modules and business platforms, including Arrow Meet and other internal/client-facing solutions.",
    details: [
      "Built and launched business platforms including Arrow Meet and other internal/client-facing solutions.",
      "Developed responsive and scalable interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
      "Collaborated closely with back-end developers to integrate APIs and optimize application performance.",
      "Improved UI/UX consistency, accessibility, and cross-browser compatibility across projects.",
    ],
    align: "right",
  },
];

const itemVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -80 : 80,
    y: 20,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

export const ExperienceSection = () => {
  const renderCard = (item, accentClass) => (
    <div className="relative ml-12 md:ml-0">
      <div
        className={`absolute -left-12 top-6 hidden md:block size-5 rounded-full border bg-gray-950 shadow-[0_0_0_8px_rgba(16,185,129,0.08)] ${accentClass}`}
      />
      <div
        className={`absolute -left-7 top-6 md:hidden size-4 rounded-full border bg-gray-950 ${accentClass}`}
      />

      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
            item.badge === "Graduated"
              ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-200"
              : "border-sky-400/20 bg-sky-400/10 text-sky-200"
          }`}
        >
          {item.badge}
        </div>
        <h3 className="font-serif text-2xl md:text-3xl mt-4">{item.title}</h3>
        <p className="mt-2 text-sm md:text-base text-white/60">{item.meta}</p>
        <p className="mt-5 text-sm md:text-base leading-7 text-white/80">
          {item.description}
        </p>
        <ul className="mt-5 space-y-3">
          {item.details.map((detail) => (
            <li
              key={detail}
              className="flex gap-3 text-sm md:text-base text-white/70 leading-7"
            >
              <span
                className={`mt-2 size-2 rounded-full shrink-0 ${
                  item.badge === "Graduated"
                    ? "bg-gradient-to-r from-emerald-300 to-sky-400"
                    : "bg-gradient-to-r from-sky-400 to-emerald-300"
                }`}
              />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-x-clip">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-emerald-300/0 via-emerald-300/35 to-sky-400/0" />
        <div className="absolute -left-16 top-24 h-56 w-56 rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex justify-center">
          <p
            className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center"
          >
            Experience
          </p>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          My Journey So Far
        </h2>

        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-6 max-w-2xl mx-auto">
          From graduation to my first professional role, here is the path that shaped my growth as a frontend developer.
        </p>

        <div className="mt-16 space-y-12 md:space-y-16">
          {timeline.map((item, index) => {
            const isLeft = item.align === "left";
            const columnClass = isLeft
              ? "md:col-start-1 md:justify-self-start md:pr-10"
              : "md:col-start-3 md:justify-self-end md:pl-10";

            return (
              <div
                key={item.title}
                className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-6 md:gap-10"
              >
                <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

                <motion.div
                  className={`relative ${columnClass}`}
                  custom={isLeft ? "left" : "right"}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
                  viewport={{ once: true, amount: 0.35 }}
                >
                  {renderCard(
                    item,
                    item.badge === "Graduated"
                      ? "border-emerald-300/50 shadow-[0_0_0_8px_rgba(16,185,129,0.08)]"
                      : "border-sky-400/50 shadow-[0_0_0_8px_rgba(56,189,248,0.08)]"
                  )}
                </motion.div>

                <div className="hidden md:flex md:col-start-2 justify-center pt-6">
                  <motion.div
                    className="relative z-10 size-14 rounded-full border border-white/10 bg-gray-950 flex items-center justify-center shadow-[0_0_0_14px_rgba(255,255,255,0.03)]"
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + index * 0.15 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <div className="size-4 rounded-full bg-gradient-to-br from-emerald-300 to-sky-400 shadow-[0_0_20px_rgba(52,211,153,0.55)]" />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
