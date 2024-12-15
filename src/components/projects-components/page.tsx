import ProjectShowcase from "./project-showcase";

const projects = [
  {
    id: "1",
    title: "Projeto A",
    description: "Uma breve descrição do Projeto A.",
    image: "/teste.png?height=200&width=300",
    deployUrl: "#",
    codeUrl: "#",
  },
  {
    id: "2",
    title: "Projeto B",
    description: "Uma breve descrição do Projeto B.",
    image: "/teste.png?height=200&width=300",
    deployUrl: "#",
    codeUrl: "#",
  },
  {
    id: "3",
    title: "Projeto C",
    description: "Uma breve descrição do Projeto C.",
    image: "/teste.png?height=200&width=300",
    deployUrl: "#",
    codeUrl: "#",
  },
];

export default function Projectamost() {
  return (
    <main>
      <ProjectShowcase projects={projects} />
      {/* Outros componentes da sua página */}
    </main>
  );
}
