/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import * as React from "react";
import { Test } from "../test";

export interface IBannerCardProps {
  img: string;
  type: String;
  name: String;
  description: String;
  delay: number;
}

export function BannerCard(props: IBannerCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <img src={props.img} alt={props.img} className="w-full" />

      <div className="relative">
        <h1 className="text-gray-900 dark:text-white text-2xl font-semibold ">
          {props.name}
        </h1>
        <p className="text-gray-900 dark:text-white">{props.description}</p>
      </div>
    </div>
  );
}
