"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TimelineItem = ({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative"
    >
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center"
            >
              <span className="text-sm text-indigo-600 font-medium">
                {year}
              </span>
            </motion.div>
            <div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Timeline() {
  const timelineItems = [
    {
      year: "2020",
      title: "Faculdade",
      description:
        "Iniciando minha graduação em análise e desenvolvimento de sistemas através do Instituto Federal de Educação, Ciência e Tecnologia da Paraíba.",
    },
    {
      year: "2021",
      title: "Loopis Soluções Tecnológicas",
      description:
        "Começando minha jornada na área de desenvolvimento de sistemas como consultor júnior na empresa de tecnologia, onde posteriormente passaria ao cargo de Diretor de Projetos.",
    },
    {
      year: "2023",
      title: "Conceito Máximo Enade",
      description:
        "Tive a oportunidade atuar como desenvolvedor full stack na empresa, onde desenvolvi uma plataforma para criar e analisar resultados de simulados de uma instituição de nível superior.",
    },
    {
      year: "2024",
      title: "Até o momento",
      description: "Atuando como freelancer em desenvolvimento full-stack.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-8"
      >
        Conheça um pouco da{" "}
        <span className="text-indigo-600">minha trajetória</span>!
      </motion.h1>

      <div className="relative">
        <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-indigo-100" />

        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
