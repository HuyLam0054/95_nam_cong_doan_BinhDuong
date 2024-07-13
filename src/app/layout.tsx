import "../styles/globals.css";
import BottomNavigation from "@/components/layout/bottom_navigation";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import StarsCanvas from "@/components/layout/background";
import React from "react";
import { ThemeModeScript } from "flowbite-react";
import { Aleo } from "next/font/google";
import { ScrollTop } from "@/components/common/buttons/scroll_top_button";

const aleo = Aleo({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={aleo.className}>
        <Navigation />
        <BottomNavigation />
        {children}
        {/* <StarsCanvas /> */}
        <ScrollTop />
        <Footer />
      </body>
    </html>
  );
}
