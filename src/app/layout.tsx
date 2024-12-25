import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/_providers/theme-provider";
import { Inter as FontSans } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Portfólio | João Pedro",
  description: "Meu Portfólio Pessoal",
  keywords: [
    "Nextjs",
    "Next",
    "Typescrypt",
    "Javascrypt",
    "React",
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
      <body className={epilogue.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
