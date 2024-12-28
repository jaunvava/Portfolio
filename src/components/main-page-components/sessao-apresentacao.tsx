import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioLanding() {
  return (
    <section className="min-h-screen w-full dark:bg-zinc-800 bg-zinc-500 text-white p-6 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      <div className="min-h-screen max-w-8xl w-full text-white p-6 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-center relative overflow-hidden sm:my-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF6B00]/20 via-transparent to-transparent pointer-events-none" />
        <div className="space-y-8 md:w-1/2 z-10">
          <div className="space-y-4">
            <p className="text-xl">Olá, eu sou</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              João Pedro Cruz
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF6B00]">
              Desenvolvedor Full Stack
            </h2>
          </div>

          {/* Redes sociais */}
          <div className="flex gap-4">
            <a
              href="#"
              target="
              _blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/joaopedrosouzs/

"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/jaunvava"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          {/* Links botões */}
          <div className="flex gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#FF6B00] hover:bg-[#e29d6c]/90 text-white"
            >
              <Link href="/resumo">Saiba Mais</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-gray-400 border-gray-400 hover:text-white hover:border-white"
            >
              <Link href="/">Download CV</Link>
            </Button>
          </div>

          <div className="flex gap-8 mt-12">
            <div className="space-y-2">
              <p className="text-[#FF6B00] text-3xl font-bold">+3</p>
              <p className="text-sm text-gray-400">Experiencia</p>
            </div>
            <div className="space-y-2">
              <p className="text-[#FF6B00] text-3xl font-bold">+10</p>
              <p className="text-sm text-gray-400">Projetos</p>
            </div>
            <div className="space-y-2">
              <p className="text-[#FF6B00] text-3xl font-bold">+5</p>
              <p className="text-sm text-gray-400">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end relative z-10">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-zinc-800">
            <Image
              src="/perfil.jpg"
              alt="Portfolio Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
