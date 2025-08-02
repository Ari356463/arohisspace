"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Coming",
    },
    {
      text: "Soon,",
    },
    {
      text: "Designer",
    },
    {
      text: "is",
    },
    {
      text: "New",
    },
    {
      text: "To",
    },
    {
      text: "The",
    },
    {
      text: "Game(its me).",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                Arohi&apos;s Space
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

export default function Home() {
  return (
  <TypewriterEffectSmoothDemo/>
  );
}
