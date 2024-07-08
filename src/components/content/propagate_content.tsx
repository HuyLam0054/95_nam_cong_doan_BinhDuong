"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { BannerCard } from "../common/banner_card";
import { ProjectCard } from "../common/project_card";

export interface IPropagates {}

export function Propagates(props: IPropagates) {
  return (
    <>
      <motion.div
        className="py-8 px-4 mx-auto max-w-screen-xl md:py-16"
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="pb-10 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
          variants={slideInFromTop(0)}
        >
          Biểu ngữ tuyên truyền
        </motion.h2>
        {/* Biểu ngữ treo dài */}
        <div className="grid md:grid-cols-1 gap-2">
          <BannerCard
            type={"Banner"}
            name={""}
            delay={0.3}
            img={"/pictures/banner/banner1.png"}
            description={``}
          />
          <BannerCard
            type={"Banner"}
            name={""}
            delay={0.5}
            img={"/pictures/banner/banner2.png"}
            description={``}
          />
          <BannerCard
            type={"Banner"}
            name={""}
            delay={0.8}
            img={"/pictures/banner/banner3.png"}
            description={``}
          />
          <BannerCard
            type={"Banner"}
            name={""}
            delay={1.1}
            img={"/pictures/banner/banner4.png"}
            description={``}
          />
          <BannerCard
            type={"Banner"}
            name={""}
            delay={1.5}
            img={"/pictures/banner/banner5.png"}
            description={``}
          />
          <BannerCard
            type={"Banner"}
            name={""}
            delay={1.8}
            img={"/pictures/banner/banner6.png"}
            description={``}
          />
          <BannerCard
            type={"Banner"}
            name={""}
            delay={2.1}
            img={"/pictures/banner/banner7.png"}
            description={``}
          />
          <BannerCard
            type={"Banner"}
            name={""}
            delay={2.5}
            img={"/pictures/banner/banner8.png"}
            description={``}
          />
        </div>
        {/* Biểu ngữ treo đứng */}
        <div className="grid md:grid-cols-4 gap-2 mt-8">
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
