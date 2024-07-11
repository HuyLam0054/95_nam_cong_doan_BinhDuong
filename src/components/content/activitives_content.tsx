"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { EventCard } from "../common/cards/event_card";

export interface IActivitives {}

export function Activitives(props: IActivitives) {
  return (
    <>
      <motion.div
        className="py-8 px-4 mx-auto max-w-screen-xl"
        initial="hidden"
        animate="visible"
      >
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400 pb-10 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          <span>Hoạt động chào mừng</span>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <EventCard
            type={"event"}
            name={
              "Giải bóng đá nhằm góp phần vào chuỗi sự kiện chào mừng kỷ niệm 95 năm Ngày thành lập Công đoàn Việt Nam (28/7/1929 - 28/7/2024)"
            }
            delay={0.5}
            img={"/pictures/events/bongda.jpg"}
            description={`Ngày 7/7, Liên đoàn Lao động (LĐLĐ) tỉnh Bình Dương đã tổ chức khai mạc Giải Bóng đá nam - nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024.
              Tham dự và cổ vũ cho Giải thi đấu có ông Huỳnh Tự Trọng - Phó Chánh Văn phòng UBND tỉnh Bình Dương, bà Nguyễn Kim Loan - Chủ tịch LĐLĐ tỉnh Bình Dương, 
              ông Nguyễn Tấn Đạt - Phó Chủ tịch LĐLĐ tỉnh Bình Dương, ông Lưu Thế Thuận - Trưởng Ban Tuyên giáo - Nữ công LĐLĐ tỉnh Bình Dương cùng đại diện Công đoàn 
              các cấp cơ sở và đại diện các ban ngành đoàn thể.`}
          />
          <EventCard
            type={"Event"}
            name={
              "Giải bóng đá nhằm góp phần vào chuỗi sự kiện chào mừng kỷ niệm 95 năm Ngày thành lập Công đoàn Việt Nam (28/7/1929 - 28/7/2024)"
            }
            delay={0.8}
            img={"/pictures/events/bongda.jpg"}
            description={`Ngày 7/7, Liên đoàn Lao động (LĐLĐ) tỉnh Bình Dương đã tổ chức khai mạc Giải Bóng đá nam - nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024.
              Tham dự và cổ vũ cho Giải thi đấu có ông Huỳnh Tự Trọng - Phó Chánh Văn phòng UBND tỉnh Bình Dương, bà Nguyễn Kim Loan - Chủ tịch LĐLĐ tỉnh Bình Dương, 
              ông Nguyễn Tấn Đạt - Phó Chủ tịch LĐLĐ tỉnh Bình Dương, ông Lưu Thế Thuận - Trưởng Ban Tuyên giáo - Nữ công LĐLĐ tỉnh Bình Dương cùng đại diện Công đoàn 
              các cấp cơ sở và đại diện các ban ngành đoàn thể.`}
          />
          <EventCard
            type={"Event"}
            name={
              "Giải bóng đá nhằm góp phần vào chuỗi sự kiện chào mừng kỷ niệm 95 năm Ngày thành lập Công đoàn Việt Nam (28/7/1929 - 28/7/2024)"
            }
            delay={1.2}
            img={"/pictures/events/bongda.jpg"}
            description={`Ngày 7/7, Liên đoàn Lao động (LĐLĐ) tỉnh Bình Dương đã tổ chức khai mạc Giải Bóng đá nam - nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024.
              Tham dự và cổ vũ cho Giải thi đấu có ông Huỳnh Tự Trọng - Phó Chánh Văn phòng UBND tỉnh Bình Dương, bà Nguyễn Kim Loan - Chủ tịch LĐLĐ tỉnh Bình Dương, 
              ông Nguyễn Tấn Đạt - Phó Chủ tịch LĐLĐ tỉnh Bình Dương, ông Lưu Thế Thuận - Trưởng Ban Tuyên giáo - Nữ công LĐLĐ tỉnh Bình Dương cùng đại diện Công đoàn 
              các cấp cơ sở và đại diện các ban ngành đoàn thể.`}
          />
          <EventCard
            type={"Event"}
            name={
              "Giải bóng đá nhằm góp phần vào chuỗi sự kiện chào mừng kỷ niệm 95 năm Ngày thành lập Công đoàn Việt Nam (28/7/1929 - 28/7/2024)"
            }
            delay={1.5}
            img={"/pictures/events/bongda.jpg"}
            description={`Ngày 7/7, Liên đoàn Lao động (LĐLĐ) tỉnh Bình Dương đã tổ chức khai mạc Giải Bóng đá nam - nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024.
              Tham dự và cổ vũ cho Giải thi đấu có ông Huỳnh Tự Trọng - Phó Chánh Văn phòng UBND tỉnh Bình Dương, bà Nguyễn Kim Loan - Chủ tịch LĐLĐ tỉnh Bình Dương, 
              ông Nguyễn Tấn Đạt - Phó Chủ tịch LĐLĐ tỉnh Bình Dương, ông Lưu Thế Thuận - Trưởng Ban Tuyên giáo - Nữ công LĐLĐ tỉnh Bình Dương cùng đại diện Công đoàn 
              các cấp cơ sở và đại diện các ban ngành đoàn thể.`}
          />
        </div>
      </motion.div>
    </>
  );
}
