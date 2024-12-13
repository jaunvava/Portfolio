import ClientCarousel from "@/components/page-servicos-components/sessao-client-loop";
import FAQSection from "@/components/page-servicos-components/sessao-faq";
import ProgrammerServices from "@/components/page-servicos-components/sessao-meus-servicos";
import Differentiators from "@/components/page-servicos-components/sessao-retencao-cliente";
import Footerlayout from "../_template/rodape-layout-paginas";
import NavbarMiniservices from "@/app/_template/navbar-mini-services";
import FeedbackCards from "@/components/page-servicos-components/sessao-feedback-services";

export default function Pageservice() {
  return (
    <>
      {/* Cabeçalho */}
      <header id="inicioservices">
        <NavbarMiniservices />
      </header>

      {/* Sessão de apresentação */}
      <section></section>

      {/* Carrosel de Clientes */}
      <section id="carroselclienteservices">
        <ClientCarousel />
      </section>

      {/* Meus serviços */}
      <section id="servicos">
        <ProgrammerServices />
      </section>

      {/* Feedback Clientes */}
      <section id="feedbackclientes">
        <FeedbackCards />
      </section>

      {/* Meus Diferenciais */}
      <section id="diferenciais">
        <Differentiators />
      </section>

      {/* Sessão Preços */}
      <section id="precos"></section>

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
