"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { motion } from "framer-motion";

export default function HeroService() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-10.5rem)] flex-col items-center justify-center space-y-8 py-12 md:py-24 text-center"
    >
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, x: -100, y: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="relative z-20 bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
          Inove mais rápido com
          <br />
          os meu serviços
        </h1>
        <p className="relative z-20 mx-auto max-w-[42rem] text-sm leading-normal text-muted-foreground sm:text-base md:text-lg">
          ECapacitando empresas com soluções de software de ponta. De análises
          orientadas por IA a integrações de nuvem perfeitas, estamos moldando o
          futuro da tecnologia.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 relative z-20"
        initial={{ opacity: 0, x: 100, y: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Button size="lg">
          Explore as soluções
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg" className="relative z-20">
          Entre em contato
        </Button>
      </motion.div>
    </section>
  );
}
