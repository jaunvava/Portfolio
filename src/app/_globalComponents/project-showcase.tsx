import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, Rocket, Lock, GithubIcon } from "lucide-react";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Portfólio Pessoal",
    description:
      "Meu site pessoal onde mostro todas minhas conquistas e projetos.",
    technologies: ["Typescript", "Next.js", "Motion", "TailwindCss", "Shadcn"],
    deployUrl: "/",
    codeUrl: "https://github.com/jaunvava/Portfolio",
    private: false,
  },
  {
    id: 2,
    title: "Ap2 Soluções",
    description:
      "Um site com foco em apresentação da empresa é todas as suas soluções para alcançar mais clientes.",
    technologies: [
      "Typescript",
      "Next.js",
      "TailwindCss",
      "Docker",
      "Mui",
      "Motion",
    ],
    deployUrl: "#",
    codeUrl: "#",
    private: true,
  },
  {
    id: 3,
    title: "Em desenvolvimento",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt, quidem a, corrupti repellendus repudiandae maxime pariatur sapiente laudantium doloribus natus saepe repellat? Minima, sapiente odio necessitatibus vel repellat dolores..",
    technologies: ["React.js", "Vite.js", "Java", "TailwindCss"],
    deployUrl: "#",
    codeUrl: "#",
    private: true,
  },
  {
    id: 4,
    title: "Em desenvolvimento",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae incidunt minus est nostrum doloremque, quidem eos nihil commodi hic, ipsam quisquam laboriosam explicabo, a soluta ducimus praesentium provident ratione nisi?.",
    technologies: ["Angular", "Python", "Sass", "Javascript"],
    deployUrl: "#",
    codeUrl: "#",
    private: true,
  },
];

const getTechLogo = (tech: string) => {
  const techLogos: Record<string, string> = {
    Javascript: "/icons-javascript.svg?height=24&width=24",
    Typescript: "/icons-typescript.svg?height=24&width=24",
    "Next.js": "/icons-nextjs.svg?height=24&width=24",
    "React.js": "/icons-react-96.svg?height=24&width=24",
    "Vite.js": "/icons-vite.svg?height=24&width=24",
    Angular: "/icons-angular-96.svg?height=24&width=24",
    Java: "/icons-java-96.svg?height=24&width=24",
    Springbot: "/icons-spring-boot.svg?height=24&width=24",
    Python: "/icons-python.svg?height=24&width=24",
    Sass: "/icons-sass.svg?height=24&width=24",
    TailwindCss: "/icons-tailwind-css.svg?height=24&width=24",
    Docker: "/icons-docker.svg?height=24&width=24",
    Motion: "/framer.svg?height=24&width=24",
    Mui: "/mui.png?height=24&width=24",
    Shadcn: "/shadcn.svg?height=24&width=24",
  };

  return techLogos[tech] || "/placeholder.svg?height=24&width=24";
};

export default function ProjectShowcase() {
  return (
    <section id="projetos" className="w-full py-12">
      <div className="flex justify-center items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meus Projetos
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Confira meus projetos de programação mais recentes e suas
              tecnologias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-8xl mx-auto">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden transition-all duration-200 hover:shadow-lg bg-gray-800"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    {project.private && (
                      <span title="Projeto Privado">
                        <Lock className="h-5 w-5 text-gray-500" />
                      </span>
                    )}
                  </div>
                  <CardDescription className="line-clamp-2 h-10">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.technologies.map((tech) => (
                      <div key={tech} className="flex flex-col items-center">
                        <img
                          src={getTechLogo(tech) || "/placeholder.svg"}
                          alt={tech}
                          className="h-8 w-8 object-contain"
                          title={tech}
                        />
                        <span className="text-xs mt-1">
                          {tech.length > 8
                            ? `${tech.substring(0, 6)}...`
                            : tech}
                        </span>
                      </div>
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
                      <GithubIcon className="h-4 w-4" />
                      <span>Código</span>
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="gap-1 hover:bg-orange-600 transition-colors duration-300"
                    asChild
                  >
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
