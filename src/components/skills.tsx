import { Card, CardContent } from "@/components/ui/card"

const technologies = [
  { name: "React", icon: "/react-icon.svg" },
  { name: "TypeScript", icon: "/typescript-icon.svg" },
  { name: "Node.js", icon: "/nodejs-icon.svg" },
  { name: "Java", icon: "/java-icon.svg" },
  { name: "JavaScript", icon: "/javascript-icon.svg" },
  { name: "HTML5", icon: "/html5-icon.svg" },
  { name: "CSS3", icon: "/css3-icon.svg" },
  { name: "Git", icon: "/git-icon.svg" },
  { name: "Angular", icon: "/angular-icon.svg" },
  { name: "PostgreSQL", icon: "/postgresql-icon.svg" },
  { name: "TailwindCSS", icon: "/tailwind-icon.svg" },
  { name: "SpringBot", icon: "/spring-icon.svg" },
]

export default function TechStack() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades e Tecnologias</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech) => (
            <Card key={tech.name} className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <img src={tech.icon} alt={`${tech.name} icon`} className="w-16 h-16 mb-4" />
                <span className="text-sm font-medium text-center">{tech.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}