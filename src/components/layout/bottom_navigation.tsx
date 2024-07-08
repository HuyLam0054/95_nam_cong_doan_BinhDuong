"use client";
import React from "react";
import {
  FaClipboardList,
  FaFilePdf,
  FaHome,
  FaPhone,
  FaProjectDiagram,
} from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

export default function BottomNavigation() {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div
      className={
        "fixed md:hidden z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600"
      }
    >
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <button
          type="button"
          onClick={() => router.push("/")}
          className={`inline-flex flex-col items-center justify-center px-5 rounded-s-full 
          hover:bg-gray-50 dark:hover:bg-gray-800 group ${
            pathName == "/" ? "bg-gray-50 dark:bg-gray-800" : ""
          }`}
        >
          <FaHome
            className={`w-6 h-6 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
              pathName == "/"
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500 "
            }`}
          />
          <span className="sr-only">About</span>
        </button>

        <button
          type="button"
          onClick={() => router.push("/history")}
          className={`inline-flex flex-col items-center justify-center px-5
          hover:bg-gray-50 dark:hover:bg-gray-800 group ${
            pathName == "/history" ? "bg-gray-50 dark:bg-gray-800" : ""
          }`}
        >
          <FaProjectDiagram
            className={`w-6 h-6 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
              pathName == "/history"
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500"
            }`}
          />
          <span className="sr-only">history</span>
        </button>

        <div className="flex items-center justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <FaFilePdf className="w-4 h-4 text-white" />
            <span className="sr-only">Infographic</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => router.push("/activitives")}
          className={`inline-flex flex-col items-center justify-center px-5
          hover:bg-gray-50 dark:hover:bg-gray-800 group ${
            pathName == "/activitives" ? "bg-gray-50 dark:bg-gray-800" : ""
          }`}
        >
          <FaClipboardList
            className={`w-6 h-6 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
              pathName == "/activitives"
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500"
            }`}
          />
          <span className="sr-only">activitives</span>
        </button>

        <button
          type="button"
          onClick={() => router.push("/propagate")}
          className={`inline-flex flex-col items-center justify-center px-5 rounded-e-full 
          hover:bg-gray-50 dark:hover:bg-gray-800 group ${
            pathName == "/propagate" ? "bg-gray-50 dark:bg-gray-800" : ""
          }`}
        >
          <FaPhone
            className={`w-6 h-6 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
              pathName == "/propagate"
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500"
            }`}
          />
          <span className="sr-only">Propagates</span>
        </button>
      </div>
    </div>
  );
}
