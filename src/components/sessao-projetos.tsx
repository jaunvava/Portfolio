import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";

// Define a type for our project data
type Project = {
  title: string;
  description: string;
  technologies: {
    name: string;
    icon: string;
  }[];
  link: string;
};

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: [
      { name: "React", icon: "/?height=32&width=32" },
      { name: "Node.js", icon: "/placeholder.svg?height=32&width=32" },
      { name: "MongoDB", icon: "/placeholder.svg?height=32&width=32" },
      { name: "Stripe", icon: "/placeholder.svg?height=32&width=32" },
    ],
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "A responsive web application for managing tasks and projects with real-time updates.",
    technologies: [
      { name: "Vue.js", icon: "/placeholder.svg?height=32&width=32" },
      { name: "Firebase", icon: "/placeholder.svg?height=32&width=32" },
      { name: "Vuex", icon: "/placeholder.svg?height=32&width=32" },
    ],
    link: "#",
  },
  {
    title: "Weather Forecast Dashboard",
    description:
      "An interactive dashboard displaying weather forecasts using data from multiple APIs.",
    technologies: [
      { name: "React", icon: "/placeholder.svg?height=32&width=32" },
      { name: "Redux", icon: "/placeholder.svg?height=32&width=32" },
      {
        name: "OpenWeatherMap API",
        icon: "/placeholder.svg?height=32&width=32",
      },
    ],
    link: "#",
  },
  {
    title: "Blog CMS",
    description:
      "A content management system for blogging with markdown support and user roles.",
    technologies: [
      { name: "Next.js", icon: "/placeholder.svg?height=32&width=32" },
      { name: "PostgreSQL", icon: "/placeholder.svg?height=32&width=32" },
      { name: "GraphQL", icon: "/placeholder.svg?height=32&width=32" },
    ],
    link: "#",
  },
];

export default function SectionProjects() {
  return (
    <section className="py-12 dark:bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Meus Principais Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col dark:bg-gray-700  ">
              <CardHeader >
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-4">
                  {project.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex flex-col items-center">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <span className="text-xs mt-1">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full transition-all duration-300 ease-in-out hover:bg-primary-dark dark:bg-secondary dark:text-primary hover:scale-105"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Projetos <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
