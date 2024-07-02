import * as React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { GiAchievement } from "react-icons/gi";

export interface IAchievementProps {
  name: String;
  type: String;
  date: String;
  description: String;
}

export function Achievement(props: IAchievementProps) {
  return (
    <div className="mb-5">
      <motion.p
        variants={slideInFromLeft(1.5)}
        className="text-lg text-gray-700 dark:text-gray-300 mb-2 max-w-[600px] mt-5"
      >
        <span className="text-gray-800 dark:text-gray-50 font-bold flex flex-row">
          <GiAchievement className="mr-2 w-6 h-6" />
          {props.name}
        </span>
      </motion.p>
      <motion.p
        variants={slideInFromLeft(1.7)}
        className="text-sm text-gray-700 dark:text-gray-300 my-4 max-w-[600px]"
      >
        <span className="text-gray-800 dark:text-gray-50 flex flex-row">
          {props.type} {props.date}
        </span>
      </motion.p>
      <motion.p
        variants={slideInFromLeft(2.1)}
        className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]"
      >
        <span className="text-gray-800 dark:text-gray-50 flex flex-row">
          {props.description}
        </span>
      </motion.p>
    </div>
  );
}
