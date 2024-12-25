import { Code, Zap, Users } from "lucide-react";

export default function ServicePresentation() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
      <div className="container mx-auto px-4 mt-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Serviços de Programação Profissional
        </h1>

        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
          Oferecemos soluções de desenvolvimento de software personalizadas para
          impulsionar seu negócio. Com expertise em várias linguagens e
          tecnologias, transformamos suas ideias em realidade digital.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Code className="w-12 h-12" />}
            title="Desenvolvimento Full-Stack"
            description="Criamos aplicações web completas, do back-end ao front-end, garantindo performance e escalabilidade."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12" />}
            title="Otimização de Performance"
            description="Melhoramos a velocidade e eficiência de aplicações existentes para uma experiência de usuário superior."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12" />}
            title="Consultoria Técnica"
            description="Oferecemos orientação especializada para ajudar sua equipe a tomar as melhores decisões tecnológicas."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-lg">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
}
