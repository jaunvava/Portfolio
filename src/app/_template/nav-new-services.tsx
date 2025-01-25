"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Terminal, X } from "lucide-react";

const NavbarNewServices = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-20 fixed top-4 left-4 right-4">
      {/* Barra layout desktop */}
      <div className="max-w-3xl mx-auto rounded-lg shadow-lg p-3 backdrop-blur-sm bg-black/20 dark:bg-gray-600/90">
        {/* links + botão currículo */}
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <Terminal className="h-9 w-9 hover:scale-110 transition-all" />
          </Link>

          {/* Links */}
          <div className="hidden md:flex space-x-4 absolute left-1/2 transform -translate-x-1/2 gap-4">
            <Link
              href="/"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300"
            >
              Home
            </Link>
            <Link
              href="#feedbackclientes"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300"
            >
              FeedBack
            </Link>
            <Link
              href="#cta"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300"
            >
              Clientes
            </Link>
            <Link
              href="#duvidas"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300"
            >
              Dúvidas
            </Link>
            <Link
              href="/page"
              className="hover:text-orange-500 text-xl transition-colors ease-in-out duration-300"
            >
              Contato
            </Link>
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
            <Link href="/" className="block py-2 px-4 rounded">
              Home
            </Link>
            <Link href="#feedbackclientes" className="block py-2 px-4 rounded">
              FeedBack
            </Link>
            <Link href="#cta" className="block py-2 px-4 rounded">
              Clientes
            </Link>
            <Link href="#duvidas" className="block py-2 px-4 rounded">
              Dúvidas
            </Link>
            <Link href="/page" className="block py-2 px-4 rounded">
              Contato
            </Link>
            <Link
              href="/CurriculoJoaoPedro.pdf"
              className="block py-2 px-4 rounded"
            >
              Currículo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNewServices;
