"use client";
import * as React from "react";
import { Tabs } from "flowbite-react";
import { CDBDTimeline } from "@/components/common/timelines/CDBD_timeline";
import { ACTTimeline } from "@/components/common/timelines/act_timeline";
import { PlanTimeline } from "@/components/common/timelines/plan_timeline";

export interface IAboutTabProps {}

export function AboutTab(props: IAboutTabProps) {
  return (
    <div className="overflow-x-auto">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        <Tabs.Item active title="Lịch sử công đoàn Bình Dương">
          <div className="px-2">
            <CDBDTimeline />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Hoạt động chào mừng">
          <div className="px-2">
            <ACTTimeline />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Kế hoạch tổ chức">
          <div className="px-2">
            <PlanTimeline />
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
