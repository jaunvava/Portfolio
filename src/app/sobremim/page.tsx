import NavbarSobremim from "@/components/navbar-sobremim";
import SobreMIm from "@/components/sessao-sobre-mim";
import FooterSobre from "@/components/section-footermain";

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
        <FooterSobre />
      </section>
    </>
  );
}
