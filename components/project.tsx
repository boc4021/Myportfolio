"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
    <section className="group relative w-[15rem] h-[15rem] bg-gray-100 border border-black/5 rounded-lg overflow-hidden transition-all duration-300 ease-in-out  hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
        {/* Content inside the square */}
        <div className="p-2 flex flex-col justify-between h-full">
          {/* Title */}
          <h3 className="text-sm font-semibold">{title}</h3>

          {/* Description */}
          <p className="mt-1 text-xs text-gray-700 dark:text-white/70">{description}</p>

          {/* Tags */}
          <ul className="flex flex-wrap mt-2 gap-1">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-2 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
