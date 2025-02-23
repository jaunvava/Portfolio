import { Brain, Cloud, Shield, Zap } from "lucide-react";

const features = [
  {
    name: "AI-Powered Analytics",
    description:
      "Harness the power of machine learning to derive actionable insights from your data.",
    icon: Brain,
  },
  {
    name: "Cloud-Native Architecture",
    description:
      "Scalable, resilient, and efficient solutions built for the modern cloud ecosystem.",
    icon: Cloud,
  },
  {
    name: "Enterprise-Grade Security",
    description:
      "State-of-the-art security measures to protect your most valuable assets.",
    icon: Shield,
  },
  {
    name: "High-Performance Systems",
    description:
      "Optimized for speed and efficiency, our solutions deliver unparalleled performance.",
    icon: Zap,
  },
];

export default function Solucoes() {
  return (
    <section className="container space-y-12 py-16 md:space-y-16 md:py-24">
      <div className="mx-auto max-w-[58rem] text-center z-20">
        <h2 className="font-bold text-2xl leading-[1.1] sm:text-3xl md:text-4xl dark:text-white">
          Cutting-Edge Solutions
        </h2>
        <p className="mt-4 text-sm text-muted-foreground sm:text-base">
          Discover how Amane Soft can transform your business with our
          innovative technologies.
        </p>
      </div>
      <div className="z-20 mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-6 md:p-8"
          >
            <div className="flex items-center gap-4">
              <feature.icon className="h-6 w-6 md:h-8 md:w-8" />
              <h3 className="font-bold text-base md:text-lg">{feature.name}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
