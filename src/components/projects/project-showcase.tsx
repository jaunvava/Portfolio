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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
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
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => window.open(project.codeUrl, "_blank")}
                >
                  <Code className="w-4 h-4 mr-2" />
                  Código
                </Button>
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
