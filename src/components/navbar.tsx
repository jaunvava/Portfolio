"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const NavItems = () => (
    <>
      <Link
        href="#about"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Sobre
      </Link>
      <Link
        href="#skills"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Habilidades
      </Link>
      <Link
        href="#projects"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Projetos
      </Link>
      <Link
        href="#servicos"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Serviços
      </Link>
      <Link
        href="#clientes-1"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Clientes
      </Link>
      <Link
        href="#form"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Contato
      </Link>
    </>
  );

  return (
    <nav className="dark:text-primary border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-7">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/terminal.svg"
              alt="João"
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>

          {/* Links de navegação centralizados */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <div className="flex items-baseline space-x-4">
              <NavItems />
            </div>
          </div>

          {/* Botão Currículo (hidden on mobile) */}
          <div className="hidden md:block">
            <Button variant="outline">Currículo</Button>
          </div>

          {/* Botão de menu móvel */}
          <div className="md:hidden bg-white">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2"
                  onClick={toggleSidebar}
                >
                  <span className="sr-only">Open menu</span>
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col space-y-4 mt-4">
                  <NavItems />
                  <Button variant="outline" className="w-full">
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
