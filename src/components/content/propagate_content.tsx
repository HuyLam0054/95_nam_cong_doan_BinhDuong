"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { BannerCard } from "../common/banner_card";
import { StandeeCard } from "../common/standee_card";

export interface IPropagates {}

export function Propagates(props: IPropagates) {
  return (
    <>
      <motion.div
        className="py-8 px-4 mx-auto max-w-screen-xl md:py-8"
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400 pb-10 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
          variants={slideInFromTop(0)}
        >
          Banner tuyên truyền
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
        <motion.h2
          className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400 py-10 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
          variants={slideInFromTop(0)}
        >
          Standee tuyên truyền
        </motion.h2>
        {/* Biểu ngữ treo đứng */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <StandeeCard
            type={"Standee"}
            name={""}
            delay={0.5}
            img={"/pictures/Standee/Standee FN-01.png"}
            description={``}
          />
          <StandeeCard
            type={"Standee"}
            name={""}
            delay={0.5}
            img={"/pictures/Standee/Standee FN-02.png"}
            description={``}
          />
          <StandeeCard
            type={"Standee"}
            name={""}
            delay={0.5}
            img={"/pictures/Standee/Standee FN-03.png"}
            description={``}
          />
          <StandeeCard
            type={"Standee"}
            name={""}
            delay={0.5}
            img={"/pictures/Standee/Standee FN-04.png"}
            description={``}
          />
          <StandeeCard
            type={"Standee"}
            name={""}
            delay={0.5}
            img={"/pictures/Standee/Standee FN-05.png"}
            description={``}
          />
          <StandeeCard
            type={"Standee"}
            name={""}
            delay={0.5}
            img={"/pictures/Standee/Standee FN-06.png"}
            description={``}
          />
          <StandeeCard
            type={"Standee"}
            name={""}
            delay={0.5}
            img={"/pictures/Standee/Standee FN-07.png"}
            description={``}
          />
          <StandeeCard
            type={"Standee"}
            name={""}
            delay={0.5}
            img={"/pictures/Standee/Standee FN-08.png"}
            description={``}
          />
        </div>
        <motion.h2
          className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400 py-10 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
          variants={slideInFromTop(0)}
        >
          Logo kỷ niệm 95 năm Thành lập Công đoàn
        </motion.h2>
        {/* Biểu ngữ treo đứng */}
        <div className="grid grid-cols-2 gap-2">
          <StandeeCard
            type={"logo"}
            name={""}
            delay={0.5}
            img={"/pictures/Logo95năm/Logo95nam.FN-01.png"}
            description={``}
          />
        </div>
      </motion.div>
    </>
  );
}
