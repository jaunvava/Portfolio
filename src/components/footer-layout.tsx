import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  SquareArrowOutUpRight,
  Github,
} from "lucide-react";
import { Button } from "./ui/button";

export default function FooterLayout() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 ">
        <div className="flex-col md:flex-row justify-between items-start md:items-center grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e botão esquerda */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <svg
                className="h-10 w-10 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="ml-3 text-xl font-bold">Logo</span>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-bold py-2 gap-2 px-4 transition hover:scale-105 duration-300">
              Curriculo
              <SquareArrowOutUpRight size="h-[120]" />
            </Button>
          </div>
          {/* Links Centrais */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Links Rápidos</h1>
            <a
              href="/"
              className="flex items-center hover:text-orange-600 transition duration-300"
            >
              Home
            </a>
            <a
              href="#inicio"
              className="flex items-center hover:text-orange-600 transition duration-300"
            >
              Inicio
            </a>
            <a
              href="#"
              className="flex items-center hover:text-orange-600 transition duration-300"
            >
              Serviços
            </a>
          </div>

          {/* Links da direita*/}
          <div className="grid grid-cols-1 gap-4">
            <h1 className="text-xl font-bold">Contato</h1>
            <a
              href="maito:jpdevcontato@gmail.com"
              className="flex items-center hover:text-orange-600 transition duration-300"
            >
              <Mail className="h-5 w-5 mr-2" />
              jpdevcontato@gmail.com
            </a>

            <a
              href="#"
              className="flex items-center hover:text-orange-600 transition duration-300"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
            <a
              href="#"
              className="flex items-center hover:text-orange-600 transition duration-300"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Instagram
            </a>
            <a
              href="#"
              className="flex items-center hover:text-orange-600 transition duration-300"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          © {new Date().getFullYear()} João Pedro Cruz.{" "}
          <p className="hover:text-orange-600">Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
