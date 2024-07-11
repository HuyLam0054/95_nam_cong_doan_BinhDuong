/* eslint-disable @next/next/no-img-element */
"use client";

import { Carousel } from "flowbite-react";
import * as React from "react";

export interface ISliderCaroselProps {}

export function SliderCarosel(props: ISliderCaroselProps) {
  return (
    <div className="h-32 sm:h-64 xl:h-44 max-w-screen-xl mx-auto">
      <Carousel slideInterval={3000}>
        <img src="/pictures/Banner/banner1.png" className="" alt="..." />
        <img src="/pictures/Banner/banner2.png" className="" alt="..." />
        <img src="/pictures/Banner/banner3.png" className="" alt="..." />
        <img src="/pictures/Banner/banner4.png" className="" alt="..." />
        <img src="/pictures/Banner/banner5.png" className="" alt="..." />
      </Carousel>
    </div>
  );
}
