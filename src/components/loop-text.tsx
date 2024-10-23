"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Tipo para os dados do feedback
type FeedbackItem = {
  id: number;
  rating: number;
  comment: string;
  clientName: string;
  clientImage: string;
  clientCompany: string;
};

// Dados de exemplo para o feedback
const feedbackData: FeedbackItem[] = [
  {
    id: 1,
    rating: 5,
    comment:
      "Excelente trabalho! O desenvolvedor entregou o projeto antes do prazo e com qualidade excepcional.",
    clientName: "Ana Silva",
    clientImage: "/placeholder.svg?height=40&width=40",
    clientCompany: "Tech Solutions",
  },
  {
    id: 2,
    rating: 4,
    comment:
      "Muito satisfeito com o resultado. A comunicação foi clara e o código bem organizado.",
    clientName: "Carlos Oliveira",
    clientImage: "/placeholder.svg?height=40&width=40",
    clientCompany: "Inovação Digital",
  },
  {
    id: 3,
    rating: 5,
    comment:
      "Impressionante atenção aos detalhes. O desenvolvedor foi além das expectativas.",
    clientName: "Mariana Santos",
    clientImage: "/placeholder.svg?height=40&width=40",
    clientCompany: "Startup Crescente",
  },
];

export default function FeedbackCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        emblaApi.scrollNext();
      }
    }, 3000); // Muda de slide a cada 3 segundos

    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="w-full max-w-sm mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Carousel
        ref={emblaRef}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {feedbackData.map((item) => (
            <CarouselItem key={item.id}>
              <Card className="h-[250px] flex flex-col">
                <CardContent className="flex-grow p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={
                          index < item.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                        size={20}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{item.comment}</p>
                </CardContent>
                <CardFooter className="flex items-center space-x-4 p-6 bg-gray-50">
                  <Avatar>
                    <AvatarImage src={item.clientImage} alt={item.clientName} />
                    <AvatarFallback>
                      {item.clientName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{item.clientName}</p>
                    <p className="text-xs text-gray-500">
                      {item.clientCompany}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
