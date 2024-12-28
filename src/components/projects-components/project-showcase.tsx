"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Rocket } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  deployUrl: string;
  codeUrl: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function ProjectShowcaseAmost({
  projects,
}: ProjectShowcaseProps) {
  return (
    <section className="dark:bg-secondary py-12 bg-zinc-500 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col dark:bg-zinc-700">
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <Link
                  href={``}
                  className="text-sm font-light hover:border-b hover:text-blue-500 duration-300"
                >
                  Leia mais
                </Link>
              </CardContent>
              <CardFooter className="flex justify-between">
                {/* Botão do código */}
                <Button
                  className="dark:bg-gray-800"
                  variant="outline"
                  onClick={() => window.open(project.codeUrl, "_blank")}
                >
                  <Code className="w-4 h-4 mr-2" />
                  Código
                </Button>
                {/* Botão do deploy */}
                <Button
                  onClick={() => window.open(project.deployUrl, "_blank")}
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  Deploy
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
