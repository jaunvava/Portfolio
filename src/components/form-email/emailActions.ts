"use server";

import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  email: z.string().email("E-mail inválido"),
  subject: z.string().min(1, "Assunto é obrigatório"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export async function submitEmail(prevState: any, formData: FormData) {
  const title = formData.get("title");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const result = schema.safeParse({ title, email, subject, message });

  if (!result.success) {
    return {
      success: false,
      message: "Por favor, preencha todos os campos corretamente.",
    };
  }

  // Simular um atraso de rede
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Aqui você normalmente faria algo com os dados, como salvar no banco de dados
  // Por enquanto, vamos apenas simular um sucesso
  if (Math.random() > 0.2) {
    return { success: true, message: "Mensagem enviada com sucesso!" };
  } else {
    return {
      success: false,
      message: "Ocorreu um erro. Por favor, tente novamente.",
    };
  }
}
