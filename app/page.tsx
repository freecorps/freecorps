"use client";
import { OurTeam } from "@/components/ourTeam";
import { ProjectCards } from "@/components/projects";
import { Title } from "@/components/title";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

export default function DefaultPage() {
  return (
    <div>
      <div className="w-full h-screen rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <Title words={["beautiful", "fast", "responsive", "accessible"]} />
        </div>
        <BackgroundBeams />
      </div>
      <div className="w-full h-screen rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl text-neutral-600 dark:text-neutral-400 font-bold">
            Projects
          </div>
          <ProjectCards />
        </div>
      </div>
      <div className="w-full h-screen rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl text-neutral-600 dark:text-neutral-400 font-bold mb-4">
            Our Team
          </div>
          <OurTeam />
        </div>
      </div>
    </div>
  );
}
