// * esse componente está sendo utilizado apenas para teste !!!

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Terminal, X } from "lucide-react";
import { Button } from "./ui/button";

const NavbarMainTeste = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-20 fixed top-4 left-4 right-4">
      {/* Barra layout desktop */}
      <div className="max-w-5xl mx-auto rounded-lg shadow-lg p-3 backdrop-blur-sm bg-black/20 dark:bg-gray-600/90">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <Terminal className="h-9 w-9" />
          </Link>
          <div className="hidden md:flex space-x-4 absolute left-1/2 transform -translate-x-1/2 gap-4">
            <Link
              href="/services"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300"
            >
              Serviços
            </Link>
            <Link
              href="#projects"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300"
            >
              Projetos
            </Link>
            <Link
              href="#skills"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300"
            >
              Habilidades
            </Link>
            <Link
              href="/resumo"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300"
            >
              Resumo
            </Link>
            <Link
              href="/contact"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300"
            >
              Contato
            </Link>
          </div>
          <div className="hidden md:block">
            <Button
              asChild
              className="text-lg text-white rounded-lg bg-orange-500 hover:bg-orange-600"
            >
              <Link target="_blank" href="/curriculojoaopedro.pdf">
                Curriculo
              </Link>
            </Button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <X className="h-8 w-8 transition-transform duration-300 ease-in-out transform rotate-180" />
              ) : (
                <Menu className="h-8 w-8 transition-transform duration-300 ease-in-out" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-65 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Barra layout mobile */}
        <div className="max-w-5xl mx-auto backdrop-blur-sm bg-black/20 dark:bg-gray-600/90 rounded-b-lg shadow-lg">
          <div className="py-2 space-y-2 items-center">
            <Link
              href="/"
              className="block py-2 px-4 hover:bg-gray-600 rounded"
            >
              Serviços
            </Link>
            <Link
              href="/about"
              className="block py-2 px-4 hover:bg-gray-600 rounded"
            >
              Projetos
            </Link>
            <Link
              href="/services"
              className="block py-2 px-4 hover:bg-gray-600 rounded"
            >
              Habilidades
            </Link>
            <Link
              href="/contact"
              className="block py-2 px-4 hover:bg-gray-600 rounded"
            >
              Resumo
            </Link>
            <Link
              href="/contact"
              className="block py-2 px-4 hover:bg-gray-600 rounded"
            >
              Contato
            </Link>
            <Link
              href="/CurriculoJoaoPedro.pdf"
              className="block py-2 px-4 hover:bg-gray-600 rounded"
            >
              Currículo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMainTeste;
