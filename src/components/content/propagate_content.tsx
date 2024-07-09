"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { BannerCard } from "../common/banner_card";
import { StandeeCard } from "../common/standee_card";
import { DownloadButton } from "../common/download_button";

export interface IPropagates {}

export function Propagates(props: IPropagates) {
  return (
    <>
      <motion.div
        className="py-8 px-4 mx-auto max-w-screen-xl"
        initial="hidden"
        animate="visible"
      >
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400 pb-10 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          <span>Bộ Banner và Standee tuyên truyền</span>
          <DownloadButton
            url_download={
              "/download/Bộ nhận diện 95 năm Công đoàn Việt Nam.zip"
            }
            file_name={"Bộ nhận diện 95 năm Công đoàn Việt Nam.zip"}
            align={"text-center"}
          />
        </div>

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
        </div>
        {/* Biểu ngữ treo đứng */}
        <div className="grid grid-cols-4 gap-2 mt-2">
          <StandeeCard
            type={"Standee"}
            name={""}
            delay={0.7}
            img={"/pictures/Standee/Standee FN-03.png"}
            description={``}
          />
          <StandeeCard
            type={"Standee"}
            name={""}
            delay={0.9}
            img={"/pictures/Standee/Standee FN-04.png"}
            description={``}
          />
          <StandeeCard
            type={"Standee"}
            name={""}
            delay={1.1}
            img={"/pictures/Standee/Standee FN-05.png"}
            description={``}
          />
          <StandeeCard
            type={"Standee"}
            name={""}
            delay={1.3}
            img={"/pictures/Standee/Standee FN-06.png"}
            description={``}
          />
        </div>
      </motion.div>
    </>
  );
}
