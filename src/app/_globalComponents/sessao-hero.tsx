"use client";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroMain() {
  return (
    <section
      id="home"
      className="mt-10 mb-10 p-6 md:p-12 lg:p-16 relative overflow-hidden"
    >
      <div className="flex items-center justify-center text-center max-w-[1920px] sm:text-left p-8 md:p-12 lg:p-16 flex-col md:flex-row md:justify-center relative sm:my-10">
        <motion.div
          className="space-y-8 md:w-1/2 z-10"
          initial={{ opacity: 0, x: -100, y: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <p className="text-xl">Olá, eu sou</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              João Pedro Cruz
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF6B00]">
              Desenvolvedor Full Stack
            </h2>

            {/* Redes sociais */}
            <div className="flex gap-4 items-center justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/joaopedrosouzs/"
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
                className="bg-orange-500 hover:bg-orange-500 text-white hover:scale-105 duration-300 transition-all"
              >
                <Link href="/resumo">Saiba Mais</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="text-gray-800 border-gray-400 hover:text-gray-800 hover:border-white hover:scale-105 duration-300 transition-all"
              >
                <Link target="_blank" href="/curriculojoaopedro.pdf">
                  Visualizar CV
                </Link>
              </Button>
            </div>

            {/* expereciencia */}
            <div className="flex gap-8 mt-12">
              <div className="space-y-2">
                <p className="text-orange-600 text-3xl font-bold">+3</p>
                <p className="text-sm text-gray-400">Experiencia</p>
              </div>
              <div className="space-y-2">
                <p className="text-orange-600 text-3xl font-bold">+10</p>
                <p className="text-sm text-gray-400">Projetos</p>
              </div>
              <div className="space-y-2">
                <p className="text-orange-600 text-3xl font-bold">+5</p>
                <p className="text-sm text-gray-400">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end relative z-10"
          initial={{ opacity: 0, x: 100, y: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-zinc-800">
            <Image
              src="/perfil.jpg"
              alt="Portfolio Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
