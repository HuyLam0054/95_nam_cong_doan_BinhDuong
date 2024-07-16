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
            <div className="flex flex-row items-center justify-center w-full z-[20]">
              <div className="h-full w-full flex flex-col justify-center m-auto text-start">
                <div className="flex flex-row justify-start flex-wrap"></div>

                <div className="flex flex-col gap-6 mt-5 lg:my-10 font-bold text-gray-800 dark:text-white max-w-[600px] w-auto h-auto">
                  <span>
                    <p className="text-3xl lg:text-4xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700 mb-3">
                      {`Nhiệt liệt chào mừng 95 năm Ngày Thành lập Công đoàn Việt Nam`}
                    </p>
                    <p className="text-1xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-orange-400">
                      (28/7/1929 - 28/7/2024)
                    </p>
                  </span>
                </div>
                <div className="w-full h-full justify-center items-center flex lg:hidden mt-3">
                  <Image
                    src="/banner1.jpg"
                    alt="work icons"
                    height={450}
                    width={450}
                    className="rounded-full my-4"
                  />
                </div>
                <p className="text-base lg:text-xl text-gray-700 dark:text-gray-300 mb-5 max-w-[600px]">
                  Kỷ niệm 95 năm Ngày thành lập Công đoàn Việt Nam là sự kiện
                  chính trị quan trọng đánh dấu bước phát triển mới của phong
                  trào công nhân, viên chức, lao động, của tổ chức Công đoàn
                  Việt Nam; khẳng định vai trò, sứ mệnh lịch sử của giai cấp
                  công nhân, truyền thống vẻ vang và những đóng góp to lớn của
                  giai cấp công nhân, tổ chức Công đoàn Việt Nam trong các giai
                  đoạn cách mạng của đất nước dưới sự lãnh đạo của Đảng Cộng sản
                  Việt Nam. Đây là dịp để cán bộ, đoàn viên, CNVCLĐ cùng nhân
                  dân cả nước ôn lại, phát huy truyền thống vẻ vang của giai cấp
                  công nhân và tổ chức Công đoàn Việt Nam; ra sức thi đua, quyết
                  tâm thực hiện thắng lợi mục tiêu dân giàu, nước mạnh, dân chủ,
                  công bằng, văn minh.
                  <DetailPopover
                    name={`Nguyễn Đức Cảnh`}
                    date={`(1908-1932)`}
                    detail={`Ông là một nhà cách mạng Việt Nam, một trong những người sáng lập Đảng Cộng sản Việt Nam. Sinh tại Thái Bình, ông tham gia Hội Việt Nam Cách mạng Thanh niên và sau đó học tập tại Quảng Châu, Trung Quốc. Ông đóng vai trò quan trọng trong phong trào công nhân ở miền Bắc Việt Nam, tổ chức nhiều cuộc đình công và biểu tình. Năm 1931, ông bị thực dân Pháp bắt và bị xử bắn vào năm 1932. Nguyễn Đức Cảnh được nhớ đến như một biểu tượng của tinh thần cách mạng và lòng yêu nước, với nhiều địa điểm tại Việt Nam mang tên ông để tôn vinh những đóng góp của ông.`}
                    img_url={`https://baotanglichsu.vn/DataFiles/Uploaded/image/cong%20hoi%20do/anh2.jpg`}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-2 hidden lg:col-span-2 lg:flex">
            <div className="flex flex-row items-center justify-center w-full z-[20]">
              <div className="h-full w-full flex flex-col justify-center m-auto text-start">
                <div className="flex flex-row justify-start flex-wrap">
                  <div className="w-full h-full flex justify-center items-center">
                    <Image
                      src="/banner1.jpg"
                      alt="banner"
                      height={650}
                      width={650}
                      className="h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
