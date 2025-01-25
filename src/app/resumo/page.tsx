import SobreMIm from "@/components/sobremim-components/sessao-sobre-mim";
import Footerlayout from "@/app/_template/rodape-layout-paginas";
import NavbarNewResumo from "../_template/nav-mew-resumo";

export default function SobreMin() {
  return (
    <>
      {/* Cabeçalho */}
      <section>
        <NavbarNewResumo />
      </section>

      {/* Sessão apresentação */}
      <section></section>

      {/* Sobre min */}
      <section>
        <SobreMIm />
      </section>

      {/* Linha do Tempo */}
      <section></section>

      {/* Rodapé */}
      <section id="contatorodape">
        <Footerlayout />
      </section>
    </>
  );
}
