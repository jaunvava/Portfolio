import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Terminal,
  Github,
  Mails,
  SquareArrowOutUpRight,
} from "lucide-react";
import { ModeToggle } from "@/app/providers/toggle-mode";
import { Button } from "../../components/ui/button";

export default function Footerlayout() {
  return (
    <footer className=" bg-gray-600 dark:bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0 flex flex-col gap-3">
            <Terminal className="h-10 w-10" />
            <Button className="w-40 bg-orange-600 hover:bg-orange-600 text-white rounded-full font-bold py-2 px-4 transition hover:scale-105 duration-500 text-lg shadow-lg shadow-orange-500/50">
              Curriculo
              <SquareArrowOutUpRight size="h-[5]" />
            </Button>
          </div>

          {/* links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rapidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-orange-600 transition-colors duration-300 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/sobremim"
                  className="text-sm hover:text-orange-600 transition-colors duration-300 hover:underline"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-orange-600 transition-colors duration-300 hover:underline"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <ModeToggle />
              </li>
            </ul>
          </div>

          {/* Parte das Páginas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Páginas</h3>
            <div className="flex space-x-4">
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-orange-500 duration-300 transition-colors hover:underline"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-orange-500 duration-300 transition-colors hover:underline"
                  >
                    Meu Propósito
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-orange-500 duration-300 transition-colors hover:underline "
                  >
                    Linha do Tempo
                  </a>
                </li>
                <li>
                  <a
                    href="404@gmail.com"
                    className="text-sm hover:text-orange-500 duration-300 transition-colors hover:underline"
                  >
                    404
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Parte do contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-gray-400">PB Brasil</p>
            <p className="text-gray-400">City, State 12345</p>
            <p className="text-gray-400">Email: jpdevcontato@gmail.com</p>
            <p className="text-gray-400">Telefone: (83) 9 9345-0000</p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} João Pedro Cruz. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
