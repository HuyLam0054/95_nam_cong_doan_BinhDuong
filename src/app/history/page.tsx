import { HistoryContent } from "@/components/content/history/history_CD";
import { Metadata } from "next";

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
        <div className="py-8 px-4 mx-auto max-w-screen-xl">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400 pb-10 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            <span>Lịch sử Công đoàn</span>
          </div>
          <div className="mx-auto">
            <HistoryContent />
          </div>
        </div>
      </section>
    </>
  );
}
