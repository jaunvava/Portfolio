import { Button } from "@/components/ui/button";
import { CheckSquare, Lightbulb, Users, Key } from "lucide-react";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <div className="min-h-screen bg-zinc-500 dark:bg-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Quality Feature */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <CheckSquare className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
            <p className="text-gray-400 text-sm">
              Excelência e Atenção aos Detalhes
            </p>
          </div>

          {/* Proactivity Feature */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Lightbulb className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Proatividade</h3>
            <p className="text-gray-400 text-sm">
              Iniciativa e Resolução de Problemas
            </p>
          </div>

          {/* Collaboration Feature */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Colaboração</h3>
            <p className="text-gray-400 text-sm">
              Trabalho em Equipe e Comunicação
            </p>
          </div>

          {/* Adaptability Feature */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Key className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Adaptabilidade</h3>
            <p className="text-gray-400 text-sm">
              Flexibilidade e Aprendizado Rápido
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="dark:bg-zinc-700 rounded-lg p-16 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Vamos trabalhar juntos e criar produtos incríveis?
          </h2>
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-whit"
          >
            <Link href="/contact">Entre em Contato</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
