import {
  Instagram,
  Linkedin,
  Github,
  Terminal,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/app/providers/toggle-mode";
import { AvatarDemo } from "../../components/avatar-image";

export default function FooterMain() {
  return (
    <footer className="bg-gray-600 dark:bg-gray-700 text-gray-300 dark:text-gray-300 ">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Parte do sobre mim breve */}
          <div className="flex flex-col gap-4">
            <Terminal className="w-8 h-8" />
            <p className="text-sm">
              Estou sempre aberto a novas oportunidades e colaborações. Sinta-se
              à vontade para entrar em contato comigo através de qualquer uma
              das plataformas abaixo.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm hover:underline hover:text-orange-600 duration-300"
                >
                  Home
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
              <li>
                <a
                  href="/services"
                  className="text-sm hover:underline hover:text-orange-600 duration-300"
                >
                  Serviços
                </a>
              </li>
              <li>
                <ModeToggle />
              </li>
            </ul>
          </div>

          {/* Links Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services#duvidas"
                  className="text-sm hover:underline hover:text-orange-600 duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline hover:text-orange-600 duration-300"
                >
                  Ajuda
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-5 w-5" />
                <a
                  href="jpdevcontato@gmail.com"
                  className="text-sm hover:underline hover:text-orange-600 duration-300 "
                >
                  jpdevcontato@gmail.com
                </a>
              </li>
              <li className="flex gap-2">
                <Phone className="h-5 w-5" />
                <a
                  href="#"
                  className="text-sm hover:underline hover:text-orange-600 duration-300"
                >
                  (83) 9 9345-0000
                </a>
              </li>
            </ul>
          </div>

          {/* parte do avatar + email */}
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-sm mb-4">
                Fique atualizado com nossas últimas novidades e ofertas.
              </p>
              <form className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Seu Email"
                  className="flex-grow border-white"
                />
                <Button
                  type="submit"
                  className="text-white bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-orange-500/50"
                >
                  Se Inscrever
                </Button>
              </form>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold">Created by</p>
              <AvatarDemo />
            </div>
          </div>
        </div>

        {/* Footer do Rodapé */}
        <Separator className="my-8 bg-black" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ">
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-300 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-600"
            >
              <Instagram className="h-6 w-6 hover:scale-105 transition-all duration-300 ease-in-out" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-gray-300 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-600 "
            >
              <Linkedin className="h-6 w-6 hover:scale-105 transition-all duration-300 ease-in-out" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="#"
              className="text-gray-300 dark:text-gray-300 hover:text-orange-600  dark:hover:text-orange-600"
            >
              <Github className="h-6 w-6 hover:scale-105 transition-all duration-300 ease-in-out" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
          <p className="text-sm text-gray-300 dark:text-gray-300">
            &copy; {new Date().getFullYear()} João Pedro Cruz. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
