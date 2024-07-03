"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import { JobCard } from "../common/job_card";
import { FaDownload } from "react-icons/fa";

const HeroContent = () => {
  return (
    <section className="bg-white dark:bg-gray-900 pt-8">
      <div className="py-8 px-1 mx-auto max-w-screen-xl">
        <div className="grid w-full md:grid-cols-5 gap-1">
          <div className="bg-white dark:bg-gray-900 p-8 md:p-12 md:col-span-3">
            <motion.div
              initial="hidden"
              animate="visible"
              className="flex flex-row items-center justify-center w-full z-[20]"
            >
              <div className="h-full w-full flex flex-col justify-center m-auto text-start">
                <div className="flex flex-row justify-start flex-wrap">
                  {/* <JobCard
                    name={`Kỷ niệm 95 năm Ngày thành lập Công đoàn Việt Nam`}
                  /> */}
                </div>

                <motion.div
                  variants={slideInFromLeft(0.5)}
                  className="flex flex-col gap-6 mt-5 md:my-10 font-bold text-gray-800 dark:text-white max-w-[600px] w-auto h-auto"
                >
                  <span>
                    <p className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3">
                      Kỷ niệm 95 năm Ngày Thành lập Công đoàn Việt Nam
                    </p>
                    <p className="text-1xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      26/7/1929 - 26/7/2024
                    </p>
                  </span>
                </motion.div>
                <motion.div
                  variants={slideInFromTop(0)}
                  className="w-full h-full justify-center items-center flex md:hidden my-3"
                >
                  <Image
                    src="/banner1.jpg"
                    alt="work icons"
                    height={450}
                    width={450}
                    className="rounded-full my-4"
                  />
                </motion.div>
                <motion.p
                  variants={slideInFromLeft(0.8)}
                  className="text-sm md:text-lg text-gray-700 dark:text-gray-300 mb-5 max-w-[600px]"
                >
                  95 năm trước, ngày 28 tháng 7 năm 1929, Tổng Công hội đỏ Bắc
                  Kỳ, tiền thân của tổ chức Công đoàn Việt Nam chính thức được
                  thành lập, đánh dấu bước ngoặt lớn, khẳng định sự lớn mạnh của
                  phong trào công nhân và hoạt động công đoàn cách mạng Việt
                  Nam; là hạt nhân vận động, tập hợp giai cấp công nhân đi dưới
                  ngọn cờ cách mạng vinh quang của Đảng Cộng sản Việt Nam.Tổ
                  chức Công đoàn Việt Nam đã có những đóng góp quan trọng vào
                  công cuộc đấu tranh giành độc lập dân tộc, giải phóng giai cấp
                  và trong công cuộc xây dựng và phát triển đất nước.
                </motion.p>
              </div>
            </motion.div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-2 hidden md:col-span-2 md:flex">
            <motion.div
              initial="hidden"
              animate="visible"
              className="flex flex-row items-center justify-center w-full z-[20]"
            >
              <div className="h-full w-full flex flex-col justify-center m-auto text-start">
                <div className="flex flex-row justify-start flex-wrap">
                  <motion.div
                    variants={slideInFromLeft(1.2)}
                    className="w-full h-full flex justify-center items-center"
                  >
                    <Image
                      src="/banner1.jpg"
                      alt="banner"
                      height={650}
                      width={650}
                      className="h-full"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
