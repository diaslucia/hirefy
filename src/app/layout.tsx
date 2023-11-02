import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hirefy Challenge",
  description: "Hirefy challenge description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
