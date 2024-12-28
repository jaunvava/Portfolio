import Link from "next/link";
import { SquareArrowOutUpRight, MapPin, Info, Copy } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function Footerlayout() {
  return (
    <footer className=" bg-gray-600 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-2 py-12 md:py-16 max-w-6xl">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Parte do curriculo */}
            <div className="mb-8 md:mb-0 flex flex-col gap-3">
              <p className="text-2xl font-semibold">Desenvolvedor FullStack</p>
              <Button className="w-40 h-10 bg-orange-600 hover:bg-orange-600 text-white rounded-full font-bold py-2 px-4 transition hover:scale-105 duration-500 text-lg shadow-lg shadow-orange-500/50">
                Curriculo
                <SquareArrowOutUpRight size="h-[5]" />
              </Button>
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
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 text-center pt-8 text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} João Pedro Cruz. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
