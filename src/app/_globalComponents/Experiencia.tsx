"use client";

import { Briefcase, Calendar, MapPin, Globe, Contact } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

export default function Experience() {
  const experiences = [
    {
      empresa: "Freelance",
      local: "Remote",
      funcao: "Colaborador",
      periodo: "2024 - Present",
      cargo: "MERN Stack Developer",
      responsibilities: [
        "Developing custom web applications for international clients",
        "Building responsive and scalable frontend interfaces with React",
        "Implementing secure backend systems with Node.js and Express",
        "Creating RESTful APIs and managing MongoDB databases",
        "Collaborating with clients to deliver high-quality solutions",
      ],
    },
    {
      empresa: "Ap2 Soluções",
      local: "Paraíba, Brasil (Remoto)",
      funcao: "Colaborador",
      periodo: "2024 - Ao momento",
      cargo: "Análista de Sistemas",
      responsibilities: [
        "Developed full-fledged ERP system using MERN stack",
        "Designed and implemented RESTful APIs",
        "Created responsive interfaces with React.js and Redux",
        "Implemented secure authentication systems",
        "Utilized WebSockets for real-time features",
      ],
    },
    {
      empresa: "AM3 Soluções",
      local: "Paraíba, Brasil (Presencial)",
      funcao: "Estagiário",
      periodo: "2021 - 2022",
      cargo: "Técnico de Infraestrutura",
      responsibilities: [
        "Manter é otimizar um banco de dados em nuvem",
        "Manuntenção de servidores de redes é computadores",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br  transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Experiência profissional" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-orange-500 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.empresa === "Freelance" ? (
                    <Globe className="w-6 h-6 mr-2 text-blue-500" />
                  ) : null}
                  {exp.empresa}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.local}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.periodo}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Contact className="w-4 h-4 mr-2" />
                  {exp.funcao}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.cargo}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
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
