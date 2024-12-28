"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Timeline from "./sessao-timeline";
import PortfolioLanding from "./sessao-apresentacao";

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
      {/* Sessão de Apresentação */}
      <section className="relative h-screen flex items-center justify-center">
        <PortfolioLanding />
        {isVisible && (
          <motion.div
            className="absolute bottom-8 left-1/1 transform -translate-x-1/1 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={handleClick}
          >
            <ChevronDown size={40} className="text-black dark:text-white" />
          </motion.div>
        )}
      </section>

      {/* Sessão timeline */}
      <section
        id="next-section"
        className="h-screen flex-row justify- bg-zinc-500 dark:bg-zinc-800"
      >
        <Timeline />
      </section>
    </>
  );
}
