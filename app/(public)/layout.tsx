import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import GlobalNavbar from "../navigation/GlobalNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eccechain",
  description: "My payment management system, themed with my favorite pwrson's name",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} px-7 lg:px-30 py-5 antialiased`}
      >
        
       <div className="fixed top-0 left-0 w-full z-50 bg-inherit px-7  lg:px-30 py-5">
  <GlobalNavbar />
</div>
        {children}
      </body>
    </html>
  );
}
