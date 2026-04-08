import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Preloader from "@/components/core-shift/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CoreShift - All-in-one HR Platform",
  description: "CoreShift is a modern, all-in-one HR platform designed to perfectly fit your business needs.",
  keywords: ["HR", "HRM", "CoreShift", "Human Resources", "Payroll", "Management"],
  icons: {
    icon: "/coreshift/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
      >
        <Preloader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
