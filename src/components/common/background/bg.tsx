"use client";

import * as React from "react";

export interface IBackgroundProps {}

export function Background(props: IBackgroundProps) {
  return (
    <div
      className="relative h-screen overflow-y-auto bg-fixed bg-cover bg-center -z-50"
      style={{ backgroundImage: "url('/background.png')" }}
    ></div>
  );
}
