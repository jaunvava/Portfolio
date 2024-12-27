"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-purple-600 to-blue-600 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl">Scroll down to explore more</p>
        </div>
        {isVisible && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={handleClick}
          >
            <ChevronDown size={40} />
          </motion.div>
        )}
      </section>
      <section
        id="next-section"
        className="h-screen flex items-center justify-center bg-gray-100"
      >
        <h2 className="text-3xl font-bold">Next Section Content</h2>
      </section>
    </>
  );
}
