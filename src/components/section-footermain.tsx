import Link from "next/link";
import { Instagram, Linkedin, Terminal, Github, Mails } from "lucide-react";
import { ModeToggle } from "@/app/providers/toggle-mode";

export default function FooterSobre() {
  return (
    <footer className=" bg-gray-700 dark:bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0 flex flex-col gap-4">
            <Terminal className="h-10 w-10" />
            <p className="text-gray-400">
              Estou sempre aberto a novas oportunidades e colaborações. Sinta-se
              à vontade para entrar em contato comigo através de qualquer uma
              das plataformas ao lado.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rapidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="hover:text-gray-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/sobremim"
                  className="hover:text-gray-300 transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gray-300 transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <ModeToggle />
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-gray-400">PB Brasil</p>
            <p className="text-gray-400">City, State 12345</p>
            <p className="text-gray-400">Email: jpdevcontato@gmail.com</p>
            <p className="text-gray-400">Telefone: (83) 9 9345-0000</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Siga me</h3>
            <div className="flex space-x-4">
              <a
                href="maito:jpdevcontato@gmail.com"
                target="_blank"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Mails size={24} />
              </a>
              <a
                href="https://github.com/jaunvava"
                target="_blank"
                className="text-gray-400 hover:text-black transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.instagram.com/jpedrosouzs?igsh=MWk0dHl1dGRhaDR4ZA=="
                target="_blank"
                className="text-gray-400 hover:text-yellow-900 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/joaopedrosouzs/"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
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
