import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import EmailForm from "@/components/email-form";
import FeedbackClients from "@/components/feedback-cliente";
import ClientCarousel from "@/components/client-loop";
import Differentiators from "@/components/retencao-cliente";
import ProgrammerServices from "@/components/services";
import SobreMIm from "@/components/sobre-mim";
import TechStack from "@/components/skills";
import VideoBackground from "@/components/sessao.hero";
import FooterContact from "@/components/footer-contact";
import NavbarComponent from "@/components/navbar";
import ConquerCarousel from "@/components/conquistas";
<link rel="icon" href="/favicon.ico" sizes="any" />;

export default function LandingPage() {
  return (
    <main>
      {/* Barra de navegação */}
      <nav>
        <NavbarComponent />
      </nav>

      {/* Sessão de Apresentação com video / sessão hero*/}
      <section>
        <div>
          <VideoBackground />
        </div>
        <div id="clientes-1">
          <ClientCarousel />
        </div>
      </section>

      {/* Sessão feedback Clientes*/}
      <section id="clientes-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <FeedbackClients />
          </div>
        </div>
      </section>

      {/* Sessão Projetos */}
      <section id="projects" className="py-10 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            Projetos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "E-commerce Panda Info",
                description:
                  "Uma plataforma de comércio eletrônico completa construída para Panda Info.",
              },
              {
                title: "Reserva teu corte aí",
                description:
                  "Um aplicativo de reserva de corte de cabelo, conectando vários cabedeleiros aos seus clientes.",
              },
              {
                title: "Sample",
                description: "Em desenvolvimento...",
              },
              {
                title: "Sample",
                description: "Em desenvolvimento...",
              },
              {
                title: "Sample",
                description: "Em desenvolvimento...",
              },
              {
                title: "Sample",
                description: "Em desenvolvimento...",
              },
            ].map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">Ver Projeto</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sessão Serviços */}
      <section id="servicos">
        <div className="">
          <ProgrammerServices />
        </div>
      </section>

      {/* Sessão Retenção de Clientes */}
      <section>
        <div>
          <Differentiators />
        </div>
      </section>

      {/* Sessão habilidades */}
      <section id="skills" className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="">
          <TechStack />
        </div>
      </section>

      {/* Sessão habilidades */}
      <section>
        <ConquerCarousel />
      </section>

      {/* Sessão sobre mim */}
      <section id="about" className="py-10 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="">
          <SobreMIm />
        </div>
      </section>

      {/* Sessão Formulario de email */}
      <section id="form">
        <div className="container mx-auto text-center my-10 ">
          <span className="text-4xl font-bold text-primary mb-4">
            Fale Comigo
          </span>
        </div>
        <div>
          <EmailForm />
        </div>
      </section>

      {/* Sessão rodapé e contato */}
      <footer id="contato">
        <FooterContact />
      </footer>
    </main>
  );
}
