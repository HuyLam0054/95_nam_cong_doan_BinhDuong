"use client";
import * as React from "react";
import { Tabs, Timeline } from "flowbite-react";
import { CDBDTimeline } from "@/components/common/timelines/CDBD_timeline";
import { HiCalendar } from "react-icons/hi2";
import { PlanTimeline } from "@/components/common/timelines/plan_timeline";
import { NameCardOld } from "@/components/common/cards/name_card_old";

export interface IAboutTabProps {}

export function AboutTab(props: IAboutTabProps) {
  return (
    <div className="overflow-x-auto max-w-screen-xl mx-auto">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        <Tabs.Item active title="Công đoàn Bình Dương">
          <div className="px-5">
            <CDBDTimeline />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Tên gọi Công đoàn Bình Dương">
          {/* Tên gọi của Công đoàn BD */}
          <div className="px-5">
            <div className="mx-auto">
              <span className="font-bold text-xl uppercase">
                Tên gọi của Công đoàn Bình Dương qua các thời kỳ
              </span>
            </div>
            <div className="my-10">
              <Timeline horizontal>
                <Timeline.Item>
                  <Timeline.Point icon={HiCalendar} />
                  <Timeline.Content>
                    <Timeline.Time>Năm 1975 - Năm 1976</Timeline.Time>
                    <Timeline.Title>
                      <span className="uppercase">
                        Liên hiệp Công đoàn tỉnh Thủ Dầu Một
                      </span>
                    </Timeline.Title>
                    <Timeline.Body></Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point icon={HiCalendar} />
                  <Timeline.Content>
                    <Timeline.Time>Năm 1976 - Năm 1988</Timeline.Time>
                    <Timeline.Title>
                      <span className="uppercase">
                        Liên hiệp Công đoàn tỉnh Sông Bé
                      </span>
                    </Timeline.Title>
                    <Timeline.Body></Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point icon={HiCalendar} />
                  <Timeline.Content>
                    <Timeline.Time>Năm 1988 - Năm 1996</Timeline.Time>
                    <Timeline.Title>
                      <span className="uppercase">
                        Liên đoàn Lao động tỉnh Sông Bé
                      </span>
                    </Timeline.Title>
                    <Timeline.Body></Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point icon={HiCalendar} />
                  <Timeline.Content>
                    <Timeline.Time>Năm 1996 - nay</Timeline.Time>
                    <Timeline.Title>
                      <span className="uppercase">
                        Liên đoàn Lao động tỉnh Bình Dương
                      </span>
                    </Timeline.Title>
                    <Timeline.Body></Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
              </Timeline>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Lãnh đạo qua các thời kỳ">
          <div className="px-5">
            {/* Lãnh đạo */}
            <div>
              <span className="text-xl uppercase font-semibold px-auto">
                Lãnh đạo Công đoàn Bình Dương qua các kì đại hội:
              </span>
            </div>
            <div className="pt-10 grid lg:grid-cols-4 gap-2">
              <NameCardOld
                position={`Đồng chí`}
                name={`Nguyễn Thường Sơn`}
                img_add={`/pictures/lanhdao/1.jpg`}
                description={`Thư ký Liên hiệp Công đoàn tỉnh Sông Bé khoá I`}
              />
              <NameCardOld
                position={`Đồng chí`}
                name={`Ngô Tuấn  Đạt`}
                img_add={`/pictures/lanhdao/2.jpg`}
                description={`Thư ký Liên hiệp Công đoàn tỉnh Sông Bé khoá I`}
              />
              <NameCardOld
                position={`Đồng chí`}
                name={`Trần Xuân Minh`}
                img_add={`/pictures/lanhdao/3.jpg`}
                description={`Thư ký Liên hiệp Công đoàn tỉnh Sông Bé khoá II - III`}
              />
              <NameCardOld
                position={`Đồng chí`}
                name={`Huỳnh Văn Tấn`}
                img_add={`/pictures/lanhdao/4.jpg`}
                description={`Thư ký Liên hiệp Công đoàn tỉnh Sông Bé khoá IV`}
              />
              <NameCardOld
                position={`Đồng chí`}
                name={`Nguyễn Văn Minh`}
                img_add={`/pictures/lanhdao/5.jpg`}
                description={`Chủ tịch Liên đoàn Lao động tỉnh Bình Dương khoá IV - V`}
              />
              <NameCardOld
                position={`Đồng chí`}
                name={`Trịnh Thị Kim Liên`}
                img_add={`/pictures/lanhdao/6.jpg`}
                description={`Chủ tịch Liên đoàn Lao động tỉnh Bình Dương khoá V - VI`}
              />
              <NameCardOld
                position={`Đồng chí`}
                name={`Nguyễn Văn Nam`}
                img_add={`/pictures/lanhdao/7.jpg`}
                description={`Chủ tịch Liên đoàn Lao động tỉnh Bình Dương khoá VI - VII - VIII`}
              />
              <NameCardOld
                position={`Đồng chí`}
                name={`Lê Thành Nhơn`}
                img_add={`/pictures/lanhdao/8.jpg`}
                description={`Chủ tịch Liên đoàn Lao động tỉnh Bình Dương khoá VIII - IX`}
              />
              <NameCardOld
                position={`Đồng chí`}
                name={`Bùi Thanh Nhân`}
                img_add={`/pictures/lanhdao/9.jpg`}
                description={`Chủ tịch Liên đoàn Lao động tỉnh Bình Dương khoá IX`}
              />
              <NameCardOld
                position={`Đồng chí`}
                name={`Trương Thị Bích Hạnh`}
                img_add={`/pictures/lanhdao/10.jpg`}
                description={`Chủ tịch Liên đoàn Lao động tỉnh Bình Dương khoá IX - X`}
              />
              <NameCardOld
                position={`Đồng chí`}
                name={`Nguyễn Kim Loan`}
                img_add={`/pictures/lanhdao/11.jpg`}
                description={`Chủ tịch Liên đoàn Lao động tỉnh Bình Dương khoá X - XI`}
              />
            </div>
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
