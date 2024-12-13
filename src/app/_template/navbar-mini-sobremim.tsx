"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, TerminalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "../providers/toggle-mode";

export default function NavbarMinisobremim() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinks = () => (
    <>
      <Link
        href="/"
        className="text-lg font-medium text-gray-800 dark:text-gray-200 transition-colors hover:text-orange-600 dark:hover:text-orange-600 duration-300  "
        onClick={toggleMenu}
      >
        Home
      </Link>
      <Link
        href="#"
        className="text-lg font-medium text-gray-800 dark:text-gray-200 transition-colors hover:text-orange-600 dark:hover:text-orange-600  duration-300"
        onClick={toggleMenu}
      >
        Meu Propósito
      </Link>
      <Link
        href="#"
        className="text-lg font-medium text-gray-800 dark:text-gray-200 transition-colors hover:text-orange-600 dark:hover:text-orange-600  duration-300"
        onClick={toggleMenu}
      >
        Teste
      </Link>
      <Link
        href="#contatorodape"
        className="text-lg font-medium text-gray-800 dark:text-gray-200 transition-colors hover:text-orange-600 dark:hover:text-orange-600  duration-300"
        onClick={toggleMenu}
      >
        Contato
      </Link>
    </>
  );

  return (
    <nav className="z-20 fixed w-full flex justify-center mt-4">
      <div className="fixed top-4 w-11/12 md:w-4/5 lg:w-3/4 xl:w-1/3 backdrop-blur-sm bg-black/20 dark:bg-gray-600/90 rounded-full shadow-lg p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <TerminalIcon className="h-8 w-8 ml-3" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
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
            <SheetContent side="right" className="bg-gray-100 dark:bg-gray-600">
              <nav className="flex flex-col space-y-6 mt-4 text-black dark:text-white ">
                <NavLinks />
                <ModeToggle />
                <Button className=" md:inline-flex bg-orange-600  hover:bg-orange-500 hover:scale-105 transition duration-600 dark:text-white rounded-full">
                  Currículo
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

          <Button variant={null} className="hidden md:inline-flex"></Button>
        </div>
      </div>
    </nav>
  );
}
