import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

const technologies = [
  { name: "JavaScript", icon: "/icons-javascript.svg" },
  { name: "TypeScript", icon: "/icons-typescript.svg" },
  { name: "Java", icon: "/icons-java-96.svg" },
  { name: "SpringBot", icon: "/icons-spring-boot.svg" },
  { name: "Nodejs", icon: "/icons-nodejs.svg" },
  { name: "Python", icon: "/icons-python.svg" },
  { name: "Angular", icon: "/icons-angular-96.svg" },
  { name: "React", icon: "/icons-react-96.svg" },
  { name: "Nextjs", icon: "icons-nextjs.svg" },
  { name: "Vite", icon: "/icons-vite.svg" },
  { name: "Sass", icon: "/icons-sass.svg" },
  { name: "TailwindCSS", icon: "/icons-tailwind-css.svg" },
];

export default function TechStack() {
  return (
    <section id="hero" className="py-16">
      <div className="-z-10 container mx-auto px-4">
        <AnimatedSectionHeader title="Tecnologias" />
        <motion.div
          initial={{ opacity: 0, x: -100, y: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech) => (
              <Card
                key={tech.name}
                className="dark:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105 "
              >
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className="w-16 h-16 mb-4"
                    width={10}
                    height={10}
                  />
                  <span className="text-sm font-medium text-center">
                    {tech.name}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
