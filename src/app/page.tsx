import Experience from "./_globalComponents/Experiencia";
import Education from "./_globalComponents/Educacao";
import NavbarNewMain from "./_template/nav-new-main";
import CTA from "./_globalComponents/cta";
import Skills from "./_globalComponents/habilidades";
import FloatingNav from "./_globalComponents/floating-nav";
import ResumeSection from "./_globalComponents/sobre-eu";
import FooterMain from "./_template/rodape-main";
import HeroMain from "./_globalComponents/sessao-hero";
import ProjectShowcase from "./_globalComponents/project-showcase";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradientes */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-600/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <FloatingNav />
        <NavbarNewMain />
        <HeroMain />
        <ResumeSection />
        <ProjectShowcase />
        <Skills />
        <Experience />
        <Education />
        <CTA />
        <FooterMain />
      </div>
    </div>
  );
}
