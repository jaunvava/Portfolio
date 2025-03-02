"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Smartphone } from "lucide-react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: <Layout className="w-12 h-12 text-blue-500" />,
      title: "Desenvolvimento de aplicações web",
      description:
        "Aplicativos web personalizados desenvolvidos com React e Next.js, com foco em desempenho e experiência do usuário.",
    },
    {
      icon: <Server className="w-12 h-12 text-green-500" />,
      title: "Desenvolvimento Backend",
      description:
        "Soluções robustas e escaláveis ​​do lado do servidor usando Node.js, Java, Python.",
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: "Desenvolvimento de API",
      description:
        "Design e implementação de API RESTful para fluxo de dados perfeito entre cliente e servidor.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-yellow-500" />,
      title: "Design responsivo",
      description:
        "Designs web responsivos e voltados para dispositivos móveis que funcionam perfeitamente em todos os dispositivos e tamanhos de tela.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br  transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-20">
        <motion.h2
          className="z-10 text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Meus Serviços
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-2xl font-semibold ml-4 dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div>
    </section>
  );
}
