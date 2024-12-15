"use client";

import { useState } from "react";
import { useActionState } from "react";
import { submitEmail } from "./emailActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function EmailForm() {
  const [formData, setFormData] = useState({
    title: "",
    email: "",
    subject: "",
    message: "",
  });
  const [state, formAction, isPending] = useActionState(submitEmail);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Envie-nos uma mensagem</CardTitle>
        <CardDescription>
          Preencha o formulário abaixo para entrar em contato.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="subject">Assunto</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Digite sua mensagem aqui..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? "Enviando..." : "Enviar Mensagem"}
          </Button>
        </CardFooter>
      </form>
      {state && (
        <CardFooter>
          <Alert variant={state.success ? "default" : "destructive"}>
            {state.success ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            <AlertTitle>{state.success ? "Sucesso!" : "Erro"}</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        </CardFooter>
      )}
    </Card>
  );
}
