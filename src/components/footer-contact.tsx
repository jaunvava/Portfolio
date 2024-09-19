import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 h-[400px] flex flex-col justify-between ">
        <div className="flex flex-col md:flex-row justify-between items-center py-8">
          <div className="mb-6 md:mb-0">
            <Image
              src="/terminal.svg"
              alt="Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="text-center max-w-md mx-auto my-6 md:my-0">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Estou sempre aberto a novas oportunidades e colaborações. Sinta-se
              à vontade para entrar em contato comigo através de qualquer uma
              das plataformas ao lado
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-20">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Siga-me
            </h2>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/jpedrosouzs?igsh=MWk0dHl1dGRhaDR4ZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://github.com/jaunvava"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/joaopedrosouzs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:jpdevcontato@gmail.com
"
                className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="container flex justify-between items-center gap-10">
          © {new Date().getFullYear()} João Pedro Cruz. Todos os direitos
          reservados.
          <span className="text-foreground text-xs">
            Designed por João Pedro
          </span>
          <span className="text-foreground text-xs">
            Política de Privacidade
          </span>
        </div>
      </div>
    </footer>
  );
}
