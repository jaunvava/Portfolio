import Link from "next/link";

export default function UnderDevelopmentPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="z-20 text-center p-6 sm:p-8 bg-gray-800 rounded-lg shadow-md w-full max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
          Página ainda em desenvolvimento
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8">
          Volte em outro momento
        </p>
        <Link
          href="/"
          className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 hover:scale-105 duration-300 transition-all"
        >
          Voltar à Página Inicial
        </Link>
      </div>
    </div>
  );
}
