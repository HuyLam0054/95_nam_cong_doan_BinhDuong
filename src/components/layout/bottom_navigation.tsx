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
          onClick={() => router.push("/skills")}
          className={`inline-flex flex-col items-center justify-center px-5
          hover:bg-gray-50 dark:hover:bg-gray-800 group ${
            pathName == "/skills" ? "bg-gray-50 dark:bg-gray-800" : ""
          }`}
        >
          <FaProjectDiagram
            className={`w-6 h-6 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
              pathName == "/skills"
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500"
            }`}
          />
          <span className="sr-only">Skills</span>
        </button>

        <div className="flex items-center justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <FaFilePdf className="w-4 h-4 text-white" />
            <span className="sr-only">MyCV</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => router.push("/projects")}
          className={`inline-flex flex-col items-center justify-center px-5
          hover:bg-gray-50 dark:hover:bg-gray-800 group ${
            pathName == "/projects" ? "bg-gray-50 dark:bg-gray-800" : ""
          }`}
        >
          <FaClipboardList
            className={`w-6 h-6 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
              pathName == "/projects"
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500"
            }`}
          />
          <span className="sr-only">Projects</span>
        </button>

        <button
          type="button"
          onClick={() => router.push("/contact")}
          className={`inline-flex flex-col items-center justify-center px-5 rounded-e-full 
          hover:bg-gray-50 dark:hover:bg-gray-800 group ${
            pathName == "/contact" ? "bg-gray-50 dark:bg-gray-800" : ""
          }`}
        >
          <FaPhone
            className={`w-6 h-6 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
              pathName == "/contact"
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500"
            }`}
          />
          <span className="sr-only">Contact</span>
        </button>
      </div>
    </div>
  );
}
