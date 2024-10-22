import React from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  SquareArrowOutUpRight,
  Github,
} from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "@/app/providers/toggle-mode";

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
            <Button className="bg-orange-600 hover:bg-orange-600 text-white rounded-lg font-bold py-2 gap-2 px-4 transition hover:scale-105 duration-500 text-lg shadow-lg shadow-orange-500/50">
              Curriculo
              <SquareArrowOutUpRight size="h-[120]" />
            </Button>
          </div>
          {/* Links Centrais */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Links Rápidos</h1>
            <a
              href="/"
              className="flex items-center hover:text-orange-600 transition duration-400"
            >
              Home
            </a>
            <a
              href="#inicio"
              className="flex items-center hover:text-orange-600 transition duration-400"
            >
              Inicio
            </a>
            <a
              href="/services"
              className="flex items-center hover:text-orange-600 transition duration-400"
            >
              Serviços
            </a>
            <ModeToggle />
          </div>

          {/* Links da direita*/}
          <div className="grid grid-cols-1 gap-4">
            <h1 className="text-xl font-bold">Contato</h1>
            <a
              href="maito:jpdevcontato@gmail.com"
              className="flex items-center hover:text-orange-600 transition duration-400"
            >
              <Mail className="h-5 w-5 mr-2" />
              jpdevcontato@gmail.com
            </a>

            <a
              href="#"
              className="flex items-center hover:text-orange-600 transition duration-400"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
            <a
              href="#"
              className="flex items-center hover:text-orange-600 transition duration-400"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          © {new Date().getFullYear()} João Pedro Cruz. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
