"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, TerminalIcon, Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function NavbarMini() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinks = () => (
    <>
      <Link
        href="/"
        className="text-sm font-medium text-black transition-colors hover:text-primary/80"
        onClick={toggleMenu}
      >
        Início
      </Link>
      <Link
        href="/sobremim"
        className="text-sm font-medium text-black transition-colors hover:text-primary/80"
        onClick={toggleMenu}
      >
        Sobre
      </Link>
      <Link
        href="/services"
        className="text-sm font-medium text-black transition-colors hover:text-primary/80"
        onClick={toggleMenu}
      >
        Serviços
      </Link>
      <Link
        href="#contact"
        className="text-sm font-medium text-black transition-colors hover:text-primary/80"
        onClick={toggleMenu}
      >
        Contato
      </Link>
    </>
  );

  return (
    <div className="fixed w-full flex justify-center mt-4">
      <div className="fixed top-4 w-11/12 md:w-4/5 lg:w-3/4 xl:w-1/3 backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 rounded-full shadow-lg p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <TerminalIcon className="h-7 w-7 ml-3" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <NavLinks />
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden mr-2">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-backdrop-blur-sm bg-white/100"
            >
              <nav className="flex flex-col space-y-6 mt-4 text-white">
                <NavLinks />
                <Terminal />
                <Button className=" md:inline-flex bg-orange-600  hover:bg-orange-500 hover:scale-105 transition duration-600 rounded-full">
                  Currículo
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

          <Button className="hidden md:inline-flex bg-orange-600  hover:bg-orange-500 hover:scale-105 transition duration-600 rounded-full">
            Currículo
          </Button>
        </div>
      </div>
    </div>
  );
}
