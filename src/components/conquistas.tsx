"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const achievements = [
  {
    title: "Bolsa de Estudos em Ciência da Computação",
    description: "Universidade Federal de Tecnologia",
    year: "2022",
    type: "Projeto"
  },
  {
    title: "Projeto de IA para Reconhecimento Facial",
    description: "Desenvolvido um sistema de reconhecimento facial usando TensorFlow",
    year: "2023",
    type: "Serviço"
  },
  {
    title: "Hackathon de Inovação Tecnológica",
    description: "1º lugar no desafio de desenvolvimento de app sustentável",
    year: "2023",
    type: "Bolsa"
  },
  {
    title: "Estágio em Desenvolvimento Web",
    description: "Empresa líder em soluções de e-commerce",
    year: "2022",
    type: "Experiência"
  },
  {
    title: "Aplicativo Mobile de Gerenciamento de Tarefas",
    description: "Desenvolvido com React Native, publicado na App Store e Google Play",
    year: "2024",
    type: "Projeto"
  }
]

export default function ConquerCarousel() {
  return (
    <section className="py-12 bg-gray-500 max-h-[600px] overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-8">Minhas Conquistas</h2>
        <div className="flex-grow overflow-y-auto">
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <CarouselContent>
              {achievements.map((achievement, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle>{achievement.title}</CardTitle>
                      <CardDescription>{achievement.year}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{achievement.description}</p>
                      <Badge variant="secondary" className="capitalize">
                        {achievement.type}
                      </Badge>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}