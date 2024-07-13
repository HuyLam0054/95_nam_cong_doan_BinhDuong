/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";

export interface INameCardProps {
  position: string;
  name: string;
  img_add: string;
  description: string;
}

export function NameCard(props: INameCardProps) {
  return (
    <Card
      className="max-w-sm mx-auto"
      renderImage={() => (
        <img width={500} height={500} src={props.img_add} alt={props.img_add} />
      )}
    >
      <span className="text-base font-bold text-gray-900 dark:text-white text-center -mt-3">
        {props.position}
      </span>
      <span className="text-lg font-bold text-gray-900 dark:text-white text-center -mt-3">
        {props.name}
      </span>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
        {props.description}
      </p>
    </Card>
  );
}
