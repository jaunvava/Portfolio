import ProjectShowcase from "./project-showcase";

const projects = [
  {
    id: "1",
    title: "Projeto A",
    description: "Uma breve descrição do Projeto A.",
    image: "/teste.png?height=200&width=300",
    deployUrl:
      "https://vercel.com/new/clone?repository-url=https://github.com/yourusername/project-a",
    codeUrl: "https://github.com/yourusername/project-a",
  },
  {
    id: "2",
    title: "Projeto B",
    description: "Uma breve descrição do Projeto B.",
    image: "/teste.png?height=200&width=300",
    deployUrl:
      "https://vercel.com/new/clone?repository-url=https://github.com/yourusername/project-b",
    codeUrl: "https://github.com/yourusername/project-b",
  },
  // Adicione mais projetos conforme necessário
];

export default function Projectamost() {
  return (
    <main>
      <ProjectShowcase projects={projects} />
      {/* Outros componentes da sua página */}
    </main>
  );
}
