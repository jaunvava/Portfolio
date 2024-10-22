import TechStack from "@/components/sessao-habilidades";
import ProjectSectionDeploy from "@/components/sessao-projetos";
import FreelanceServices from "@/components/sessao-freela-servicos";
import HeroSection from "@/components/sessao-hero-teste";
import FooterMain from "@/app/_template/rodape-main";
import NavbarMinimain from "@/app/_template/navbar-mini-main";
import ConquerCarousel from "@/components/sessao-conquistas";

export default function LandingPage() {
  return (
    <div>
      {/* Cabeçalho */}
      <header id="">
        <NavbarMinimain />
      </header>

      {/* Sessão de Apresentação */}
      <section id="">
        <HeroSection />
      </section>

      {/* Sessão Projetos */}
      <section id="projects">
        <ProjectSectionDeploy />
      </section>

      {/* Sessão habilidades Stack*/}
      <section id="skills">
        <TechStack />
      </section>

      {/* Sessão Consquitas */}
      <section>
        <ConquerCarousel />
      </section>

      {/* Sessão Linha do Tempo */}
      <section></section>

      {/* Sessão redirecionando para a página de serviços*/}
      <section id="services">
        <FreelanceServices />
      </section>

      {/* Sessão rodapé e contato */}
      <footer id="contact">
        <FooterMain />
      </footer>
    </div>
  );
}
