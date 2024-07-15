/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export interface IImageHistoryProps {
  img_add: string;
  description: string;
}

export function ImageHistory(props: IImageHistoryProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-2 lg:col-span-2 lg:flex">
      <div className="flex flex-row items-center justify-center w-full z-[20]">
        <div className="h-full w-full flex flex-col justify-center m-auto text-start">
          <div className="flex flex-row justify-start flex-wrap">
            <div className="w-full h-full flex justify-center items-center flex-col">
              <img
                src={props.img_add}
                alt="img_history"
                className="max-h-96 w-full object-cover"
              />
              <span className="text-center font-bold text-black pt-2 text-sm">
                {props.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
