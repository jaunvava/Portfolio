import { Button } from "@/components/ui/button";
import Image from "next/image";
import FeedbackClients from "@/components/feedback-cliente";
import ClientCarousel from "@/components/client-loop";
import Differentiators from "@/components/retencao-cliente";
import ProgrammerServices from "@/components/services";
import SobreMIm from "@/components/sobre-mim";
import TechStack from "@/components/skills";
import VideoBackground from "@/components/sessao.hero";
import NavbarComponent from "@/components/navbar";
import ConquerCarousel from "@/components/section-conquistas";
import SectionProjects from "@/components/sessao-projetos";
import NewFooter from "@/components/section-footer";
import ProjectShowcase from "@/components/section-projects";

export default function LandingPage() {
  return (
    <div>
      {/* Barra de navegação */}
      <nav id="home">
        <NavbarComponent />
      </nav>

      {/* Sessão de Apresentação com video / sessão hero*/}
      <section>
        <div>
          <VideoBackground />
        </div>
        <div id="client-1">
          <ClientCarousel />
        </div>
      </section>

      {/* Sessão feedback Clientes*/}
      <section id="client-2">
        <FeedbackClients />
      </section>

      {/* Sessão Projetos */}
      <section id="projects">
        <ProjectShowcase />
      </section>
      
      {/* Sessão Serviços */}
      <section id="services">
        <ProgrammerServices />
      </section>

      {/* Sessão Retenção de Clientes */}
      <section>
        <Differentiators />
      </section>

      {/* Sessão habilidades e minhas conquistas*/}
      <section id="skills">
        <div>
          <TechStack />
        </div>
        <div>
          <ConquerCarousel />
        </div>
      </section>

      {/* Sessão sobre mim */}
      <section id="about">
        <SobreMIm />
      </section>

      {/* Sessão Formulario de email */}
      <section id="form"></section>

      {/* Sessão rodapé e contato  */}
      <footer id="contact">
        <NewFooter />
      </footer>
    </div>
  );
}
