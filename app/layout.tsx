import type { Metadata } from "next";
import { Raleway, Rubik } from "next/font/google";
import "./globals.css";
import Transition from "./transition";

const inter = Rubik({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Riley Fletcher",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Transition>
          {children}
        </Transition>
      </body>
      
    </html>
  );
}
