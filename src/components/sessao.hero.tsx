import React from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-secondary">
      {/* Fundo com degradê radial */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 via-blue-900 to-black opacity-70"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
          <span className="block">João Pedro Cruz</span>
          <span className="block text-blue-300">Programador</span>
        </h1>
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-blue-300 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-150 ease-in-out">
          Saiba Mais
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
