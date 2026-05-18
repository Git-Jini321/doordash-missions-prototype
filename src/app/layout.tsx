import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DeviceFrame } from "@/components/DeviceFrame";
import { Toaster } from "@/components/ui/sonner";
import { BottomTabs } from "@/components/BottomTabs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "DoorDash Missions Prototype",
  description: "A production-grade interactive prototype of DoorDash Missions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <DeviceFrame>
          {children}
          <BottomTabs />
          <Toaster />
        </DeviceFrame>
      </body>
    </html>
  );
}
