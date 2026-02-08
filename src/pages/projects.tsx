"use client";
import { Expandable_Cards } from "@/components/ExpandableCards";
import { projectsData, type ProjectData } from "@/data/projectdata";

interface ProjectsProps {
  projects?: ProjectData[];
}

export default function Projects({ projects = projectsData }: ProjectsProps) {
  return (
    <div className="h-[70vh] md:h-[95vh] w-screen flex items-start justify-center overflow-scroll">
      <div>
        <Expandable_Cards
          cards={projects}
        />
      </div>
    </div>
  );
}