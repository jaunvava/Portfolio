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
      <Card className="bg-zinc-600 dark:bg-#0F0E17 shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center"
            >
              <span className="text-sm text-orange-600 font-medium">
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
      year: "2025",
      title: "Faculdade",
      description:
        "Iniciando minha graduação em Ciencia da Computação na Universidade Católica da Paraíba.",
    },
    {
      year: "20XX",
      title: "Em desenvolvimento",
      description: "Em desenvolvimento",
    },
    {
      year: "20XX",
      title: "Em desenvolvimento",
      description: "Em desenvolvimento",
    },
    {
      year: "20XX",
      title: "Em desenvolvimento",
      description: "Em desenvolvimento",
    },
  ];

  return (
    <section className="bg-#16161A mt-24">
      <div className="max-w-4xl mx-auto p-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 pt-20 text-center"
        >
          Conheça um pouco da{" "}
          <span className="text-orange-500 ">minha trajetória</span>!
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
    </section>
  );
}
