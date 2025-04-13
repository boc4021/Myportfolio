"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data"; // Assuming skillsData is imported from here
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

// Animation variants for fade-in effect
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index, // Stagger delay for each skill
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {/* Map over skillsData */}
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {/* Displaying skill name from the skillsData object */}
            {skill} {/* Assuming each item in skillsData has a 'name' property */}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
