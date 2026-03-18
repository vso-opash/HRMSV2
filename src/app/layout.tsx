import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Manrope, Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Opash HRMS Portal",
  description:
    "Modern HRMS experience for onboarding, attendance, payroll, and performance workflows.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
