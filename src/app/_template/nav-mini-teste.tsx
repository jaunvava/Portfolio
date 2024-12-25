// ? esse componente está sem uso soemnete para teste no momento !!!
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbarteste = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-20 bg-gray-400 rounded-lg px-4 sm:px-6 lg:px-8 mt-4">
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-bold text-indigo-600">
              Logo
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
              >
                About
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
              >
                Services
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              href="/"
              className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              Currículo
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <Link
              href="/curriculo"
              className="bg-indigo-600 text-white hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Currículo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbarteste;
