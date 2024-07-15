"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import Image from "next/image";

import { DetailPopover } from "../../common/popovers/detail_popover";

const HeroContent = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="pt-12 px-1 mx-auto max-w-screen-xl">
        <div className="grid w-full lg:grid-cols-5 gap-1">
          <div className="bg-white dark:bg-gray-900 p-8 lg:p-12 lg:col-span-3">
            <motion.div
              initial="hidden"
              animate="visible"
              className="flex flex-row items-center justify-center w-full z-[20]"
            >
              <div className="h-full w-full flex flex-col justify-center m-auto text-start">
                <div className="flex flex-row justify-start flex-wrap"></div>

                <motion.div
                  variants={slideInFromLeft(0.5)}
                  className="flex flex-col gap-6 mt-5 lg:my-10 font-bold text-gray-800 dark:text-white max-w-[600px] w-auto h-auto"
                >
                  <span>
                    <p className="text-3xl lg:text-4xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700 mb-3">
                      {`Nhiệt liệt chào mừng 95 năm Ngày Thành lập Công đoàn Việt Nam`}
                    </p>
                    <p className="text-1xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-orange-400">
                      (28/7/1929 - 28/7/2024)
                    </p>
                  </span>
                </motion.div>
                <motion.div
                  variants={slideInFromTop(0)}
                  className="w-full h-full justify-center items-center flex lg:hidden mt-3"
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
                  className="text-base lg:text-xl text-gray-700 dark:text-gray-300 mb-5 max-w-[600px]"
                >
                  Ngày 28 tháng 7 năm 1929, Tổng Công hội đỏ Bắc Kỳ, tiền thân
                  của tổ chức Công đoàn Việt Nam chính thức được thành lập, đánh
                  dấu bước ngoặt lớn, khẳng định sự lớn mạnh của phong trào công
                  nhân và hoạt động công đoàn cách mạng Việt Nam; là hạt nhân{" "}
                  <DetailPopover
                    name={`Đồng chí Nguyễn Đức Cảnh`}
                    date={`(1908-1932)`}
                    detail={`Ông là một nhà cách mạng Việt Nam, một trong những người sáng lập Đảng Cộng sản Việt Nam. Sinh tại Thái Bình, ông tham gia Hội Việt Nam Cách mạng Thanh niên và sau đó học tập tại Quảng Châu, Trung Quốc. Ông đóng vai trò quan trọng trong phong trào công nhân ở miền Bắc Việt Nam, tổ chức nhiều cuộc đình công và biểu tình. Năm 1931, ông bị thực dân Pháp bắt và bị xử bắn vào năm 1932. Nguyễn Đức Cảnh được nhớ đến như một biểu tượng của tinh thần cách mạng và lòng yêu nước, với nhiều địa điểm tại Việt Nam mang tên ông để tôn vinh những đóng góp của ông.`}
                    img_url={`https://baotanglichsu.vn/DataFiles/Uploaded/image/cong%20hoi%20do/anh2.jpg`}
                  />{" "}
                  vận động, tập hợp giai cấp công nhân đi dưới ngọn cờ cách mạng
                  vinh quang của Đảng Cộng sản Việt Nam.Tổ chức Công đoàn Việt
                  Nam đã có những đóng góp quan trọng vào công cuộc đấu tranh
                  giành độc lập dân tộc, giải phóng giai cấp và trong công cuộc
                  xây dựng và phát triển đất nước.
                </motion.p>
              </div>
            </motion.div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-2 hidden lg:col-span-2 lg:flex">
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
