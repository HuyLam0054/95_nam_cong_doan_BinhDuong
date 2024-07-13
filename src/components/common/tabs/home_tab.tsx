"use client";
import * as React from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

import { CDBDTimeline } from "../timelines/CDBD_timeline";
import { ACTTimeline } from "../timelines/act_timeline";
import { PlanTimeline } from "../timelines/plan_timeline";

export interface IHomeTabProps {}

export function HomeTab(props: IHomeTabProps) {
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
        <Tabs.Item title="Kế hoạch sắp tới">
          <div className="px-2">
            <PlanTimeline />
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
