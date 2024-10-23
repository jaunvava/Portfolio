"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MouseIcon } from "lucide-react";

export default function Introduction() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 opacity-80" />

      <div className="relative z-10 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          João Pedro Cruz
        </h1>
        <h2 className="text-xl md:text-2xl text-white/80">
          Programador Fullstack
        </h2>
        <Button
          size="lg"
          className="mt-4 bg-white text-purple-700 hover:bg-white/90"
        >
          Saiba Mais
        </Button>
      </div>

      <motion.div
        className="absolute bottom-8 z-10"
        initial={{ y: 0, opacity: 0.5 }}
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <MouseIcon className="h-8 w-8 text-white" />
      </motion.div>
    </section>
  );
}
