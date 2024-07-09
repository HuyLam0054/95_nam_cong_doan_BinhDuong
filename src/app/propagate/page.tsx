import { Propagates } from "@/components/content/propagate_content";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/logo95nam.png",
  },
  title: "Tin tuyên truyền",
};
export default function PropagatesPage() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 pt-20">
        <Propagates />
      </section>
    </>
  );
}
