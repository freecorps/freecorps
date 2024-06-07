import React from "react";
import { FlipWords } from "./ui/flip-words";

interface TitleProps {
    words: string[];
}

export function Title({words}: TitleProps) {

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        We Build
        <FlipWords words={words} /> <br />
        websites with React and Next.js
      </div>
    </div>
  );
}
