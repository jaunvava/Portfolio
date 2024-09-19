import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Image from "next/image";
import EmailForm from "@/components/email-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FeedbackClients from "@/components/feedback-cliente";
import ClientCarousel from "@/components/client-loop";
import Differentiators from "@/components/retencao-cliente";
import ProgrammerServices from "@/components/services";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import SobreMIm from "@/components/sobre-mim";
import TechStack from "@/components/skills";
import VideoBackground from "@/components/sessao.hero";
import FooterContact from "@/components/footer-contact";
<link rel="icon" href="/favicon.ico" sizes="any" />;

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white my-10	">

      {/* Barra de navegação */}
      <nav className="fixed top-0 left-0 right-0 bg-white opacity-6 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16 gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/terminal.svg"
                alt="João"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 gap-10">
                <a
                  href="#about"
                  className="text-foreground bg-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sobre
                </a>
                <a
                  href="#skills"
                  className="text-foreground bg-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Habilidades
                </a>
                <a
                  href="#projects"
                  className="text-foreground bg-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projetos
                </a>
                <a
                  href="#servicos"
                  className="text-foreground bg-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Serviços
                </a>
                <a
                  href="#clientes-1"
                  className="text-foreground bg-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Clientes
                </a>

                <a
                  href="#form"
                  className="text-foreground bg-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contato
                </a>
                <div className="flex gap-10">
                  <Button asChild>
                    <a href="#">Curriculo</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
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

      {/* Sessão de Apresentação de clientes / loop */}
      <section></section>

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
    </div>
  );
}
