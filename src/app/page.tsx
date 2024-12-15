import TechStack from "@/components/main-page-components/sessao-habilidades";
import FreelanceServices from "@/components/main-page-components/sessao-freela-servicos";
import FooterMain from "@/app/_template/rodape-main";
import NavbarMinimain from "@/app/_template/navbar-mini-main";
import Projectamost from "@/components/projects-components/page";
import Navbarteste from "./_template/nav-mini-teste";
import ProfileSection from "@/components/main-page-components/sessao-apresentacao";

export default function LandingPage() {
  return (
    <>
      {/* Cabeçalho */}
      <header>
        <NavbarMinimain />
      </header>

      {/* Sessão de Apresentação */}
      <section id="presentation">
        <ProfileSection />
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

      {/* Sessão rodapé é contato */}
      <footer id="contact">
        <FooterMain />
      </footer>
    </>
  );
}
