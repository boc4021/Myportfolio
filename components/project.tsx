"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  slug,
  images,
  githubLink,
  sections,
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
      <section className="group relative w-[15rem] h-[15rem] bg-gray-100 border border-black/5 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
        <div className="p-2 flex flex-col justify-between h-full">
          <h3 className="text-sm font-semibold">{title}</h3>

          {/* Optionnel : petit extrait du contenu de la première section */}
          <p className="mt-1 text-xs text-gray-700 dark:text-white/70">
            {sections?.[0]?.content?.slice(0, 100) ?? ""}
          </p>
        </div>
      </section>
    </motion.div>
  );
}
