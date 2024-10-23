import TechStack from "@/components/page/sessao-habilidades";
import ProjectSectionDeploy from "@/components/page/sessao-projetos";
import FreelanceServices from "@/components/page/sessao-freela-servicos";
import HeroSection from "@/components/sessao-hero-teste";
import FooterMain from "@/app/_template/rodape-main";
import NavbarMinimain from "@/app/_template/navbar-mini-main";
import ConquerCarousel from "@/components/page/sessao-conquistas";

export default function LandingPage() {
  return (
    <>
      {/* Cabeçalho */}
      <header id="">
        <NavbarMinimain />
      </header>

      {/* Sessão de Apresentação */}
      <section id="">
        <HeroSection />
        {/* essa sessão vai ter a foto e um breve relato sobre mim */}
      </section>

      {/* Sessão Projetos */}
      <section id="projects">
        <ProjectSectionDeploy />
      </section>

      {/* Sessão habilidades Tech Stack*/}
      <section id="skills">
        <TechStack />
      </section>

      {/* Sessão Consquitas */}
      <section>
        <ConquerCarousel />
      </section>

      {/* Sessão redirecionando para a página de serviços*/}
      <section id="services">
        <FreelanceServices />
      </section>

      {/* Sessão Formulario de email */}
      <section id="form"></section>

      {/* Sessão rodapé e contato */}
      <footer id="contact">
        <FooterMain />
      </footer>
    </>
  );
}
