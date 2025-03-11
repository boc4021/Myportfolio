"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am currently pursuing a{" "}
        <span className="font-medium">
          Master's degree specializing in Microelectronics and Integration of Real-Time Embedded Systems
        </span>
        , after earning a{" "}
        <span className="font-medium">
          DUT in Embedded Systems
        </span>{" "}
        and a{" "}
        <span className="font-medium">
          Bachelor's degree in Electronics, Electrical Engineering, and Automation (EEA)
        </span>
        . I am passionate about designing and integrating innovative electronic solutions.
      </p>

      <p className="mb-3">
        My expertise includes{" "}
        <span className="font-medium">
          embedded programming, circuit design, and project management
        </span>
        . I enjoy working on{" "}
        <span className="italic">cutting-edge technological projects</span> in embedded systems, where I can apply my skills to develop efficient and intelligent solutions.
      </p>

      <p>
        <span className="italic">When I'm not working on embedded systems</span>, I enjoy exploring new technologies, learning about{" "}
        <span className="font-medium">hardware design and IoT</span>, and keeping up with the latest advancements in microelectronics. I am currently looking for opportunities to contribute to innovative projects in{" "}
        <span className="font-medium">embedded systems and real-time computing</span>.
      </p>

    </motion.section>
  );
}
