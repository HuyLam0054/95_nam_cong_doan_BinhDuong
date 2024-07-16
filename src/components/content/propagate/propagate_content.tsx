"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { BannerCard } from "../../common/cards/banner_card";
import { StandeeCard } from "../../common/cards/standee_card";
import { DownloadButton } from "../../common/buttons/download_button";

export interface IPropagates {}

export function Propagates(props: IPropagates) {
  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400 pb-10 text-2xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
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
        <div className="grid lg:grid-cols-1 gap-2">
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
            delay={0.6}
            img={"/pictures/Banner/banner1.png"}
            description={``}
          />
        </div>
      </div>
    </>
  );
}
