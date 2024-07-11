import { SliderCarosel } from "@/components/common/sliders/slider_carosel";
import HeroContent from "@/components/content/about_hero";
import AboutMe from "@/components/content/about_info";

import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/logo95nam.png",
  },
  title: "Kỷ niệm 95 năm Ngày thành lập Công đoàn Việt Nam",
};
export default function Home() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 pb-20 md:pb-0 min-h-screen w-full">
        <HeroContent />
        <SliderCarosel />
        <AboutMe />
      </div>
    </>
  );
}
