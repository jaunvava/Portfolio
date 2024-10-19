"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/app/providers/toggle-mode";
import { Terminal } from "lucide-react";

export default function Navbarlayout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const NavItems = () => (
    <>
      <Link
        href="/"
        className="text-sm font-medium hover:text-blue-600 hover:dark:text-blue-500 dark:text-primary transition-all duration-400 ease-in-out"
      >
        Home
      </Link>
      <Link
        href="#feedbackclientes"
        className="text-sm font-medium hover:text-blue-600 hover:dark:text-blue-500 dark:text-primary transition-all duration-400 ease-in-out"
      >
        FeedBack
      </Link>

      <Link
        href="/services"
        className="text-sm font-medium hover:text-blue-600 hover:dark:text-blue-500 dark:text-primary transition-all duration-400 ease-in-out "
      >
        Serviços
      </Link>
      <Link
        href="#carroselclientes"
        className="text-sm font-medium hover:text-blue-600 hover:dark:text-blue-500 dark:text-primary transition-all duration-400 ease-in-out"
      >
        Clientes
      </Link>
      <Link
        href="#duvidas"
        className="text-sm font-medium  hover:text-blue-600 hover:dark:text-blue-500 dark:text-primary transition-all duration-400 ease-in-out"
      >
        Dúvidas
      </Link>
    </>
  );

  return (
    <nav className="dark:text-white dark:bg-secondary border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-7">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-start ">
            <Terminal className="h-10 w-10" />
          </div>

          {/* Links de navegação centralizados */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <div className="flex gap-8 items-baseline space-x-4">
              <NavItems />
            </div>
          </div>

          {/* Botão Currículo e toggle (WEB) */}
          <div className="hidden md:block items-baseline ">
            <ModeToggle />
          </div>

          {/* Botão de menu móvel */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                {/* botão de abrir sidebar */}
                <Button
                  variant="ghost"
                  className="px-2 dark:bg-secondary"
                  onClick={toggleSidebar}
                >
                  <span className="sr-only">abrir menu</span>
                  {isOpen ? (
                    <X className="h-8 w-8" />
                  ) : (
                    <Menu className="h-7 w-7" />
                  )}
                </Button>
              </SheetTrigger>

              {/* sidebar */}
              <SheetContent
                side="right"
                className="w-[17.5rem] sm:w-[18.75rem] dark:bg-secondary"
              >
                <nav className="flex flex-col space-y-6 mt-7">
                  <NavItems />
                  <ModeToggle />
                  {/* botao curriculo mobile */}
                  <Button
                    variant="outline"
                    className="w-full transition-all duration-300 ease-in-out dark:bg-secondary hover:text-blue-500 hover:scale-105 dark:text-white dark:border-white border-black"
                  >
                    Currículo
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
