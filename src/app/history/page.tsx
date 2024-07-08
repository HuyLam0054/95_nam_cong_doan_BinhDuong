import { HistoryContent } from "@/components/content/history";
import { Metadata } from "next";
import Link from "next/link";
import { FaLocationArrow, FaTools } from "react-icons/fa";

export const metadata: Metadata = {
  icons: {
    icon: "/logo95nam.png",
  },
  title: "Lịch sử Công đoàn",
};
export default function SkillsPage() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 pt-20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl md:py-16">
          <h2 className="mb-4 pb-10 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white ">
            Lịch sử Công đoàn Việt Nam
          </h2>
          <div className="grid gap-8 max-w-[70%]">
            {/* <HistoryContent /> */}
          </div>
        </div>
      </section>
    </>
  );
}
