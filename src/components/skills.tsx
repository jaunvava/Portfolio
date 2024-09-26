import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  { name: "React", icon: "/icons8-react.svg" },
  { name: "TypeScript", icon: "/icons8-typescript.svg" },
  { name: "Node.js", icon: "/icons8-nodejs.svg" },
  { name: "Java", icon: "/icons8-java.svg" },
  { name: "JavaScript", icon: "/icons8-javascript.svg" },
  { name: "HTML5", icon: "/icons8-html5.svg" },
  { name: "CSS3", icon: "/icons8-css3.svg" },
  { name: "VueJS", icon: "/icons8-vue-js.svg" },
  { name: "Angular", icon: "/icons8-angular.svg" },
  { name: "PostgreSQL", icon: "/icons8-postgresql.svg" },
  { name: "TailwindCSS", icon: "/icons8-tailwindcss.svg" },
  { name: "SpringBot", icon: "/icons8-spring-boot.svg" },
];

export default function TechStack() {
  return (
    <section className="py-16 dark:bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tecnologias e Conquistas{" "}
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech) => (
            <Card
              key={tech.name}
              className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 dark:bg-gray-700"
            >
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <img
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  className="w-16 h-16 mb-4"
                />
                <span className="text-sm font-medium text-center">
                  {tech.name}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
