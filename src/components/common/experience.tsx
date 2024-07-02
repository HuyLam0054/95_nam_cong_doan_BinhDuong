import * as React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { IoCalendarOutline } from "react-icons/io5";

export interface IExperienceProps {
  name: String;
  job: String;
  dateStart: String;
  dateEnd: String;
  content: String;
}

export function Experience(props: IExperienceProps) {
  return (
    <div className="mb-5">
      <motion.p
        variants={slideInFromLeft(1.5)}
        className="text-2xl text-gray-700 dark:text-gray-300 mb-5 max-w-[600px]"
      >
        <span className="text-gray-800 dark:text-gray-50 font-bold">
          {props.name}
        </span>
      </motion.p>
      <motion.p
        variants={slideInFromLeft(1.7)}
        className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]"
      >
        <span className="text-gray-800 dark:text-gray-50 flex flex-row">
          {props.job}
        </span>
      </motion.p>
      <motion.p
        variants={slideInFromLeft(1.9)}
        className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]"
      >
        <span className="text-gray-800 dark:text-gray-50 flex flex-row">
          <IoCalendarOutline className="mr-2 w-4 h-4" />
          {props.dateStart} - {props.dateEnd}
        </span>
      </motion.p>
      <motion.p
        variants={slideInFromLeft(2.1)}
        className="text-sm text-gray-700 dark:text-gray-300 mb-2 max-w-[600px]"
      >
        <span className="text-gray-800 dark:text-gray-50 flex flex-row">
          {props.content}
        </span>
      </motion.p>
    </div>
  );
}
