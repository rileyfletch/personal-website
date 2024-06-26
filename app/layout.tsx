import type { Metadata } from "next";
import { Radio_Canada } from "next/font/google";
import "./globals.css";
import Transition from "./transition";

const inter = Radio_Canada({ subsets: ["latin"] });

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
