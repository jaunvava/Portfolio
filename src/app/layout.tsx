import "./globals.css";
import type { Metadata } from "next";
import type React from "react";
import { Inter, Montserrat, Oxanium, Courgette } from "next/font/google";
import { ThemeProvider } from "./_providers/theme-provider";
import MouseMoveEffect from "../components/mouse-move-effect";

export const metadata: Metadata = {
  title: "João Pedro | Portifólio",
  description: "",
};

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const oxanium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
});

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const courgette = Courgette({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-courgette",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="dark">
      <body
        className={`${inter.variable} ${montserrat.variable} ${oxanium.variable} ${courgette.variable} bg-background text-foreground antialiased`}
      >
        <MouseMoveEffect />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
