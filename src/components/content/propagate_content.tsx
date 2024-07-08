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
          Bộ Banner và Standee tuyên truyền
        </motion.h2>
        {/* Banner */}
        <div className="grid md:grid-cols-1 gap-2">
          <BannerCard
            type={"Banner"}
            name={""}
            delay={0.3}
            img={"/pictures/Banner/banner1.png"}
            description={``}
          />
          <BannerCard
            type={"Banner"}
            name={""}
            delay={0.5}
            img={"/pictures/Banner/banner2.png"}
            description={``}
          />
          {/* <BannerCard
            type={"Banner"}
            name={""}
            delay={0.8}
            img={"/pictures/Banner/banner3.png"}
            description={``}
          />
          <BannerCard
            type={"Banner"}
            name={""}
            delay={1.1}
            img={"/pictures/Banner/banner4.png"}
            description={``}
          />
          <BannerCard
            type={"Banner"}
            name={""}
            delay={1.5}
            img={"/pictures/Banner/banner5.png"}
            description={``}
          />
          <BannerCard
            type={"Banner"}
            name={""}
            delay={1.8}
            img={"/pictures/Banner/banner6.png"}
            description={``}
          />
          <BannerCard
            type={"Banner"}
            name={""}
            delay={2.1}
            img={"/pictures/Banner/banner7.png"}
            description={``}
          />
          <BannerCard
            type={"Banner"}
            name={""}
            delay={2.5}
            img={"/pictures/Banner/banner8.png"}
            description={``}
          /> */}
        </div>
        {/* Biểu ngữ treo đứng */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
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
          {/* <StandeeCard
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
          /> */}
        </div>
      </motion.div>
    </>
  );
}
