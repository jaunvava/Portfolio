import {
  Instagram,
  Linkedin,
  Github,
  Terminal,
  Mail,
  Phone,
  Lightbulb,
  Hand,
  Info,
  MapPin,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/app/_providers/toggle-mode";
import { AvatarDemo } from "../../components/sobremim-components/avatar-image";
import Link from "next/link";

export default function FooterMain() {
  return (
    <footer className="bg-gray-600 dark:bg-gray-900 text-gray-300 dark:text-gray-300 ">
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-7xl">
        {/* div englobando o conteudo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Parte do sobre mim breve */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Terminal className="w-10 h-10 text-orange-500" />
            </Link>
            <p className="text-sm">
              Estou sempre aberto a novas oportunidades e colaborações. Sinta-se
              à vontade para entrar em contato comigo através das plataformas
              abaixo.
            </p>
          </div>

          {/* Links Projetos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Projetos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline hover:text-orange-600 duration-300"
                >
                  Projeto 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline hover:text-orange-600 duration-300"
                >
                  Projeto 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline hover:text-orange-600 duration-300"
                >
                  Projeto 3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline hover:text-orange-600 duration-300"
                >
                  Projeto 4
                </a>
              </li>
            </ul>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className="text-sm hover:underline hover:text-orange-600 duration-300"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="/services#servicos"
                  className="text-sm hover:underline hover:text-orange-600 duration-300"
                >
                  Produtos
                </a>
              </li>
              <li className="flex gap-2">
                <a
                  href="/resumo"
                  className="text-sm hover:underline hover:text-orange-600 duration-300 "
                >
                  Sobre Mim
                </a>
              </li>
              <li className="flex gap-2">
                <a
                  href="#"
                  className="text-sm hover:underline hover:text-orange-600 duration-300"
                >
                  Ajuda
                </a>
              </li>
            </ul>
          </div>

          {/* Links Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <Info className="h-4 w-4" />
                <a
                  href="/services#duvidas"
                  className="text-sm hover:underline hover:text-orange-600 duration-300"
                >
                  Dúvidas
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="h-4 w-4" />
                <a className="text-sm hover:underline hover:text-orange-600 duration-300">
                  Brasil
                </a>
              </li>
              <li className="flex gap-2">
                <Copy className="h-4 w-4" />
                <a
                  href="jpdevcontato@gmail.com"
                  className="text-sm hover:underline hover:text-orange-600 duration-300 "
                >
                  jpdevcontato@gmail.com
                </a>
              </li>
              <li className="flex gap-2">
                <Copy className="h-4 w-4" />
                <a
                  href="#"
                  className="text-sm hover:underline hover:text-orange-600 duration-300"
                >
                  (83)99345-0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer do Rodapé */}
        <Separator className="my-8 bg-gray-500" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ">
          <div className="flex space-x-4">
            <a
              href="#"
              target=" 
              _blank"
              className="text-gray-300 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-600"
            >
              <Instagram className="h-6 w-6 hover:scale-105 transition-all duration-300 ease-in-out" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/joaopedrosouzs/"
              target="_blank"
              className="text-gray-300 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-600 "
            >
              <Linkedin className="h-6 w-6 hover:scale-105 transition-all duration-300 ease-in-out" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/jaunvava"
              target="
              _blank"
              className="text-gray-300 dark:text-gray-300 hover:text-orange-600  dark:hover:text-orange-600"
            >
              <Github className="h-6 w-6 hover:scale-105 transition-all duration-300 ease-in-out" />
              <span className="sr-only">GitHub</span>
            </a>
            <ModeToggle />
          </div>
          <p className="text-sm text-gray-300 dark:text-gray-300 sm:text-center">
            &copy; {new Date().getFullYear()} João Pedro Cruz. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
