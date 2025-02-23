import { Testimonial } from "./Feedback-image";

const testimonials = [
  {
    quote:
      "Conversion transformed our business overnight. From stale organic growth to explosive growth with Google Ads and it's scaling everyday.",
    name: "Jonathan Day",
    position: "Co-founder of Monday",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "We never realised the power of paid advertising until we found Conversion. It's doubled our revenue in just a few months, absolutely incredible.",
    name: "Melissa Reid",
    position: "Founder of Tuesday",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Conversion turned our marketing game around! With their paid advertising strategies, we saw a remarkable boost in sales that we never thought possible.",
    name: "Chris Wright",
    position: "CEO of Wednesday",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Before discovering Conversion, we were hesitant about investing in paid advertising, but the team proved us wrong with their incredible results.",
    name: "Terri Williams",
    position: "Founder of Thursday",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Conversion exceeded our expectations! Their approach to paid advertising is unparalleled, resulting in a substantial growth in our revenue stream.",
    name: "Belinda Meyers",
    position: "COO of Friday",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Thanks to Conversion, our business experienced a remarkable turnaround. Their expertise in paid advertising tripled our revenue in record time.",
    name: "Sarah Yanna",
    position: "Director of Saturday",
    image: "/placeholder.svg?height=40&width=40",
  },
];

export default function TestimonialSection() {
  return (
    <section className="text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg mb-4 relative z-20">
            Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            There's a reason people
            <br />
            are <span className="italic">raving</span> about us.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        <div className="text-center mt-12"></div>
      </div>
    </section>
  );
}
