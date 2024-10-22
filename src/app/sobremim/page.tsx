import SobreMIm from "@/components/sessao-sobre-mim";
import Footerlayout from "@/app/_template/rodape-layout-paginas";
import NavbarMinisobremim from "@/app/_template/navbar-mini-sobremim";

export default function SobreMin() {
  return (
    <>
      {/* Cabeçalho */}
      <section>
        <NavbarMinisobremim />
      </section>

      {/* Sessão apresentação breve */}
      <section></section>

      {/* Sobre min */}
      <section>
        <SobreMIm />
      </section>

      {/* Rodapé */}
      <section id="contatorodape">
        <Footerlayout />
      </section>
    </>
  );
}
