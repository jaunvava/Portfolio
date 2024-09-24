import { Button } from "@/components/ui/button";
import Image from "next/image";
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
import SectionProjects from "@/components/sessao-projetos";

// a cor secundaria e o preto (slate) e a primaria e o branco

export default function LandingPage() {
  return (
    <div>
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
        <div>
          <FeedbackClients />
        </div>
      </section>

      {/* Sessão Projetos */}
      <section id="projects">
        <SectionProjects />
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

      {/* Sessão habilidades e minhas conquistas*/}
      <section id="skills">
        <div className="">
          <TechStack />
        </div>
        <div>
          <ConquerCarousel />
        </div>
      </section>

      {/* Sessão sobre mim */}
      <section id="about">
        <div>
          <SobreMIm />
        </div>
      </section>

      {/* Sessão Formulario de email */}
      <section id="form"></section>

      {/* Sessão rodapé e contato */}
      <footer id="contato">
        <FooterContact />
      </footer>
    </div>
  );
}
