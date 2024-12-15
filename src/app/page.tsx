import TechStack from "@/components/main-page-components/sessao-habilidades";
import FreelanceServices from "@/components/main-page-components/sessao-freela-servicos";
import FooterMain from "@/app/_template/rodape-main";
import NavbarMinimain from "@/app/_template/navbar-mini-main";
import { EmailForm } from "@/components/email-compontents/EmailForm";
import Projectamost from "@/components/projects-components/page";

export default function LandingPage() {
  return (
    <>
      {/* Cabeçalho */}
      <header id="">
        <NavbarMinimain />
      </header>

      {/* Sessão de Apresentação */}
      <section id=""></section>

      {/* Sessão Projetos */}
      <section id="projects">
        <Projectamost />
      </section>

      {/* Sessão habilidades Tech Stack*/}
      <section id="skills">
        <TechStack />
      </section>

      {/* Sessão redirecionando para a página de serviços*/}
      <section id="services">
        <FreelanceServices />
      </section>

      {/* Sessão Formulario de email */}
      <section id="form"></section>

      {/* Sessão rodapé é contato */}
      <footer id="contact">
        <FooterMain />
      </footer>
    </>
  );
}
