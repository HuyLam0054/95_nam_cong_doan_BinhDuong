/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import * as React from "react";

export interface IProjectCardProps {
  img: string;
  type: String;
  name: String;
  description: String;
  delay: number;
}

export function ProjectCard(props: IProjectCardProps) {
  return (
    <motion.div
      variants={slideInFromTop(props.delay)}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <Image
        src={props.img}
        alt={props.img}
        width={1000}
        height={1000}
        className="w-full object-contain max-h-[550px]"
      />

      <div className="relative p-4">
        <h1 className="text-gray-900 dark:text-white text-2xl font-semibold ">
          {props.name}
        </h1>
        <p className="text-gray-900 dark:text-white mt-2">
          {props.description}
        </p>
      </div>
    </motion.div>
  );
}
