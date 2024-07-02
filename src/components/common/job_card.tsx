"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { IoSparklesOutline } from "react-icons/io5";

export interface IJobCardProps {
  name: String;
}

export function JobCard(props: IJobCardProps) {
  return (
    <motion.div
      variants={slideInFromTop(0)}
      className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-4 md:mb-0 mr-2"
    >
      {/* <IoSparklesOutline className="text-[#5133ac] dark:text-[#b49bff] mr-[10px] w-2 h-2 md:h-5 md:w-5" /> */}
      <h1 className="Welcome-text text-[10px] md:text-[15px] text-[#532cc7]">
        {props.name}
      </h1>
    </motion.div>
  );
}
