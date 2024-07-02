import { Inter } from "next/font/google";
import "../styles/globals.css";
import BottomNavigation from "@/components/layout/bottom_navigation";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import StarsCanvas from "@/components/layout/background";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang={locale}>
      <body className={inter.className}>
        <Navigation />
        <BottomNavigation />
        {children}
        <StarsCanvas />
        <Footer />
      </body>
    </html>
  );
}
