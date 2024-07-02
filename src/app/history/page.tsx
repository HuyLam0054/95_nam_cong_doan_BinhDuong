import AboutMe from "@/components/content/about_info";
import MySkills from "@/components/content/skills_skills";
import MyTools from "@/components/content/skills_tools";
import { Metadata } from "next";
import Link from "next/link";
import { FaLocationArrow, FaTools } from "react-icons/fa";

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png",
  },
  title: "My Skill",
};
export default function SkillsPage() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 pt-10">
        <div className="py-8 px-4 mx-auto max-w-screen-xl md:py-16">
          <h2 className="mb-4 pb-10 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            My Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <MySkills />
            <MyTools />
          </div>
        </div>
      </section>
    </>
  );
}
