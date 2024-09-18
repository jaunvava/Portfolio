import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Globe, Server, Smartphone, Database, Cog, Cpu, Shield } from "lucide-react"

const services = [
  {
    icon: <Code className="h-8 w-8 text-blue-500" />,
    title: "Desenvolvimento Web",
    description: "Criação de sites responsivos e aplicações web modernas usando as mais recentes tecnologias front-end e back-end.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-green-500" />,
    title: "Desenvolvimento Mobile",
    description: "Desenvolvimento de aplicativos móveis nativos e híbridos para iOS e Android, oferecendo experiências de usuário excepcionais.",
  },
  {
    icon: <Server className="h-8 w-8 text-purple-500" />,
    title: "Desenvolvimento Back-end",
    description: "Construção de APIs robustas, microserviços e sistemas de servidor escaláveis para suportar suas aplicações.",
  },
  {
    icon: <Database className="h-8 w-8 text-yellow-500" />,
    title: "Banco de Dados e Otimização",
    description: "Design e otimização de bancos de dados, garantindo eficiência e desempenho para suas aplicações.",
  },
  {
    icon: <Globe className="h-8 w-8 text-red-500" />,
    title: "Integração de APIs",
    description: "Integração perfeita de APIs de terceiros e desenvolvimento de APIs personalizadas para expandir a funcionalidade de seus sistemas.",
  },
  {
    icon: <Cog className="h-8 w-8 text-indigo-500" />,
    title: "Automação e Scripts",
    description: "Criação de scripts e ferramentas de automação para otimizar processos e aumentar a produtividade.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-pink-500" />,
    title: "Consultoria Técnica",
    description: "Fornecimento de orientação especializada em arquitetura de software, escolha de tecnologia e melhores práticas de desenvolvimento.",
  },
  {
    icon: <Shield className="h-8 w-8 text-gray-500" />,
    title: "Segurança e Manutenção",
    description: "Implementação de medidas de segurança, manutenção contínua e atualizações para manter seus sistemas protegidos e atualizados.",
  },
]

export default function ProgrammerServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meus Serviços</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ofereço uma ampla gama de serviços de programação para atender às suas necessidades de desenvolvimento de software. 
          Desde aplicações web até soluções móveis e muito mais, estou aqui para transformar suas ideias em realidade.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Solicite um Orçamento
          </Button>
        </div>
      </div>
    </section>
  )
}