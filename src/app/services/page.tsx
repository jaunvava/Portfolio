import ClientCarousel from "@/components/client-loop";
import FAQSection from "@/components/faq";
import FeedbackClients from "@/components/feedback-cliente";
import FooterLayout from "@/components/footer-layout";
import ProgrammerServices from "@/components/my-services";
import NavbarServices from "@/components/navbar-services";
import Differentiators from "@/components/retencao-cliente";

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

      {/* Rodapé */}
      <footer>
        <FooterLayout />
      </footer>
    </>
  );
}
