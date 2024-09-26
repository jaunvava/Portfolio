"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SquareArrowOutUpRight } from "lucide-react";

// Define the structure of a project
interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  technologies: string[];
  date: string;
  event?: string;
}

// Sample project data (replace with your own projects)
const projects: Project[] = [
  {
    id: 1,
    title: "Task Manager App",
    description:
      "A full-stack application for managing daily tasks and to-dos.",
    url: "https://github.com/yourusername/task-manager",
    technologies: ["React", "Node.js", "MongoDB"],
    date: "2023-05-15",
    event: "Projeto Pessoal",
  },
  {
    id: 2,
    title: "Weather Forecast Dashboard",
    description:
      "A React-based weather dashboard using a third-party API for real-time weather data.",
    url: "https://github.com/yourusername/weather-dashboard",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    date: "2023-07-22",
    event: "Panda Info",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "A fully functional e-commerce website with user authentication and payment integration.",
    url: "https://github.com/yourusername/ecommerce-platform",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    date: "2023-09-30",
    event: "E-commerce",
  },
  {
    id: 4,
    title: "Social Media Analytics Tool",
    description:
      "A data visualization tool for analyzing social media engagement and trends.",
    url: "https://github.com/yourusername/social-media-analytics",
    technologies: ["Vue.js", "D3.js", "Python", "Flask"],
    date: "2023-11-15",
    event: "Semana Dev",
  },
  {
    id: 5,
    title: "Fitness Tracker Mobile App",
    description:
      "A cross-platform mobile app for tracking workouts and nutrition.",
    url: "https://github.com/yourusername/fitness-tracker",
    technologies: ["React Native", "Firebase", "Redux"],
    date: "2024-01-10",
    event: "Startup Weekend Project",
  },
];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    window.open(project.url, "_blank");
  };

  return (
    <section className="mx-auto h-[40.5rem] my-2.5 max-w dark:bg-secondary">
      <div className="container  mx-auto h-[37.5rem] max-w flex flex-col px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center my-4 sm:my-8">
          Meus Principais Projetos
        </h2>
        <ScrollArea className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="flex flex-col border-gray-300  dark:bg-gray-700"
              >
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <CardTitle className="text-lg sm:text-xl mb-1 sm:mb-0">
                      {project.title}
                    </CardTitle>
                    {/* essa e a badge da data */}
                    <Badge
                      variant="secondary"
                      className="text-xs sm:text-sm  shadow-xl"
                    >
                      {new Date(project.date).toLocaleDateString()}
                    </Badge>
                  </div>
                  {project.event && (
                    // essa e a badge do projeto em questão
                    <Badge className="items-start mb-1 text-xl sm:text-sm dark:bg-gray-900  dark:text-gray-300 shadow-xl mx-auto px-4">
                      {project.event}
                    </Badge>
                  )}
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech) => (
                      // essa e a badge das tecnologias
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs sm:text-sm shadow-xl"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto pt-2">
                  <Button
                    onClick={() => handleViewProject(project)}
                    className="w-full text-sm sm:text-base bg-blue-700 dark:bg-gray-900 hover:bg-blue-600 hover:dark:bg-gray-800 gap-3 dark:text-white transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-105 active:scale-95"
                  >
                    Ver Projeto
                    <SquareArrowOutUpRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </ScrollArea>
        {selectedProject && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
            role="dialog"
            aria-modal="true"
          >
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  {selectedProject.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {selectedProject.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  You are now viewing the project in a new tab.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs sm:text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => setSelectedProject(null)}
                  className="w-full text-sm sm:text-base transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-105 active:scale-95"
                >
                  Close
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
