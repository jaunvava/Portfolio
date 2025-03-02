// ! esse componente não está sendo utilizado no projeto no momento

import Image from "next/image";

export default function ResumeSection() {
  return (
    <div id="sobre" className="text-white mt-10">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/sobre.avif"
              alt="Team meeting discussion"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Um <span className="italic">breve resumo</span> sobre mim
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                We&apos;re certified experts in what we do
              </h3>
              <p className="text-gray-400">
                With years of experience, our team at Conversion is made up of
                certified professionals in digital marketing and web design. We
                stay up-to-date on the latest trends and best practices to
                ensure our clients get the most cutting-edge solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Quality is our priority
              </h3>
              <p className="text-gray-400">
                We pride ourselves on delivering nothing short of excellence.
                Every project we take on is handled with meticulous attention to
                detail to ensure it not only looks great but performs
                exceptionally.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                We&apos;re results-driven
              </h3>
              <p className="text-gray-400">
                At Conversion, everything we do is focused on one
                thing—delivering measurable results. We create custom strategies
                designed to help our clients grow their business and achieve
                their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
