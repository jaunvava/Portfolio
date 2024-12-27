"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Timeline from "./sessao-timeline";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ScrollArrowSectionApresentation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-white bg-gradient-to-br dark:bg-from-gray-700 dark:to-gray-900 from-blue-100 to-purple-100 p-8">
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
        {isVisible && (
          <motion.div
            className="absolute bottom-8 left-1/1 transform -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={handleClick}
          >
            <ChevronDown size={40} className="text-black dark:text-white" />
          </motion.div>
        )}
      </section>
      <section
        id="next-section"
        className="h-screen flex-row justify- bg-gray-100"
      >
        <Timeline />
      </section>
    </>
  );
}
