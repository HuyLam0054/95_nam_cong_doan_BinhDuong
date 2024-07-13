import { HomeTab } from "@/components/common/tabs/home_tab";
import * as React from "react";

export interface IAboutTabProps {}

export function AboutTab(props: IAboutTabProps) {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <HomeTab />
    </div>
  );
}
