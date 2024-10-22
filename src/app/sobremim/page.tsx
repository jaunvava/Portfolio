import NavbarSobremim from "@/app/_template/navbar-sobremim";
import SobreMIm from "@/components/sessao-sobre-mim";
import Footerlayout from "@/app/_template/rodape-layout-paginas";

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
        <Footerlayout />
      </section>
    </>
  );
}
