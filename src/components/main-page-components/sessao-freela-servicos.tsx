import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function FreelanceServices() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-secondary">
      <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Serviços de Programação Freelance
      </h1>
      <Card className="container py-8 px-4 w-full max-w-2xl bg-white/90 dark:bg-gray-700 ">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800"></CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6 text-base sm:text-lg text-gray-600 dark:text-white">
            Olá! Sou um desenvolvedor freelance apaixonado por criar soluções
            digitais inovadoras e eficientes. Ofereço uma variedade de serviços
            para atender às suas necessidades de desenvolvimento.
          </p>
          <ul className="dark:text-gray-400 space-y-2 mb-6 inline-block text-left">
            {[
              "Desenvolvimento de sites responsivos",
              "Criação de aplicativos web modernos",
              "Integração de APIs e serviços de terceiros",
              "Otimização de desempenho de aplicações existentes",
              "Desenvolvimento de soluções personalizadas",
            ].map((service, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-500 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            <a href="/services#servicos">Meus Serviços</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
