"use client";
import * as React from "react";
import { CDBDTimeline } from "@/components/common/timelines/CDBD_timeline";

export interface IHistoryCDBDProps {}

export function HistoryCDBD(props: IHistoryCDBDProps) {
  return (
    <>
      <CDBDTimeline />
    </>
  );
}
