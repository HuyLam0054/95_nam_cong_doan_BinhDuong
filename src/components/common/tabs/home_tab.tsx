"use client";
import * as React from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

import { CDBDTimeline } from "../timelines/CDBD_timeline";

export interface IHomeTabProps {}

export function HomeTab(props: IHomeTabProps) {
  return (
    <div className="overflow-x-auto">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        <Tabs.Item active title="Profile" icon={HiUserCircle}>
          <div className="px-2">
            <CDBDTimeline />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Dashboard" icon={MdDashboard}>
          <div className="px-2">
            <CDBDTimeline />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={HiAdjustments}>
          <div className="px-2">
            <CDBDTimeline />
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
