"use client";

import { GraduationCap, Calendar, Award } from "lucide-react";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Bacharelado em Ciência da Computação",
      institution: "Faculdade Católica da Paraíba",
      period: "2025 – 2028",
      achievements: [
        "Desenvolvimento de Software",
        "Programação Web",
        "Todo o período que estudei nessa instituição foi de suma importância para minha formação profissional",
      ],
    },
    {
      degree: "Informática é Programação",
      institution: "ETEC/ECIT - Nicéia Claudino Pinheiro",
      period: "2019 – 2021",
      achievements: [
        "lógica de Programação",
        "Programação Web",
        "Todo o período que estudei nessa instituição foi de suma importância para minha formação profissional",
      ],
    },
  ];

  return (
    <section
      id="educacao"
      className="py-20 bg-gradient-to-br transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Educação" />
        <div className="sm:flex mx-auto gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500 rounded-br-full opacity-60"></div>
              <div className="relative z-20">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  {edu.degree}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </p>
                <h4 className="text-lg font-medium mb-2 dark:text-gray-200 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Principais conquistas:
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
