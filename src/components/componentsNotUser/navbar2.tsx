// ! esse componente não está sendo utilizado no projeto no momento

"use client";

import Link from "next/link";

import { Github, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Amane Soft</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="/solutions"
            className="transition-colors hover:text-primary"
          >
            Solutions
          </Link>
          <Link
            href="/industries"
            className="transition-colors hover:text-primary"
          >
            Industries
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <Link
            href="https://github.com/amanesoft"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button variant="ghost" size="sm">
            Contact
          </Button>
          <Button size="sm">Get a Demo</Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-start space-y-4 py-4 px-4">
            <Link
              href="/solutions"
              className="transition-colors hover:text-primary"
            >
              Solutions
            </Link>
            <Link
              href="/industries"
              className="transition-colors hover:text-primary"
            >
              Industries
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-primary"
            >
              About Us
            </Link>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
            <Button size="sm">Get a Demo</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
