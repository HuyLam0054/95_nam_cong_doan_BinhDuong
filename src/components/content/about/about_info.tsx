"use client";
import { NameCard } from "@/components/common/cards/name_card";
import React from "react";
import { LeaderTimeline } from "@/components/common/timelines/leader_timeline";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-900 mt-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl">
        <h2 className="text-3xl tracking-tight font-extrabold text-center mb-10 uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-blue-600">
          Liên đoàn Lao động tỉnh Bình Dương
        </h2>
        {/* chủ tịch */}
        <NameCard
          position={``}
          name={`Bà Nguyễn Kim Loan`}
          img_add={`/pictures/lanhdao/ct_nkl.jpg`}
          description={`Ủy viên Đoàn Chủ tịch Tổng Liên đoàn Lao động Việt Nam khóa XIII, Tỉnh ủy viên, Chủ tịch, Bí thư Đảng đoàn, Bí thư Đảng uỷ Liên đoàn Lao động tỉnh Bình Dương`}
        />

        {/* phó chủ tịch */}
        <div className="grid md:grid-cols-4 gap-3 mt-10">
          <NameCard
            position={``}
            name={`Bà Nguyễn Hoàng Bảo Trân`}
            img_add={`/pictures/lanhdao/pct_nhbt.jpg`}
            description={`Đại biểu Quốc hội khóa XV, phó Chủ tịch thường trực, phó Bí thư Đảng đoàn, phó Bí thư Đảng uỷ Liên đoàn Lao động tỉnh Bình Dương`}
          />
          <NameCard
            position={``}
            name={`Bà Ong Thuỵ Hoàng Mai`}
            img_add={`/pictures/lanhdao/pct_othm.jpg`}
            description={`Phó Chủ tịch Liên đoàn Lao động tỉnh Bình Dương`}
          />
          <NameCard
            position={``}
            name={`Tiến sĩ Đặng Trung Dũng`}
            img_add={`/pictures/lanhdao/pct_dtd.jpg`}
            description={`Uỷ viên ban chấp hành Tổng Liên đoàn Lao động Việt Nam, Phó Chủ tịch Liên đoàn Lao động tỉnh Bình Dương`}
          />
          <NameCard
            position={``}
            name={`Ông Nguyễn Tấn Đạt`}
            img_add={`/pictures/lanhdao/pct_ntd.jpg`}
            description={`Phó Chủ tịch Liên đoàn Lao động tỉnh Bình Dương`}
          />
        </div>
      </div>
    </section>
  );
}
