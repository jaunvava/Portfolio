import ClientCarousel from "@/components/sessao-client-loop";
import FAQSection from "@/components/sessao-faq";
import FeedbackClients from "@/components/sessao-feedback-cliente";
import ProgrammerServices from "@/components/sessao-meus-servicos";
import NavbarServices from "@/app/_template/navbar-services";
import Differentiators from "@/components/sessao-retencao-cliente";
import Footerlayout from "../_template/rodape-layout-paginas";

export default function Pageservice() {
  return (
    <>
      {/* Cabeçalho */}
      <header id="inicio">
        <NavbarServices />
      </header>

      {/* Meus serviços */}
      <section id="servicos">
        <ProgrammerServices />
      </section>

      {/* Carrosel de Clientes */}
      <section id="carroselclientes">
        <ClientCarousel />
      </section>

      {/* Feedback Clientes */}
      <section id="feedbackclientes">
        <FeedbackClients />
      </section>

      {/* Meus Diferenciais */}
      <section>
        <Differentiators />
      </section>

      {/* Sessão FAQ */}
      <section id="duvidas">
        <FAQSection />
      </section>

      {/* Sessão Formulario de email */}
      <section id="form"></section>

      {/* Rodapé */}
      <footer>
        <Footerlayout />
      </footer>
    </>
  );
}
