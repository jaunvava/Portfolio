"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Layout,
  GitBranch,
  Layers,
  Cpu,
  Globe,
  Workflow,
} from "lucide-react";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import TechStack from "./sessao-techstack";

const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
);

const skills = [
  {
    icon: Code,
    name: "Desenvolvimento Frontend",
    tech: "React.js, Next.js, Angular",
    description:
      "Crio interfaces de usuário responsivas é interativas com recursos modernos para desempenho ideal.",
    color: "text-blue-500",
  },
  {
    icon: Server,
    name: "Desenvolvimento Backend",
    tech: "Java, Python, Node.js, Express ",
    description:
      "Criação de aplicativos robustos do lado do servidor com foco em escalabilidade e arquitetura limpa.",
    color: "text-green-500",
  },
  {
    icon: Database,
    name: "Gerenciamento de banco de dados",
    tech: "MongoDB, PostgreSQL",
    description:
      "Projetar e implementar esquemas e consultas de banco de dados eficientes para gerenciamento ideal de dados.",
    color: "text-purple-500",
  },
  {
    icon: Layout,
    name: "UI/UX Design",
    tech: "Tailwind CSS, SASS",
    description:
      "Criando interfaces de usuário bonitas e intuitivas com princípios e estruturas de design modernos.",
    color: "text-pink-500",
  },
  {
    icon: GitBranch,
    name: "Controle de versão",
    tech: "Git, GitHub",
    description:
      "Gerenciando versões de código de forma eficiente com o Git e colaborando efetivamente por meio do GitHub.",
    color: "text-orange-500",
  },
  {
    icon: Layers,
    name: "Gestão do Estado",
    tech: "Redux, Context API",
    description:
      "Gerenciando o estado complexo de aplicativos com soluções modernas de gerenciamento de estado.",
    color: "text-indigo-500",
  },
  {
    icon: Cpu,
    name: "Desenvolvimento de API",
    tech: "REST",
    description:
      "Projetando e implementando APIs eficientes para comunicação de dados perfeita.",
    color: "text-red-500",
  },
  {
    icon: Globe,
    name: "Desempenho da Web",
    tech: "Otimização, SEO",
    description:
      "Otimizando aplicativos web para velocidade, acessibilidade e visibilidade em mecanismos de busca..",
    color: "text-teal-500",
  },
  {
    icon: Workflow,
    name: "Metodologias Ágeis",
    tech: "Scrum, Kanban",
    description:
      "Trabalhar eficientemente em ambientes ágeis com foco na entrega contínua.",
    color: "text-cyan-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        <AnimatedSectionHeader title="Habilidades" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.tech}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* tecnologias */}
      <div>
        <TechStack />
      </div>
    </section>
  );
}
