import FooterLayout from "@/components/footer-layout";
import NavbarSobremim from "@/components/navbar-sobremim";
import SobreMIm from "@/components/sobre-mim";

export default function SobreMin() {
  return (
    <>
      {/* Cabeçalho */}
      <section>
        <NavbarSobremim />
      </section>

      {/* Sessão apresentação breve */}
      <section></section>

      {/* Sobre min */}
      <section>
        <SobreMIm />
      </section>

      {/* Rodapé */}
      <section>
        <FooterLayout />
      </section>
    </>
  );
}
