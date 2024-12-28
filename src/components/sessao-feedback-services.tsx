// ! esse componente está sem uso no momento!!!

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

type FeedbackItem = {
  id: number;
  rating: number;
  comment: string;
  clientName: string;
  clientImage: string;
  clientCompany: string;
};

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

export default function FeedbackCardsClientes() {
  return (
    <div className="mx-auto  px-4 py-8 sm:px-6 lg:px-8 dark:bg-secondary">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-primary">
        Meus clientes
      </h2>
      <p className="text-lg font-semibold text-center mb-8 text-gray-500 dark:text-gray-400">
        Ouça o que meus clientes têm a dizer sobre meus serviços.
      </p>
      <div className="-z-10 flex flex-wrap -mx-4 justify-center">
        {feedbackData.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 ">
            <Card className="h-full flex flex-col dark:bg-gray-600 rounded-b-lg">
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
                <p className="text-sm dark:text-gray-300">{item.comment}</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4 p-6">
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
                  <p className="text-xs dark:text-gray-400">
                    {item.clientCompany}
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
