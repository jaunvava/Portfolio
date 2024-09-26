"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const clients = [
  { name: "SpaceX", logo: "/spacex-icon.svg?height=50&width=50" },
  { name: "NASA", logo: "/icons8-nasa.svg?height=50&width=50" },
  { name: "Logitech", logo: "/icons8-logitech.svg?height=50&width=50" },
  { name: "Tesla", logo: "/icons8-tesla.svg?height=50&width=50" },
  { name: "Microsoft", logo: "/icons8-microsoft.svg?height=50&width=50" },
  { name: "Apple", logo: "/icons8-apple.svg?height=50&width=50" },
  { name: "Google", logo: "/icons8-google.svg?height=50&width=50" },
  { name: "Amazon", logo: "/icons8-amazon.svg?height=50&width=50" },
];

export default function ClientCarousel() {
  const carousel = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(carousel);

  useEffect(() => {
    if (inView) {
      controls.start({
        x: [0, -50 * clients.length],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, inView]);

  return (
    <section className="py-12 dark:bg-secondary overflow-hidden">
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
                  className="w-16 h-16 mb-4 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
