/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import Image from "next/image";
import { ImageHistory } from "../images/image";

export interface ICDTimelineProps {}

export function CDTimeline(props: ICDTimelineProps) {
  return (
    <Timeline>
      {/* 1. sự ra đời của giai cấp công nhân */}
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>Ngày xx tháng xx năm 19xx</Timeline.Time>
          <Timeline.Title>
            Sự ra đời của giai cấp công nhân Việt Nam
          </Timeline.Title>
          <Timeline.Body>
            <div className="grid w-full md:grid-cols-5 gap-1">
              <div className="bg-white dark:bg-gray-900 p-2 md:col-span-3">
                Trước thế kỉ XV, Việt Nam chưa có những điều kiện thuận lợi cho
                sự phát triển công, thương nghiệp và kinh tế hàng hoá, nhưng đã
                có tầng lớp thợ thủ công. Sang thế kỉ XV, XVI đội ngũ “ Những
                người lao động làm thuê” đã xuất hiện. Đầu thế kỉ XIX, ngành
                khai mỏ phát triển và hàng ngàn “thợ” mỏ làm việc trong các mỏ
                khai thác than, thiếc. Nhưng đó chưa phải là công nhân hiện đại,
                sản xuất trong dây chuyền công nghiệp. Đội ngũ công nhân Việt
                Nam xuất hiện khi có cuộc khai thác thuộc địa lần thứ I (từ năm
                1897 đến năm 1914) của thực dân Pháp. Khu công nghiệp tập trung
                ở Hà Nội, Sài Gòn, Hải Phòng, Nam Định, Vinh - Bến Thủy, Hòn Gai
                đã làm cho số công nhân tăng nhanh... Số lượng công nhân năm
                1906 là 49.500 người trong đó có 1.800 thợ chuyên môn.
              </div>
              <ImageHistory
                img_add={`https://baotanglichsu.vn/DataFiles/News/Tintuc_cgs_vn_201362821h41m7s.jpg`}
                description={`Tổng công Hội công đỏ Bắc kỳ`}
              />
            </div>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      {/* 2. Sự ra đời của Công hội đỏ Bắc kỳ */}
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>Ngày xx tháng xx năm 19xx</Timeline.Time>
          <Timeline.Title>
            Sự ra đời của Công hội đỏ Bắc Kỳ - tiền thân của Công đoàn Việt Nam
            ngày nay
          </Timeline.Title>
          <Timeline.Body>
            <div className="grid w-full md:grid-cols-5 gap-1">
              <div className="bg-white dark:bg-gray-900 p-2 md:col-span-3">
                Trước thế kỉ XV, Việt Nam chưa có những điều kiện thuận lợi cho
                sự phát triển công, thương nghiệp và kinh tế hàng hoá, nhưng đã
                có tầng lớp thợ thủ công. Sang thế kỉ XV, XVI đội ngũ “ Những
                người lao động làm thuê” đã xuất hiện. Đầu thế kỉ XIX, ngành
                khai mỏ phát triển và hàng ngàn “thợ” mỏ làm việc trong các mỏ
                khai thác than, thiếc. Nhưng đó chưa phải là công nhân hiện đại,
                sản xuất trong dây chuyền công nghiệp. Đội ngũ công nhân Việt
                Nam xuất hiện khi có cuộc khai thác thuộc địa lần thứ I (từ năm
                1897 đến năm 1914) của thực dân Pháp. Khu công nghiệp tập trung
                ở Hà Nội, Sài Gòn, Hải Phòng, Nam Định, Vinh - Bến Thủy, Hòn Gai
                đã làm cho số công nhân tăng nhanh... Số lượng công nhân năm
                1906 là 49.500 người trong đó có 1.800 thợ chuyên môn.
              </div>
              <ImageHistory
                img_add={`https://baotanglichsu.vn/DataFiles/News/Tintuc_cgs_vn_201362821h41m7s.jpg`}
                description={`Tổng công Hội công đỏ Bắc kỳ`}
              />
            </div>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      {/*  */}
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>Ngày xx tháng xx năm 19xx</Timeline.Time>
          <Timeline.Title>
            Sự hình thành giai cấp công nhân Việt Nam
          </Timeline.Title>
          <Timeline.Body>
            Trước thế kỉ XV, Việt Nam chưa có những điều kiện thuận lợi cho sự
            phát triển công, thương nghiệp và kinh tế hàng hoá, nhưng đã có tầng
            lớp thợ thủ công. Sang thế kỉ XV, XVI đội ngũ “ Những người lao động
            làm thuê” đã xuất hiện. Đầu thế kỉ XIX, ngành khai mỏ phát triển và
            hàng ngàn “thợ” mỏ làm việc trong các mỏ khai thác than, thiếc.
            Nhưng đó chưa phải là công nhân hiện đại, sản xuất trong dây chuyền
            công nghiệp. Đội ngũ công nhân Việt Nam xuất hiện khi có cuộc khai
            thác thuộc địa lần thứ I (từ năm 1897 đến năm 1914) của thực dân
            Pháp. Khu công nghiệp tập trung ở Hà Nội, Sài Gòn, Hải Phòng, Nam
            Định, Vinh - Bến Thủy, Hòn Gai đã làm cho số công nhân tăng nhanh...
            Số lượng công nhân năm 1906 là 49.500 người trong đó có 1.800 thợ
            chuyên môn.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
