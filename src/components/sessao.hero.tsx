"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function VideoBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-h-full min-w-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/8720760/8720760-uhd_2732_1440_25fps.mp4"
          type="video/mp4"
        />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex h-full items-center">
        <div className="container flex-col gap-6 mx-auto px-6 md:px-12">
          <div>
            <h1 className="text-4xl font-bold text-white md:text-8xl lg:w-2/3">
              Criando soluções para o futuro
            </h1>
          </div>
          <div>
            <p className="text-4xl font-bold text-white md:text-22 lg:w-2/3">João Pedro Cruz | Desenvolvedor FullStack</p>
          </div>
          <div>
            <Button asChild>
              <a href="#form">Entre em Contato</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
