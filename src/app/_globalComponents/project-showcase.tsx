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
import { Code2, Rocket } from "lucide-react";

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with product management, cart functionality, and payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    deployUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A Kanban-style task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    deployUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Real-time weather information dashboard with location search, forecasts, and interactive maps.",
    technologies: ["React", "OpenWeather API", "Mapbox", "Tailwind CSS"],
    deployUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for tracking social media performance across multiple platforms.",
    technologies: ["Angular", "Firebase", "Chart.js", "Social APIs"],
    deployUrl: "#",
    codeUrl: "#",
  },
  {
    id: 5,
    title: "AI Image Generator",
    description:
      "Web application that generates images based on text prompts using machine learning models.",
    technologies: ["Next.js", "Python", "TensorFlow", "OpenAI API"],
    deployUrl: "#",
    codeUrl: "#",
  },
  {
    id: 6,
    title: "Blockchain Explorer",
    description:
      "Tool for exploring and visualizing blockchain transactions and smart contracts.",
    technologies: ["React", "Ethereum", "Web3.js", "GraphQL"],
    deployUrl: "#",
    codeUrl: "#",
  },
];

// Technology icon mapping
const getTechIcon = (tech: string) => {
  const techIcons: Record<string, string> = {
    React: "bg-blue-100 text-blue-800",
    "Node.js": "bg-green-100 text-green-800",
    MongoDB: "bg-green-100 text-green-800",
    Stripe: "bg-purple-100 text-purple-800",
    "Vue.js": "bg-emerald-100 text-emerald-800",
    Express: "bg-gray-100 text-gray-800",
    PostgreSQL: "bg-blue-100 text-blue-800",
    "Socket.io": "bg-gray-100 text-gray-800",
    "OpenWeather API": "bg-orange-100 text-orange-800",
    Mapbox: "bg-indigo-100 text-indigo-800",
    "Tailwind CSS": "bg-sky-100 text-sky-800",
    Angular: "bg-red-100 text-red-800",
    Firebase: "bg-amber-100 text-amber-800",
    "Chart.js": "bg-pink-100 text-pink-800",
    "Social APIs": "bg-blue-100 text-blue-800",
    "Next.js": "bg-black bg-opacity-10 text-gray-800",
    Python: "bg-yellow-100 text-yellow-800",
    TensorFlow: "bg-orange-100 text-orange-800",
    "OpenAI API": "bg-teal-100 text-teal-800",
    Ethereum: "bg-purple-100 text-purple-800",
    "Web3.js": "bg-indigo-100 text-indigo-800",
    GraphQL: "bg-pink-100 text-pink-800",
  };

  return techIcons[tech] || "bg-gray-100 text-gray-800";
};

export default function ProjectShowcase() {
  return (
    <section id="projetos" className="w-full py-12 mt-10 ">
      <div className="flex items-center justify-center">
        <div className="flex-col container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meus Projetos
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Confira meus projetos de programação mais recentes e suas
              tecnologias
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden transition-all duration-200 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2 h-10">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`${getTechIcon(tech)}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code2 className="h-4 w-4" />
                      <span>Código</span>
                    </a>
                  </Button>
                  <Button size="sm" className="gap-1" asChild>
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Rocket className="h-4 w-4" />
                      <span>Deploy</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
