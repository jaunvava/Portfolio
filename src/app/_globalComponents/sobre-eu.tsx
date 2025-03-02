import Image from "next/image";

export default function ResumeSection() {
  return (
    <div id="sobre" className="text-white mt-10">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/sobre.avif"
              alt="Team meeting discussion"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Um <span className="italic">breve resumo</span> sobre mim
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Me chamo João Pedro é sou um desenvolvedor Fullstack
              </h3>
              <p className="text-gray-400">
                Sou um estudante, sou um desenvolvedor de software apaixonado
                pela criação de aplicações bonitas e funcionais, com foco em
                usabilidade, trabalho para desenvolver sistemas é aplicativos
                proporcionarem uma experiência excepcional ao usuário, sempre
                aprendendo novas tecnologias é lançamentos do mercado.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Busco sempre a excelência
              </h3>
              <p className="text-gray-400">
                Para mim, isso significa estar constantemente me desafiando a
                melhorar, a aprender e a entregar o melhor resultado possível,
                seja no trabalho, nos estudos ou nas minhas relações. Acredito
                que a busca pela excelência não é um destino, mas sim um
                processo contínuo de crescimento, onde sempre há espaço para
                evoluir e me superar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
