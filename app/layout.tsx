import { Metadata } from "next";

import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Doxa",
  description: "Quick and Smart Docs Collaborative editor."
};

const fontSans = FontSans ({
  subsets: ["latin"],
  variable: "--font-sans"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      className={cn(
        "min-h-screen font-sans antialiased",
        fontSans.variable
      )}
      >
        {children}

      </body>
    </html>
  )
}
