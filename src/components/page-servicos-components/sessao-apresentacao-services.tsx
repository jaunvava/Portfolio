"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { MouseIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function SessaoHeroservices() {
  return (
    <section className="h-screen flex flex-col items-center relative overflow-hidden bg-green-900">
      <div className="" />

      <div className="z-10 text-center space-y-4">
        <h3 className="text-sm md:text-xl font-bold text-gray-400">
          Novo curso focado em instagram
        </h3>
        <h1 className="text-7xl md:text-7xl text-white/80">
          Destrave as suas habilidades
        </h1>

        {/* botões */}
        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            className="mt-4 bg-white text-purple-700 hover:bg-white/90"
          >
            Assinar
          </Button>
          <Button
            size="lg"
            className="mt-4 bg-white text-purple-700 hover:bg-white/90"
          >
            Preços
          </Button>
        </div>

        {/* Mockups */}
        <div className="absolute bottom-0 w-full max-w-sm flex justify-between">
          <Image src="/mockup.svg" alt="mockup" width={200} height={200} />
          <Image src="/mockup.svg" alt="mockup" width={200} height={200} />
        </div>
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
