import { Button } from "@/components/ui/button";
import { ArrowUpLeft, Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Pagina404() {
  return (
    <div className="h-screen flex flex-col gap-3 justify-center items-center">
      <h1 className="text-3xl sm:text-center font-bold text-orange-500 ">
        Página não Encontrada
      </h1>
      <Image src="/erro404.png" alt="404" width={300} height={300} />
      <p className="font-semibold sm:text-center">
        Você parece ter perdido o caminho... Mas não se preocupe,
      </p>
      <p className="font-semiboldbold sm:text-center">
        basta precionar o botão abaixo🧭.
      </p>
      <Button className="bg-orange-600 text-xl font-semibold rounded-full flex gap-1">
        <ArrowUpLeft />
        <Link href="/" className="py-2">
          Voltar
        </Link>
      </Button>
    </div>
  );
}
