import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const technologies = [
  { name: "JavaScript", icon: "/icons-javascript.svg" },
  { name: "TypeScript", icon: "/icons-typescript.svg" },
  { name: "Java", icon: "/icons-java-96.svg" },
  { name: "SpringBot", icon: "/icons-spring-boot.svg" },
  { name: "Nodejs", icon: "/icons-nodejs.svg" },
  { name: "React Native", icon: "/icons-react-native.svg" },
  { name: "Angular", icon: "/icons-angular-96.svg" },
  { name: "React", icon: "/icons-react-96.svg" },
  { name: "Sass", icon: "/icons-sass.svg" },
  { name: "TailwindCSS", icon: "/icons-tailwind-css.svg" },
  { name: "CSS3", icon: "/icons-css.svg" },
  { name: "HTML5", icon: "/icons-html.svg" },
];

export default function TechStack() {
  return (
    <section className="py-16 dark:bg-secondary">
      <div className="-z-10 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tecnologias</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech) => (
            <Card
              key={tech.name}
              className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 dark:bg-gray-700"
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
      </div>
    </section>
  );
}
