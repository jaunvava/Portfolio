import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Pagina404() {
  return (
    <div className="h-screen flex flex-col gap-3 justify-center items-center">
      <h1 className="text-3xl sm:text-center font-bold text-orange-500 font-sans">
        Página não Encontrada
      </h1>
      <Image src="/erro404.png" alt="404" width={600} height={600} />
      <p className="font-semibold sm:text-center">
        Você parece ter perdido o caminho... Mas não se preocupe,
      </p>
      <p className="font-semiboldbold sm:text-center">
        basta precionar o botão abaixo🧭.
      </p>
      <Button className="z-20 text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>

        <Link href="/" className="py-2">
          Voltar
        </Link>
      </Button>
    </div>
  );
}
