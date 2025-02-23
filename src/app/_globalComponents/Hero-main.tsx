"use client";

import Image from "next/image";
import {
  GitlabIcon as GitHub,
  Linkedin,
  Mail,
  ArrowDown,
  ChevronsDown,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HeroMain() {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br mt-8"
    >
      {/* Programming-themed Background */}
      <div className="absolute inset-0 z-0">
        {/* <Image src="/perfil.jpg" alt="jp" width={100} height={200} /> */}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              João Pedro Cruz
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Desenvolvedor Full Stack
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Crafting exceptional digital experiences with modern web
              technologies. Specialized in building scalable full-stack
              applications using MongoDB, Express.js, React, and Node.js.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="#"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="GitHub Profile"
              >
                <GitHub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:musmanzafar53@gmail.com"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
            <motion.button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-orange-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sobre
              <ArrowDown className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-3xl transform rotate-6 opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 rounded-3xl transform -rotate-6 opacity-50"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/perfil.jpg"
                  alt="jp"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <ChevronsDown className="animate-pulse" />
      </motion.div>
    </section>
  );
}
