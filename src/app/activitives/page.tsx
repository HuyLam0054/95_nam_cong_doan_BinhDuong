import { Activitives } from "@/components/content/activitives_content";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/activitives.png",
  },
  title: "Hoạt động kỷ niệm",
};

export default function ActivitivesPage() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 pt-10">
        <Activitives />
      </section>
    </>
  );
}
