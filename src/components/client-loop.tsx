'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const clients = [
  { name: 'SpaceX', logo: '/placeholder.svg?height=50&width=120' },
  { name: 'NASA', logo: '/placeholder.svg?height=50&width=120' },
  { name: 'Logitech', logo: '/placeholder.svg?height=50&width=120' },
  { name: 'Tesla', logo: '/placeholder.svg?height=50&width=120' },
  { name: 'Microsoft', logo: '/placeholder.svg?height=50&width=120' },
  { name: 'Apple', logo: '/placeholder.svg?height=50&width=120' },
  { name: 'Google', logo: '/placeholder.svg?height=50&width=120' },
  { name: 'Amazon', logo: '/placeholder.svg?height=50&width=120' },
]

export default function ClientCarousel() {
  const carousel = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const inView = useInView(carousel)

  useEffect(() => {
    if (inView) {
      controls.start({
        x: [0, -50 * clients.length],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        },
      })
    } else {
      controls.stop()
    }
  }, [controls, inView])

  return (
    <section className="py-12 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8"></h2>
        <div ref={carousel} className="relative w-full">
          <motion.div
            className="flex items-center space-x-12"
            animate={controls}
            style={{ width: `${clients.length * 200}px` }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-40">
                <img
                  src={client.logo}
                  alt={`Logo da ${client.name}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}