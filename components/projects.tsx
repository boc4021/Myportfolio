"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>

      {/* Flex container for the project cards */}
      <div className="justify-center items-center flex flex-wrap gap-6">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            {/* Wrapping the Project component in a Link */}
            <Link href={`/projects/${project.slug}`} className="w-full sm:w-[calc(25%-1.5rem)] relative group">
              <Project {...project} />
            </Link>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
