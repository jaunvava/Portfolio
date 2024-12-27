import TechStack from "@/components/main-page-components/sessao-habilidades";
import FreelanceServices from "@/components/main-page-components/sessao-freela-servicos";
import FooterMain from "@/app/_template/rodape-main";
import NavbarMinimain from "@/app/_template/navbar-mini-main";
import Projectamost from "@/components/projects-components/page";
import PresentationSection from "@/components/sessao-apresentacao";
import ScrollArrowSectionApresentation from "@/components/main-page-components/sessao-arrow-apresentacao";

export default function LandingPage() {
  return (
    <>
      {/* Cabeçalho */}
      <header>
        <NavbarMinimain />
      </header>

      {/* Sessão de Apresentação */}
      <section id="presentation">
        <ScrollArrowSectionApresentation />
        {/* <PresentationSection /> */}
      </section>

      {/* Sessão de Informações */}
      <section></section>

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

      {/* Sessão mensagem filosófica */}
      <section></section>

      {/* Sessão de Email */}
      <section></section>

      {/* Sessão rodapé é contato */}
      <footer id="contact">
        <FooterMain />
      </footer>
    </>
  );
}
