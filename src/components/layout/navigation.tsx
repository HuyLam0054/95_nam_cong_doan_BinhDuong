"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Clock from "../common/clocks/clock";

export default function Navigation() {
  const pathName = usePathname();

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/huyhieucongdoan.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold text-sm md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-cyan-900 dark:from-purple-300 dark:to-cyan-300 ml-[10px] text-gray-700 dark:text-gray-300">
            {`Công đoàn Bình Dương`}
          </span>
        </Link>

        <div className="hidden w-[500px] h-full md:flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] dark:bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link
              href="/"
              className={`cursor-pointer font-bold ${
                pathName == "/"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-700 dark:from-purple-300 dark:to-cyan-300"
                  : "text-gray-700 dark:text-white"
              }`}
            >
              Công đoàn
            </Link>
            <Link
              href="/history"
              className={`cursor-pointer font-bold ${
                pathName == "/history"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-700 dark:from-purple-300 dark:to-cyan-300"
                  : "text-gray-700 dark:text-white"
              }`}
            >
              Lịch sử
            </Link>
            <Link
              href="/activitives"
              className={`cursor-pointer font-bold ${
                pathName == "/activitives"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-700 dark:from-purple-300 dark:to-cyan-300"
                  : "text-gray-700 dark:text-white"
              }`}
            >
              Hoạt động
            </Link>
            <Link
              href="/propagate"
              className={`cursor-pointer font-bold ${
                pathName == "/propagate"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-700 dark:from-purple-300 dark:to-cyan-300"
                  : "text-gray-700 dark:text-white"
              }`}
            >
              Tuyên truyền
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <Clock />
        </div>
      </div>
    </div>
  );
}
