"use client";

import React, { useEffect, useState } from "react";

export default function Clock() {
  const [clock, setClock] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const clock = setInterval(
      (): void => setClock(new Date().toLocaleTimeString()),
      1000
    );

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold text-[8px] md:text-base">
          {new Date().toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h1>
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-cyan-900 font-bold text-[15px] md:text-2xl">
          {clock}
        </h1>
      </div>
    </>
  );
}
