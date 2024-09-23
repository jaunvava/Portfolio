import { Button } from "@/components/ui/button";
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
import SectionProjects from "@/components/sessao-projetos";
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
      <section id="skills" className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="">
          <TechStack />
        </div>
        <div>
          <ConquerCarousel />
        </div>
      </section>

      {/* Sessão sobre mim */}
      <section id="about">
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
