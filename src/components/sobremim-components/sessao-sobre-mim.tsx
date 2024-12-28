import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "motion/react";

export default function SobreMIm() {
  return (
    <section className="py-16 dark:bg-zinc-800 bg-zinc-500">
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Mim</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <Card className="hover:shadow-lg hover:dark:hover:bg-zinc-500 hover:bg-zinc-700  transition-all duration-300 ease-in-out dark:text-primary hover:scale-105">
            <CardContent className="p-6 dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Minha Jornada
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Minha paixão pela programação começou há mais de 6 anos, quando
                criei meu primeiro site. Desde então, venho aprimorando minhas
                habilidades e explorando novas tecnologias. Trabalhei em
                projetos desafiadores que me permitiram crescer como
                desenvolvedor e como profissional.
              </p>
            </CardContent>
          </Card>

          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
              <Image
                src="/perfil.jpg"
                alt="Foto do desenvolvedor"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>

          <Card className="hover:shadow-lg hover:bg-zinc-700 dark:bg-zinc-700 transition-all duration-300 ease-in-out dark:text-primary hover:scale-105">
            <CardContent className="p-6 dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Minha Abordagem
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Acredito que a melhor tecnologia é aquela que resolve problemas
                reais. Minha abordagem combina criatividade com pensamento
                analítico para desenvolver soluções eficientes e escaláveis.
                Estou sempre em busca de aprendizado contínuo e adoro enfrentar
                novos desafios que me permitam expandir meus horizontes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
