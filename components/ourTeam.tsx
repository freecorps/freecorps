"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Heitor Stein",
    designation: "Computer Engineer",
    image:
      "https://avatars.githubusercontent.com/u/37478781?v=4",
  },
  {
    id: 2,
    name: "Matheus",
    designation: "Computer Engineer",
    image:
      "https://avatars.githubusercontent.com/u/150926126?v=4",
  },
  {
    id: 3,
    name: "Vinicius Menis",
    designation: "Computer Engineer",
    image:
      "https://avatars.githubusercontent.com/u/74736432?v=4",
  },
  {
    id: 4,
    name: "Wolf Stievano",
    designation: "Computer Engineer",
    image:
      "https://avatars.githubusercontent.com/u/79229960?v=4",
  }
];

export function OurTeam() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
