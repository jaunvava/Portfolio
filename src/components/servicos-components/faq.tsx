import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Arrey para cada item do FAQ
export default function FAQ() {
  const faqs = [
    {
      titulo: "Quais linguagens de programação você trabalha?",
      assunto:
        "Trabalho com várias linguagens, incluindo JavaScript, TypeScript, Python, Java, Go. Também tenho experiência com frameworks populares como React, Angular, para desenvolvimento front-end, e Node.js, SpringBoot para back-end.",
    },
    {
      titulo: "Quanto tempo leva para desenvolver um site ou aplicativo?",
      assunto:
        "O tempo de desenvolvimento varia dependendo da complexidade do projeto. Um site simples pode levar de 2 a 4 semanas, enquanto um aplicativo mais complexo pode levar de 2 a 6 meses. Forneço estimativas mais precisas após discutir os detalhes específicos do seu projeto.",
    },
    {
      titulo: "Você oferece manutenção após o lançamento do projeto?",
      assunto:
        "Sim, ofereço serviços de manutenção e suporte pós-lançamento. Isso inclui correção de bugs, atualizações de segurança e pequenas melhorias. Podemos discutir um plano de manutenção que atenda às suas necessidades específicas.",
    },
    {
      titulo: "Como você garante a segurança dos projetos que desenvolve?",
      assunto:
        "A segurança é uma prioridade em todos os meus projetos. Implemento as melhores práticas de segurança, incluindo criptografia de dados, proteção contra injeção SQL, autenticação segura e uso de HTTPS. Também mantenho-me atualizado sobre as últimas vulnerabilidades e patches de segurança.",
    },
    {
      titulo: "Você trabalha com projetos de e-commerce?",
      assunto:
        "Sim, tenho experiência em desenvolver plataformas de e-commerce. Posso criar lojas online personalizadas ou trabalhar com plataformas populares como Shopify ou WooCommerce, dependendo das suas necessidades específicas e do orçamento do projeto.",
    },
  ];

  // * Parte do acordeon
  return (
    <section className="dark:bg-zinc-800 w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Perguntas Frequentes
        </h1>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              value={`item-${index}`}
              key={index}
              className="shadow-lg"
            >
              <AccordionTrigger>{faq.titulo}</AccordionTrigger>
              <AccordionContent>{faq.assunto}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
