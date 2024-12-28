// ! esse componente não está mais sendo utilizado !!!
"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Componente para cada item do FAQ
const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-orange-400 py-4">
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-orange-500 dark:text-orange-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-orange-700 dark:text-orange-700" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-base text-gray-500 dark:text-gray-500">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// Componente principal da seção FAQ
export default function FAQSection() {
  const faqData = [
    {
      question: "Quais linguagens de programação você trabalha?",
      answer:
        "Trabalho com várias linguagens, incluindo JavaScript, Python, Java, e C++. Também tenho experiência com frameworks populares como React, Angular, e Vue.js para desenvolvimento front-end, e Node.js, Django, e Spring para back-end.",
    },
    {
      question: "Quanto tempo leva para desenvolver um site ou aplicativo?",
      answer:
        "O tempo de desenvolvimento varia dependendo da complexidade do projeto. Um site simples pode levar de 2 a 4 semanas, enquanto um aplicativo mais complexo pode levar de 2 a 6 meses. Forneço estimativas mais precisas após discutir os detalhes específicos do seu projeto.",
    },
    {
      question: "Você oferece manutenção após o lançamento do projeto?",
      answer:
        "Sim, ofereço serviços de manutenção e suporte pós-lançamento. Isso inclui correção de bugs, atualizações de segurança e pequenas melhorias. Podemos discutir um plano de manutenção que atenda às suas necessidades específicas.",
    },
    {
      question: "Como você garante a segurança dos projetos que desenvolve?",
      answer:
        "A segurança é uma prioridade em todos os meus projetos. Implemento as melhores práticas de segurança, incluindo criptografia de dados, proteção contra injeção SQL, autenticação segura e uso de HTTPS. Também mantenho-me atualizado sobre as últimas vulnerabilidades e patches de segurança.",
    },
    {
      question: "Você trabalha com projetos de e-commerce?",
      answer:
        "Sim, tenho experiência em desenvolver plataformas de e-commerce. Posso criar lojas online personalizadas ou trabalhar com plataformas populares como Shopify ou WooCommerce, dependendo das suas necessidades específicas e do orçamento do projeto.",
    },
  ];

  return (
    <section className="bg-zinc-500 dark:bg-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-black dark:text-white text-center mb-8">
          Perguntas Frequentes
        </h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
