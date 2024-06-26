import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Users App",
  description: "User Web Page ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-red-300" lang="en">
    
      <body className="w-full" style={{ overflowY: 'auto' }} >{children}</body>
    </html>
  );
}
