import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section id="cta" className=" border-t">
      <div className="container flex flex-col items-center gap-4 py-16 md:py-24 text-center">
        <h2 className="font-bold text-2xl leading-[1.1] sm:text-3xl md:text-4xl">
          Pronto para revolucionar o seu negócio?
        </h2>
        <p className="max-w-[42rem] text-sm leading-normal text-muted-foreground sm:text-base md:text-lg">
          Junte-se a empresas líderes que confiam na Amane Soft para impulsionar
          seu digital transformação e permanecer à frente no cenário tecnológico
          em rápida evolução.
        </p>
        <Button size="lg" className="mt-4">
          Comece hoje
        </Button>
      </div>
    </section>
  );
}
