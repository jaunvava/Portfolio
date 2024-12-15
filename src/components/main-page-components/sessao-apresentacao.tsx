import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ProfileSection() {
  return (
    <section className="min-h-screen flex items-center justify-center dark:bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="dark:bg-gray-600 rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Foto de perfil */}
            <div className="md:w-1/3 bg-gray-400 dark:bg-gray-500 flex items-center justify-center p-8">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                {/* <Image
                  src="/placeholder.svg?height=192&width=192"
                  alt="João Programador"
                  height={192}
                  width={192}
                /> */}

                <img
                  src="/perfil.jpg?height=192&width=192"
                  alt="João Programador"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Informações do perfil */}
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold mb-2 text-gray-800">
                João Programador
              </h1>
              <h2 className="text-xl mb-4 text-gray-600">
                Desenvolvedor Full Stack
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Apaixonado por criar soluções inovadoras e eficientes. Com 5
                anos de experiência em desenvolvimento web e mobile,
                especializado em React, Node.js e Python. Sempre em busca de
                novos desafios e aprendizados na área de tecnologia.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 ">
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">SQL</Badge>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <a
                    href="https://github.com/joaoprogramador"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon">
                  <a
                    href="https://linkedin.com/in/joaoprogramador"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon">
                  <a href="mailto:joao@example.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
