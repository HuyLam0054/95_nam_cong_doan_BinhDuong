"use client";
import * as React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { ProjectCard } from "../common/project_card";

export interface IActivitives {}

export function Activitives(props: IActivitives) {
  return (
    <>
      <motion.div
        className="py-8 px-4 mx-auto max-w-screen-xl md:py-16"
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="mb-4 pb-10 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
          variants={slideInFromTop(0)}
        >
          Hoạt động Kỷ niệm
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            type={"Code"}
            name={
              "Giải bóng đá dành cho cán bộ Công đoàn, công nhân lao động 2024"
            }
            delay={0.5}
            img={"/banner1.jpg"}
            description={`Static websites are now used to bootstrap lots of websites and are
          becoming the basis for a variety of tools that even influence both
          web designers and developers.`}
          />
          <ProjectCard
            type={"Code"}
            name={"Start with Design System"}
            delay={0.5}
            img={"/banner1.jpg"}
            description={`Static websites are now used to bootstrap lots of websites and are
          becoming the basis for a variety of tools that even influence both
          web designers and developers.`}
          />
        </div>
      </motion.div>
    </>
  );
}
