import ClientCarousel from "@/components/page-servicos-components/sessao-client-loop";
import FAQSection from "@/components/page-servicos-components/sessao-faq";
import ProgrammerServices from "@/components/page-servicos-components/sessao-meus-servicos";
import Differentiators from "@/components/page-servicos-components/sessao-retencao-cliente";
import Footerlayout from "../_template/rodape-layout-paginas";
import NavbarMiniservices from "@/app/_template/navbar-mini-services";
import SessaoHeroservices from "@/components/page-servicos-components/sessao-apresentacao-services";
import FeedbackCards from "@/components/page-servicos-components/sessao-feedback-services";

export default function Pageservice() {
  return (
    <>
      {/* Cabeçalho */}
      <header id="inicioservices">
        <NavbarMiniservices />
      </header>

      {/* Sessão de apresentação */}
      <section>
        <SessaoHeroservices />
      </section>

      {/* Carrosel de Clientes */}
      <section id="carroselclienteservices">
        <ClientCarousel />
      </section>

      {/* Meus serviços */}
      <section id="services">
        <ProgrammerServices />
      </section>

      {/* Sessão Preços */}
      <section></section>

      {/* Feedback Clientes */}
      <section id="feedbackclientes">
        <FeedbackCards />
      </section>

      {/* Meus Diferenciais */}
      <section id="cta">
        <Differentiators />
      </section>

      {/* Sessão FAQ */}
      <section id="duvidas">
        <FAQSection />
      </section>

      {/* Rodapé */}
      <footer id="contatorodapeservicos">
        <Footerlayout />
      </footer>
    </>
  );
}
