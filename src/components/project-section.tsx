"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLinkIcon, GithubIcon, EyeIcon } from "lucide-react";

type Project = {
  id: number;
  title: string;
  company: string;
  description: string;
  date: string;
  projectUrl: string;
  deployUrl: string;
  previewContent: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce App",
    company: "Reserva Teu Corte Aí.",
    description:
      "Uma aplicação de comércio eletrônico completa construída com React e Node.js",
    date: "2023-05-15",
    projectUrl: "https://github.com/jaunvava/Reserva-teu-corte-ai",
    deployUrl: "https://ecommerce-app.vercel.app",
    previewContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "System Manager Desktop App",
    company: "Panda Info Cz.",
    description:
      "Um aplicativo de gerenciamento de tarefas com autenticação de usuário e armazenamento em banco de dados",
    date: "2023-07-22",
    projectUrl: "https://github.com/seuusuario/task-manager",
    deployUrl: "https://task-manager-app.vercel.app",
    previewContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    company: "MeteoData Systems.",
    description:
      "Dashboard de previsão do tempo utilizando uma API de clima e visualização de dados",
    date: "2023-09-10",
    projectUrl: "https://github.com/seuusuario/weather-dashboard",
    deployUrl: "https://weather-dashboard.vercel.app",
    previewContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    company: "MeteoData Systems.",
    description:
      "Dashboard de previsão do tempo utilizando uma API de clima e visualização de dados",
    date: "2023-09-10",
    projectUrl: "https://github.com/seuusuario/weather-dashboard",
    deployUrl: "https://weather-dashboard.vercel.app",
    previewContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function PreviewContent({ content }: { content: string }) {
  return (
    <div className="preview-content overflow-y-auto h-[300px]">
      <p>{content}</p>
    </div>
  );
}

export default function ProjectSectionDeploy() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-12  bg-gray-50 dark:bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 ">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col h-80 w-90 border-gray-300 dark:border-gray-700 shadow-2xl dark:bg-gray-800 "
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.company}
                    </p>
                  </div>
                  <Badge variant="secondary" className="">
                    {new Date(project.date).toLocaleDateString()}
                  </Badge>
                </div>
                <CardDescription className="mt-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <div className="flex flex-col sm:flex-row gap-2 w-full justify-between">
                  {/* botao ver projeto */}
                  <Button
                    variant="outline"
                    onClick={() => window.open(project.projectUrl, "_blank")}
                    className="w-full sm:w-auto hover:border-gray-700 transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Ver Projeto
                  </Button>
                  {/* botao  ver deploy*/}
                  <Button
                    onClick={() => window.open(project.deployUrl, "_blank")}
                    className="w-full sm:w-auto transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    <ExternalLinkIcon className="mr-2 h-4 w-4" />
                    Deploy
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      {/* botao preview*/}
                      <Button
                        variant="ghost"
                        onClick={() => setSelectedProject(project)}
                        className="w-full sm:w-auto border-gray-600 transition-all duration-300 ease-in-out hover:scale-105"
                      >
                        <EyeIcon className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>{selectedProject?.title}</DialogTitle>
                      </DialogHeader>
                      {selectedProject && (
                        <PreviewContent
                          content={selectedProject.previewContent}
                        />
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .preview-content {
          animation: scroll 10s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
}
