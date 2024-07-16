/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
export interface IEventCardProps {
  img: string;
  type: String;
  name: String;
  description: String;
}

export function EventCard(props: IEventCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <img
        src={props.img}
        alt={props.img}
        className="w-full object-cover h-[190px]"
      />

      <div className="relative p-4">
        <h1 className="text-gray-900 dark:text-white text-xl font-semibold uppercase">
          {props.name}
        </h1>
        <p className="text-gray-900 dark:text-white mt-2 text-sm">
          {props.description}
        </p>
      </div>
    </div>
  );
}
