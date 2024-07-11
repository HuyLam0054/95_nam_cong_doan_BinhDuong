"use client";
import * as React from "react";

import { CDTimeline } from "@/components/common/timelines/CD_timeline";

export interface IHistoryContentProps {}

export function HistoryContent(props: IHistoryContentProps) {
  return (
    <>
      <CDTimeline />
    </>
  );
}
