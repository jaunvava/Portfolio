import SobreMIm from "@/components/sobre-mim";
import TechStack from "@/components/skills";
import VideoBackground from "@/components/sessao.hero";
import ConquerCarousel from "@/components/section-conquistas";
import NewFooter from "@/components/section-footer";
import ProjectSectionDeploy from "@/components/project-section";
import FreelanceServices from "@/components/freela-servicos";
import NavbarComponent from "@/components/navbar";

export default function LandingPage() {
  return (
    <div>
      <header>
        <NavbarComponent />
      </header>

      {/* Sessão de Apresentação com video / sessão hero*/}
      <section>
        <VideoBackground />
      </section>

      {/* Sessão Projetos */}
      <section id="projects">
        <ProjectSectionDeploy />
      </section>

      {/* Sessão habilidades e minhas conquistas*/}
      <section id="skills">
        <TechStack />
      </section>

      {/* Sessão Serviços */}
      <section id="services">
        <FreelanceServices />
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
