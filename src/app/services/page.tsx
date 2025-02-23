import Footer from "../_template/footer";
import NavbarNewMain from "../_template/nav-new-main";
import TestimonialSection from "./_components/Feedback";
import HeroService from "./_components/hero-service";
import Services from "./_components/Services";
import ClientCarousel from "./_components/sessao-client-loop";
import Solucoes from "./_components/solucoes";

export default function Pageservice() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Background gradientes */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-600/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-600/10 blur-[100px]" />
        </div>

        {/* Cabeçalho */}
        <NavbarNewMain />

        {/* Sessão de apresentação */}
        <HeroService />

        {/* Carrosel de Clientes */}
        <ClientCarousel />

        {/* Meus serviços */}
        <TestimonialSection />

        {/* Feedback Clientes */}
        <Services />

        {/* Meus Diferenciais */}

        {/* Sessão Preços */}
        <Solucoes />
        {/* Sessão FAQ */}

        {/* Rodapé */}
        <Footer />
      </div>
    </>
  );
}
