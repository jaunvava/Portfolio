import TechStack from "@/components/sessao-habilidades";
import ProjectSectionDeploy from "@/components/sessao-projetos";
import FreelanceServices from "@/components/freela-servicos";
import HeroSection from "@/components/sessao.hero";
import NavbarMini from "@/components/navbar-mini";
import FooterMain from "@/components/sessao-rodape-main";

export default function LandingPage() {
  return (
    <div>
      {/* Cabeçalho */}
      <header id="">
        <NavbarMini />
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
