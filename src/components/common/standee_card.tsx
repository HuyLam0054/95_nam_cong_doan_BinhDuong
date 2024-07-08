/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import * as React from "react";

export interface IStandeeCardProps {
  img: string;
  type: String;
  name: String;
  description: String;
  delay: number;
}

export function StandeeCard(props: IStandeeCardProps) {
  return (
    <motion.div
      variants={slideInFromTop(props.delay)}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <img src={props.img} alt={props.img} className="w-full h-auto" />

      <div className="relative">
        <h1 className="text-gray-900 dark:text-white text-2xl font-semibold ">
          {props.name}
        </h1>
        <p className="text-gray-900 dark:text-white">{props.description}</p>
      </div>
    </motion.div>
  );
}
