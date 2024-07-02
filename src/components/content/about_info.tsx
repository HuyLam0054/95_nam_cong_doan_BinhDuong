"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { Info } from "../common/info";
import { Experience } from "../common/experience";
import ExperienceContent from "./about_experience";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-900 pt-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl md:py-16">
        <h2 className="text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Information */}
          <Info />
          {/* Experience */}
          <ExperienceContent />
        </div>
      </div>
    </section>
  );
}
