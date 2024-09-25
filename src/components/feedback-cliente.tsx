import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function FeedbackClients() {
  const testimonials = [
    {
      name: "Maria Silva",
      avatar: "/pessoa-1.jpeg?height=40&width=40",
      company: "TechInova Ltda.",
      position: "Gerente de Projetos",
      content:
        "O serviço superou minhas expectativas. A equipe foi extremamente profissional e atenciosa.",
    },
    {
      name: "João Santos",
      avatar: "/pessoa-3.jpg?height=40&width=40",
      company: "Construções Rápidas S.A.",
      position: "Diretor de Operações",
      content:
        "Fiquei impressionado com a rapidez e qualidade do atendimento. Recomendo a todos!",
    },
    {
      name: "Ana Oliveira",
      avatar: "/pessoa-1.jpeg?height=40&width=40",
      company: "EcoVerde Soluções",
      position: "CEO",
      content:
        "Excelente experiência do início ao fim. O suporte ao cliente é incomparável.",
    },
    {
      name: "Carlos Ferreira",
      avatar: "/pessoa-3.jpg?height=40&width=40",
      company: "LogisTech Express",
      position: "Coordenador de Logística",
      content:
        "O serviço resolveu todos os meus problemas de forma eficiente. Estou muito satisfeito.",
    },
  ];

  return (
    <section className="py-12 dark:bg-secondary ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-primary ">
          O que meus clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg dark:bg-gray-700 hover:bg-gray-900-dark text-white transition-all duration-300 ease-in-out dark:text-primary hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={`Avatar de ${testimonial.name}`}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white" >{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-300">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
