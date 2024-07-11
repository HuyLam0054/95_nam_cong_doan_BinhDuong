"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";

export interface IExperienceContentProps {}

export default function ExperienceContent(props: IExperienceContentProps) {
  return (
    <>
      {/* Experience */}
      <div className="bg-white dark:bg-gray-900 dark:border-gray-900 rounded-lg p-8 md:p-12">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-row items-center justify-center w-full z-[20]"
        >
          <div className="h-full w-full flex flex-col justify-center m-auto text-start">
            {/* title */}
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 mt-5 my-12 text-3xl md:text-5xl font-bold text-gray-800 dark:text-white max-w-[600px] w-auto h-auto"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Experience
              </span>
            </motion.div>
            {/* avt img */}
            <div className="grid gap-3">
              {/* information */}
              <Experience
                name={"Oryza JSC"}
                job={"Intern Frontend Developer"}
                dateStart={"02/2023"}
                dateEnd={"05/2023"}
                content={`Implement frontend development for the Oryza Product website, knowing 
                how to utilize hooks and data processing flows. Have experience working with various frameworks 
                including Next.js. Additionally, gather and process data to build a Yolo model for traffic object detection.`}
              />
              <Experience
                name={"ISC Quang Trung"}
                job={"Intern AI Engineer"}
                dateStart={"11/2021"}
                dateEnd={"02/2022"}
                content={`Learn more from machine learning, practice exercises related to machine 
                learning and advanced mathematics in machine learning. Have experience in data analysis 
                and building machine learning models.`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
