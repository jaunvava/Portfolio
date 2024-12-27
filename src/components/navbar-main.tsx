// ! esse componente não está mais sendo utilizado !!!
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/app/_providers/toggle-mode";
import { Terminal } from "lucide-react";

export default function NavbarComponentTeste() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const NavItems = () => (
    <>
      <Link
        href="/sobremim"
        className="text-sm font-medium hover:text-orange-600 hover:dark:text-orange-500 dark:text-primary transition-all duration-600 ease-in-out"
      >
        Sobre
      </Link>
      <Link
        href="#skills"
        className="text-sm font-medium hover:text-orange-600 hover:dark:text-orange-500 dark:text-primary transition-all duration-600 ease-in-out"
      >
        Habilidades
      </Link>
      <Link
        href="#projects"
        className="text-sm font-medium hover:text-orange-600 hover:dark:text-orange-500 dark:text-primary transition-all duration-600 ease-in-out"
      >
        Projetos
      </Link>
      <Link
        href="/services"
        className="text-sm font-medium hover:text-orange-600 hover:dark:text-orange-500 dark:text-primary transition-all duration-600 ease-in-out "
      >
        Serviços
      </Link>
      <Link
        href="#form"
        className="text-sm font-medium  hover:text-orange-600 hover:dark:text-orange-500 dark:text-primary transition-all duration-600 ease-in-out"
      >
        Contato
      </Link>
    </>
  );

  return (
    <nav className="z-20 dark:text-white dark:bg-secondary border-b">
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
            <Button
              variant="outline"
              className="dark:bg-secondary border-black	dark:border-white hover:text-blue-700 transition-all duration-300 ease-in-out hover:scale-105 "
            >
              Currículo
            </Button>
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
