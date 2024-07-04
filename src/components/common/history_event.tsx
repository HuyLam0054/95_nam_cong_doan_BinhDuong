import * as React from "react";

export interface IHistoryEventProps {
  position: String;
  name: String;
  time: String;
  content: String;
}

export function HistoryEvent(props: IHistoryEventProps) {
  return (
    <li className="my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">{props.name}</h3>
        <span className="capitalize font-medium text-black">{props.time}</span>
        <p className="font-medium">{props.content}</p>
      </div>
    </li>
  );
}
