"use client";
import * as React from "react";
import { motion } from "framer-motion";

import { EventCard } from "../../common/cards/event_card";

export interface IActivitives {}

export function Activitives(props: IActivitives) {
  return (
    <>
      <motion.div
        className="py-8 px-4 mx-auto max-w-screen-xl"
        initial="hidden"
        animate="visible"
      >
        <div className="text-transparent uppercase bg-clip-text bg-gradient-to-r from-red-600 to-orange-400 pb-10 text-2xl lg:text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          <span>Các Hoạt động chào mừng</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <EventCard
            type={"event"}
            name={"Thực hiện việc tuyên truyền cổ động trực quan"}
            img={
              "https://storage-vnportal.vnpt.vn/bdg-khdn/2812/TINTUC2024/giai-bong-da-2024.hinh-anh-thuan.jpg"
            }
            description={`Ngày 02/7, Liên đoàn Lao động tỉnh tổ chức họp trưởng đoàn các đội tham gia Giải Bóng đá Nam - Nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024 (Giải Bóng đá). Tham dự giải  có 24 đội bóng đá nam và 13 đội bóng đá nữ đại diện 16 công đoàn cấp trên cơ sở và công đoàn cơ sở trực thuộc Liên đoàn Lao động (LĐLĐ) tỉnh và công đoàn ngành Trung ương trên địa bàn. Trong đó các cầu thủ đều là cán bộ, công chức, viên chức, công nhân lao động.`}
          />
          <EventCard
            type={"Event"}
            name={`Tổ chức hội thi "tiếng hát người lao động" năm 2024`}
            img={
              "https://storage-vnportal.vnpt.vn/bdg-khdn/2812/TINTUC2024/hinh-gia-dinh.thao-nguyen-tang-qua.jpg"
            }
            description={`Với  chủ đề của Ngày Gia đình Việt Nam là “Gia đình hạnh phúc - Quốc gia thịnh vượng” được tiếp nối từ năm 2023, mục đích khi Trung ương tiếp tục lấy chủ đề này là xác định rõ thông điệp: “Xây dựng gia đình hạnh phúc chính là tạo nền tảng để xây dựng xã hội hạnh phúc, quốc gia hạnh phúc”! Cũng chính vì ý nghĩa sâu sắc này, Ban Thường vụ Liên đoàn Lao động tỉnh cùng Ban Thường vụ Hội Liên hiệp Phụ nữ tỉnh phối hợp  tổ chức Chương trình biểu dương 100 gia đình đoàn viên Công đoàn, hội viên Phụ nữ là những gương điển hình tiêu biểu, nuôi dạy con ngoan, học giỏi, xây dựng gia đình no ấm, tiến bộ, hạnh phúc.`}
          />

          <EventCard
            type={"Event"}
            name={`Tổ chức Giải bơi lội công nhân viên chức lao động năm 2024`}
            img={"/pictures/events/bongda.jpg"}
            description={`Ngày 7/7, Liên đoàn Lao động (LĐLĐ) tỉnh Bình Dương đã tổ chức khai mạc Giải Bóng đá nam - nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024.
              Tham dự và cổ vũ cho Giải thi đấu có ông Huỳnh Tự Trọng - Phó Chánh Văn phòng UBND tỉnh Bình Dương, bà Nguyễn Kim Loan - Chủ tịch LĐLĐ tỉnh Bình Dương, 
              ông Nguyễn Tấn Đạt - Phó Chủ tịch LĐLĐ tỉnh Bình Dương, ông Lưu Thế Thuận - Trưởng Ban Tuyên giáo - Nữ công LĐLĐ tỉnh Bình Dương cùng đại diện Công đoàn 
              các cấp cơ sở và đại diện các ban ngành đoàn thể.`}
          />
          <EventCard
            type={"Event"}
            name={`tổ chức các chương trình văn nghệ phục vụ công nhân lao động`}
            img={
              "https://storage-vnportal.vnpt.vn/bdg-khdn/2812/TINTUC2024/z5618646257043_bbf4ba4bdb97e8e031412642ff4d5865.jpg"
            }
            description={`Ngày 7/7, Liên đoàn Lao động (LĐLĐ) tỉnh Bình Dương đã tổ chức khai mạc Giải Bóng đá nam - nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024.
              Tham dự và cổ vũ cho Giải thi đấu có ông Huỳnh Tự Trọng - Phó Chánh Văn phòng UBND tỉnh Bình Dương, bà Nguyễn Kim Loan - Chủ tịch LĐLĐ tỉnh Bình Dương, 
              ông Nguyễn Tấn Đạt - Phó Chủ tịch LĐLĐ tỉnh Bình Dương, ông Lưu Thế Thuận - Trưởng Ban Tuyên giáo - Nữ công LĐLĐ tỉnh Bình Dương cùng đại diện Công đoàn 
              các cấp cơ sở và đại diện các ban ngành đoàn thể.`}
          />
          <EventCard
            type={"Event"}
            name={`tổ chức hội thao các công đoàn cơ sở thuộc liên đoàn lao động tinh năm 2024`}
            img={
              "https://storage-vnportal.vnpt.vn/bdg-khdn/2812/TINTUC2024/z5618646257043_bbf4ba4bdb97e8e031412642ff4d5865.jpg"
            }
            description={`Ngày 7/7, Liên đoàn Lao động (LĐLĐ) tỉnh Bình Dương đã tổ chức khai mạc Giải Bóng đá nam - nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024.
              Tham dự và cổ vũ cho Giải thi đấu có ông Huỳnh Tự Trọng - Phó Chánh Văn phòng UBND tỉnh Bình Dương, bà Nguyễn Kim Loan - Chủ tịch LĐLĐ tỉnh Bình Dương, 
              ông Nguyễn Tấn Đạt - Phó Chủ tịch LĐLĐ tỉnh Bình Dương, ông Lưu Thế Thuận - Trưởng Ban Tuyên giáo - Nữ công LĐLĐ tỉnh Bình Dương cùng đại diện Công đoàn 
              các cấp cơ sở và đại diện các ban ngành đoàn thể.`}
          />
          <EventCard
            type={"Event"}
            name={`tổ chức các hoạt động ngày gia đình việt nam (28/6)`}
            img={
              "https://storage-vnportal.vnpt.vn/bdg-khdn/2812/TINTUC2024/z5618646257043_bbf4ba4bdb97e8e031412642ff4d5865.jpg"
            }
            description={`Ngày 7/7, Liên đoàn Lao động (LĐLĐ) tỉnh Bình Dương đã tổ chức khai mạc Giải Bóng đá nam - nữ công nhân, viên chức, lao động tỉnh Bình Dương năm 2024.
              Tham dự và cổ vũ cho Giải thi đấu có ông Huỳnh Tự Trọng - Phó Chánh Văn phòng UBND tỉnh Bình Dương, bà Nguyễn Kim Loan - Chủ tịch LĐLĐ tỉnh Bình Dương, 
              ông Nguyễn Tấn Đạt - Phó Chủ tịch LĐLĐ tỉnh Bình Dương, ông Lưu Thế Thuận - Trưởng Ban Tuyên giáo - Nữ công LĐLĐ tỉnh Bình Dương cùng đại diện Công đoàn 
              các cấp cơ sở và đại diện các ban ngành đoàn thể.`}
          />
          <EventCard
            type={"Event"}
            name={`Tổ chức Giải bóng đá công nhân viên chức lao động tỉnh bình dương năm 2024`}
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
