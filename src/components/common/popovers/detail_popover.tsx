/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import { Popover } from "flowbite-react";

export interface IDetailPopoverProps {
  name: string;
  detail: string;
  img_url: string;
  date: string;
}

export function DetailPopover(props: IDetailPopoverProps) {
  return (
    <p className="text-gray-500 dark:text-gray-400">
      {""}
      <Popover
        trigger="hover"
        content={
          <div className="w-[390px] md:w-[600px] text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
            <div className="grid grid-cols-5">
              <div className="col-span-3 p-3">
                <div className="space-y-2">
                  <h3 className="font-bold text-center text-gray-900 dark:text-white">
                    {props.name}
                    <br />
                    {props.date}
                  </h3>
                  <p>{props.detail}</p>
                </div>
              </div>
              <img
                src={props.img_url}
                className="col-span-2 h-full"
                alt={props.img_url}
              />
            </div>
          </div>
        }
      >
        <a className="text-blue-600 hover:text-red-300 dark:text-blue-500">
          {props.name}
        </a>
      </Popover>
    </p>
  );
}