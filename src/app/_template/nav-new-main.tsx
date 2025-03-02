"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Terminal, X } from "lucide-react";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";

const NavbarNewMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="z-30 fixed top-4 left-4 right-4"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      {/* Barra layout desktop */}
      <div className="max-w-5xl mx-auto rounded-lg shadow-lg p-3 outline-blue-500 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <Terminal className="h-9 w-9 hover:scale-110 transition-all" />
          </Link>
          <div className="hidden md:flex space-x-4 absolute left-1/2 transform -translate-x-1/2 gap-4">
            <Link
              href="/"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300 antialiased"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300 antialiased"
            >
              Serviços
            </Link>
            <Link
              href="#projetos"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300 antialiased"
            >
              Projetos
            </Link>
            <Link
              href="#skills"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300 antialiased"
            >
              Habilidades
            </Link>
            <Link
              href="/dev"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300 antialiased"
            >
              Resumo
            </Link>
            <Link
              href="#contato"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300 antialiased"
            >
              Contato
            </Link>
          </div>

          {/* botão currículo */}
          <div className="hidden md:block">
            <Button
              asChild
              className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
            >
              <Link target="_blank" href="/curriculojoaopedro.pdf">
                Curriculo
              </Link>
            </Button>
          </div>

          {/* script para aba mobile */}
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
        <div className="max-w-5xl mx-auto backdrop-blur-sm bg-black/20 rounded-b-lg shadow-lg">
          <div className="py-2 space-y-2 items-center">
            <Link href="/services" className="block py-2 px-4 rounded">
              Serviços
            </Link>
            <Link href="#projetos" className="block py-2 px-4 rounded">
              Projetos
            </Link>
            <Link href="#skills" className="block py-2 px-4 rounded">
              Habilidades
            </Link>
            <Link href="/resumo" className="block py-2 px-4 rounded">
              Resumo
            </Link>
            <Link href="#contato" className="block py-2 px-4 rounded">
              Contato
            </Link>
            <Link
              href="/curriculojoaopedro.pdf"
              className="block py-2 px-4 rounded"
            >
              Currículo
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavbarNewMain;
