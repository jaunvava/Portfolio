"use client";
import { motion } from "framer-motion";
import { Testimonial } from "./Feedback-image";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget  ante  tincidunt  luctus Nullam.",
    name: "Aurélio",
    position: "Fundador da Ap2 Solucões",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget  ante  tincidunt  luctus Nullam.",
    name: "Melissa Reid",
    position: "Founder of Tuesday",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget  ante  tincidunt  luctus Nullam.",
    name: "Chris Wright",
    position: "CEO of Wednesday",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget  ante  tincidunt  luctus Nullam.",
    name: "Terri Williams",
    position: "Founder of Thursday",
    image: "/placeholder.svg?height=40&width=40",
  },
];

export default function TestimonialSection() {
  return (
    <section id="feedback" className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, x: -100, y: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg mb-4 relative z-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Feedback
          </motion.span>
          <h2 className="z-20 text-4xl md:text-5xl font-bold mb-4 text-white">
            Há uma razão pela qual as pessoas
            <br />
            estão <span className="italic">falando</span> muito bem sobre mim.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20"
          initial={{ opacity: 0, x: 100, y: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
