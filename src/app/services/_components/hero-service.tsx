import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function HeroService() {
  return (
    <section
      id="home"
      className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-12 md:py-24 text-center"
    >
      <div className="space-y-4">
        <h1 className="relative z-20 bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
          Innovate Faster with
          <br />
          Amane Soft
        </h1>
        <p className="relative z-20 mx-auto max-w-[42rem] text-sm leading-normal text-muted-foreground sm:text-base md:text-lg">
          Empowering businesses with cutting-edge software solutions. From
          AI-driven analytics to seamless cloud integrations, we're shaping the
          future of technology.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 relative z-20">
        <Button size="lg">
          Explore Solutions
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg" className="relative z-20">
          Schedule a Demo
        </Button>
      </div>
    </section>
  );
}
