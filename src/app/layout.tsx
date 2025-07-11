// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Commissioner } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import BodyWrapper from "@/components/bodywrapper/BodyWrapper";

const CommissionertSans = Commissioner({
  variable: "--font-Commissioner-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fonts = `${CommissionertSans.variable}`;

  return (
    <html lang="en">
      <BodyWrapper fontClass={fonts}>
        <Header />
        {children}
      </BodyWrapper>
    </html>
  );
}
