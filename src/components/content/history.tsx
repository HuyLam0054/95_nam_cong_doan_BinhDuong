import * as React from "react";
import { HistoryEvent } from "../common/history_event";

export interface IHistoryContentProps {}

export function HistoryContent(props: IHistoryContentProps) {
  return (
    <div className="w-[75%] mx-auto relative">
      <ul>
        <HistoryEvent
          position={"adasdasdasdas"}
          name={"adadasdasd"}
          time={"12/1/1999"}
          content={
            "adasdasdasdasdasdadasdasdasdasdasdasdasdasdasdasdasfsdfsdfsdfssdsdsddfsdfsdfsdfsdfsdfsfsdfdasd"
          }
        />
      </ul>
    </div>
  );
}
