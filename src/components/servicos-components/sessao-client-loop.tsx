"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const clients = [
  { name: "CLiente-1", logo: "/logoipsum-261.svg?height=50&width=50" },
  { name: "CLiente-2", logo: "/logoipsum-215.svg?height=50&width=50" },
  { name: "CLiente-3", logo: "/logoipsum-219.svg?height=50&width=50" },
  { name: "CLiente-4", logo: "/logoipsum-239.svg?height=50&width=50" },
  { name: "CLiente-5", logo: "/logoipsum-288.svg?height=50&width=50" },
  { name: "CLiente-6", logo: "/logoipsum-332.svg?height=50&width=50" },
  { name: "CLiente-7", logo: "/logoipsum-286.svg?height=50&width=50" },
  { name: "CLiente-8", logo: "/logoipsum-311.svg?height=50&width=50" },
  { name: "CLiente-9", logo: "/logoipsum-317.svg?height=50&width=50" },
  { name: "CLiente-10", logo: "/logoipsum-325.svg?height=50&width=50" },
  { name: "CLiente-11", logo: "/logoipsum-248.svg?height=50&width=50" },
  { name: "CLiente-12", logo: "/logoipsum-317.svg?height=50&width=50" },
  { name: "CLiente-13", logo: "/logoipsum-335.svg?height=50&width=50" },
  { name: "CLiente-14", logo: "/logoipsum-334.svg?height=50&width=50" },
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
            duration: 40,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, inView]);

  return (
    <section className="-z-10 relative py-12 dark:bg-secondary overflow-hidden bg-zinc-500 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-sm font-bold text-center mb-8">
          Você está em boas mãos:
        </h2>
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
                  className="w-15 h-15 mb-4 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
