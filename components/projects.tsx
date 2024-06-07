import { HoverEffect } from "./ui/card-hover-effect";


export function ProjectCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Core Liibrary",
    description:
      "Awesome library for managing physical books.",
    link: "https://github.com/freecorps/corelibrary",
  },
  {
    title: "Meteoro",
    description:
      "A simple weather app that uses ESP8266 and and AI.",
    link: "https://github.com/freecorps/meteoro",
  },
  {
    title: "Pulse",
    description:
      "The new way to track your game.",
    link: "https://pulse.freecorps.xyz",
  },
  {
    title: "Docs",
    description:
      "The documentation for all of our projects.",
    link: "https://docs.freecorps.xyz",
  },
];
