import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PresentationSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br dark:bg-from-gray-700 dark:to-gray-900 from-blue-100 to-purple-100 p-8">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
            João Pedro Cruz
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600 dark:text-white max-w-md">
            Desenvolvedor web apaixonado por criar experiências digitais
            incríveis. Especializado em React, Next.js e design responsivo.
          </p>
          <Button asChild className="w-40 md:w-auto">
            <Link href="/resumo">Saiba Mais</Link>
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/perfil.jpg?height=600&width=600"
              alt="João Silva"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
