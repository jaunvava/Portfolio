import TechStack from "@/components/main-page-components/sessao-habilidades";
import FreelanceServices from "@/components/main-page-components/sessao-freela-servicos";
import FooterMain from "@/app/_template/rodape-main";
import Projectamost from "@/components/projects-components/page";
import ScrollArrowSectionApresentation from "@/components/main-page-components/sessao-arrow-apresentacao";
import FeaturesSection from "@/components/main-page-components/sessao-info";
import NavbarMainTeste from "@/app/_template/nav-new-main";

export default function LandingPage() {
  return (
    <>
      {/* Barra de navegação */}
      <header>
        <NavbarMainTeste />
        {/* <NavbarMinimain /> */}
      </header>

      {/* Sessão de Apresentação e trajetoria */}
      <section id="presentation">
        <ScrollArrowSectionApresentation />
      </section>

      {/* Sessão de Informações */}
      <section>
        <FeaturesSection />
      </section>

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
