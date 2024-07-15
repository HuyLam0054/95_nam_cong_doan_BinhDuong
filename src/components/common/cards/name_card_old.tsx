/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import { Card } from "flowbite-react";

export interface INameCardOldProps {
  position: string;
  name: string;
  img_add: string;
  description: string;
}

export function NameCardOld(props: INameCardOldProps) {
  return (
    <Card
      className="max-w-sm mx-auto"
      renderImage={() => (
        <img
          src={props.img_add}
          alt={props.img_add}
          className="object-cover max-h-60 min-w-80 lg:min-w-60"
        />
      )}
    >
      <span className="text-base font-bold text-gray-900 dark:text-white text-center -mt-3">
        {props.position}
      </span>
      <span className="text-lg font-bold text-gray-900 dark:text-white text-center -mt-3">
        {props.name}
      </span>
      <p className="text-[1rem] font-normal text-gray-700 dark:text-gray-400 text-center">
        {props.description}
      </p>
    </Card>
  );
}
