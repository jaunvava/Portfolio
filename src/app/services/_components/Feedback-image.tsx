import Image from "next/image";

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  image: string;
}

export function Testimonial({
  quote,
  name,
  position,
  image,
}: TestimonialProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 flex flex-col h-full">
      <p className="text-gray-300 mb-4 flex-grow">{quote}</p>
      <div className="flex items-center">
        <Image
          src={"/icons-nextjs.svg"}
          alt={name}
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
}
