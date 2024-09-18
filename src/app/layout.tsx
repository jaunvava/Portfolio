import type { Metadata } from "next";
import { Epilogue, Montserrat } from "next/font/google";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfólio | João Pedro",
  description: "Meu Portfólio Pessoal",
  keywords: [
    "Nextjs",
    "Next",
    "Typescrypt",
    "Javascrypt",
    "Eeact",
    "Web develope",
    "TaylwindCSS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={epilogue.className}>{children}</body>
    </html>
  );
}
