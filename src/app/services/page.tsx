import ClientCarousel from "@/components/servicos-components/sessao-client-loop";
import ProgrammerServices from "@/components/servicos-components/sessao-meus-servicos";
import Differentiators from "@/components/servicos-components/sessao-retencao-cliente";
import Footerlayout from "../_template/rodape-layout-paginas";
import NavbarMiniservices from "@/app/_template/navbar-mini-services";
import FAQ from "@/components/servicos-components/faq";
import ServicePresentation from "@/components/servicos-components/sessao-apresentacao";

export default function Pageservice() {
  return (
    <>
      {/* Cabeçalho */}
      <header id="inicioservices">
        <NavbarMiniservices />
      </header>

      {/* Sessão de apresentação */}
      <section>
        <ServicePresentation />
      </section>

      {/* Carrosel de Clientes */}
      <section id="carroselclienteservices">
        <ClientCarousel />
      </section>

      {/* Meus serviços */}
      <section id="servicos">
        <ProgrammerServices />
      </section>

      {/* Feedback Clientes */}
      <section id="feedbackclientes"></section>

      {/* Meus Diferenciais */}
      <section id="diferenciais">
        <Differentiators />
      </section>

      {/* Sessão Preços */}
      <section id="precos"></section>

      {/* Sessão FAQ */}
      <section id="duvidas">
        <FAQ />
      </section>

      {/* Rodapé */}
      <footer id="contatorodapeservicos">
        <Footerlayout />
      </footer>
    </>
  );
}
