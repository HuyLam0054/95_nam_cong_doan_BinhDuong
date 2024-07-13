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
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          <NameCard
            position={`Chủ tịch`}
            name={`Bà Nguyễn Kim Loan`}
            img_add={`/pictures/lanhdao/ct_nkl1.jpg`}
            description={`Ủy viên Đoàn Chủ tịch Tổng Liên đoàn khóa XII, Tỉnh ủy viên, Chủ tịch Liên đoàn Lao động tỉnh Bình Dương`}
          />
          <div className="bg-white dark:bg-gray-900 p-2 hidden md:col-span-2 md:flex">
            <LeaderTimeline />
          </div>
        </div>
        {/* phó chủ tịch */}
        <div className="grid md:grid-cols-4 gap-5 mt-10">
          <NameCard
            position={`Phó Chủ tịch thường trực`}
            name={`Bà Nguyễn Hoàng Bảo Trân`}
            img_add={`/pictures/lanhdao/pct_nhbt.jpg`}
            description={`Ủy viên Đoàn Chủ tịch Tổng Liên đoàn khóa XII, Tỉnh ủy viên, Chủ tịch Liên đoàn Lao động tỉnh Bình Dương`}
          />
          <NameCard
            position={`Phó Chủ tịch`}
            name={`Bà Ong Thị Hoàng Mai`}
            img_add={`/pictures/lanhdao/pct_othm1.jpg`}
            description={`Ủy viên Đoàn Chủ tịch Tổng Liên đoàn khóa XII, Tỉnh ủy viên, Chủ tịch Liên đoàn Lao động tỉnh Bình Dương`}
          />
          <NameCard
            position={`Phó Chủ tịch`}
            name={`Ông Đặng Trung Dũng`}
            img_add={`/pictures/lanhdao/pct_dtd.jpg`}
            description={`Ủy viên Đoàn Chủ tịch Tổng Liên đoàn khóa XII, Tỉnh ủy viên, Chủ tịch Liên đoàn Lao động tỉnh Bình Dương`}
          />
          <NameCard
            position={`Phó Chủ tịch`}
            name={`Ông Nguyễn Tấn Đạt`}
            img_add={`/pictures/lanhdao/pct_ntd.jpg`}
            description={`Ủy viên Đoàn Chủ tịch Tổng Liên đoàn khóa XII, Tỉnh ủy viên, Chủ tịch Liên đoàn Lao động tỉnh Bình Dương`}
          />
        </div>
      </div>
    </section>
  );
}
