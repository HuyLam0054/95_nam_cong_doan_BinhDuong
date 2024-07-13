"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { HiArrowCircleUp } from "react-icons/hi";

export interface IScrollTopProps {}

export function ScrollTop(props: IScrollTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 fixed bottom-0 right-0 mb-24 md:mb-14 mr-5 rounded-full z-40"
        >
          <HiArrowCircleUp className="w-10 h-10" />
        </button>
      )}
    </>
  );
}
