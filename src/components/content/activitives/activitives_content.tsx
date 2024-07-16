"use client";
import * as React from "react";
import { motion } from "framer-motion";

import { EventCard } from "../../common/cards/event_card";

export interface IActivitives {}

export function Activitives(props: IActivitives) {
  return (
    <>
      <motion.div
        className="py-8 px-4 mx-auto max-w-screen-2xl"
        initial="hidden"
        animate="visible"
      >
        <div className="text-transparent uppercase bg-clip-text bg-gradient-to-r from-red-600 to-orange-400 pb-10 text-2xl lg:text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          <span>Các Hoạt động chào mừng</span>
        </div>
        <div className="grid lg:grid-cols-4 gap-8">
          <EventCard
            type={"event"}
            name={"Thực hiện việc tuyên truyền cổ động trực quan"}
            img={
              "https://storage-vnportal.vnpt.vn/bdg-khdn/2812/TINTUC2024/giai-bong-da-2024.hinh-anh-thuan.jpg"
            }
            description={`Ngày 02/7, Liên đoàn Lao động tỉnh tổ chức họp trưởng đoàn các đội tham gia Giải Bóng đá Nam - Nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024`}
          />
          <EventCard
            type={"Event"}
            name={`Tổ chức hội thi "tiếng hát người lao động" năm 2024`}
            img={
              "https://storage-vnportal.vnpt.vn/bdg-khdn/2812/TINTUC2024/hinh-gia-dinh.thao-nguyen-tang-qua.jpg"
            }
            description={`Ngày 02/7, Liên đoàn Lao động tỉnh tổ chức họp trưởng đoàn các đội tham gia Giải Bóng đá Nam - Nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024`}
          />

          <EventCard
            type={"Event"}
            name={`Tổ chức Giải bơi lội công nhân viên chức lao động năm 2024`}
            img={"/pictures/events/bongda.jpg"}
            description={`Ngày 02/7, Liên đoàn Lao động tỉnh tổ chức họp trưởng đoàn các đội tham gia Giải Bóng đá Nam - Nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024`}
          />
          <EventCard
            type={"Event"}
            name={`tổ chức các chương trình văn nghệ phục vụ công nhân lao động`}
            img={
              "https://storage-vnportal.vnpt.vn/bdg-khdn/2812/TINTUC2024/z5618646257043_bbf4ba4bdb97e8e031412642ff4d5865.jpg"
            }
            description={`Ngày 02/7, Liên đoàn Lao động tỉnh tổ chức họp trưởng đoàn các đội tham gia Giải Bóng đá Nam - Nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024`}
          />
          <EventCard
            type={"Event"}
            name={`tổ chức hội thao các công đoàn cơ sở thuộc liên đoàn lao động tinh năm 2024`}
            img={
              "https://storage-vnportal.vnpt.vn/bdg-khdn/2812/TINTUC2024/z5618646257043_bbf4ba4bdb97e8e031412642ff4d5865.jpg"
            }
            description={`Ngày 02/7, Liên đoàn Lao động tỉnh tổ chức họp trưởng đoàn các đội tham gia Giải Bóng đá Nam - Nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024`}
          />
          <EventCard
            type={"Event"}
            name={`tổ chức các hoạt động ngày gia đình việt nam (28/6)`}
            img={
              "https://storage-vnportal.vnpt.vn/bdg-khdn/2812/TINTUC2024/z5618646257043_bbf4ba4bdb97e8e031412642ff4d5865.jpg"
            }
            description={`Ngày 02/7, Liên đoàn Lao động tỉnh tổ chức họp trưởng đoàn các đội tham gia Giải Bóng đá Nam - Nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024`}
          />
          <EventCard
            type={"Event"}
            name={`Tổ chức Giải bóng đá công nhân viên chức lao động tỉnh bình dương năm 2024`}
            img={"/pictures/events/bongda.jpg"}
            description={`Ngày 02/7, Liên đoàn Lao động tỉnh tổ chức họp trưởng đoàn các đội tham gia Giải Bóng đá Nam - Nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024`}
          />
        </div>
      </motion.div>
    </>
  );
}
