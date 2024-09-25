import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, ThumbsUp, Zap, HeartHandshake, Shield } from "lucide-react"

const differentiators = [
  {
    icon: <CheckCircle className="h-8 w-8 text-green-500" />,
    title: "Qualidade Garantida",
    description: "Comprometimento com a excelência em cada projeto, garantindo resultados superiores."
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-500" />,
    title: "Pontualidade",
    description: "Respeito rigoroso aos prazos, assegurando a entrega dentro do cronograma acordado."
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-yellow-500" />,
    title: "Satisfação do Cliente",
    description: "Foco total na sua satisfação, com suporte personalizado e atenção aos detalhes."
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-500" />,
    title: "Inovação Constante",
    description: "Utilização das mais recentes tecnologias e métodos para oferecer soluções inovadoras."
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-red-500" />,
    title: "Parceria de Longo Prazo",
    description: "Construímos relacionamentos duradouros, não apenas projetos únicos."
  },
  {
    icon: <Shield className="h-8 w-8 text-gray-500" />,
    title: "Segurança e Confiabilidade",
    description: "Proteção de dados e confidencialidade garantidas em todos os nossos serviços."
  }
]

export default function Differentiators() {
  return (
    <section className="py-16 dark:bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Por que me contratar para o seu projeto?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <Card key={index} className="hover:shadow-lg bg-white dark:bg-gray-700 dark:hover:bg-gray-900 text-white transition-all duration-300 ease-in-out dark:text-primary hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold ml-4 text-black dark:text-white">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}