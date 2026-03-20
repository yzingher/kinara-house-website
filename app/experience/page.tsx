"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Tantra & Shibari Workshops",
    body: "Led by world-class facilitators, our workshops are spaces of learning, presence, and profound intimacy. Beginners are welcomed; curiosity is the only prerequisite.",
    image:
      "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=800&q=80",
    imageAlt: "Workshop — intimate gathering space",
    reverse: false,
  },
  {
    title: "Curated Seduction",
    body: "The art of anticipation. Every detail — lighting, scent, music, temperature — has been tuned to heighten awareness and invite presence.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    imageAlt: "Curated ambience — candlelit luxury",
    reverse: true,
  },
  {
    title: "The Sanctuary",
    body: "Our private spaces are architectural poems — designed to hold whatever you bring to them. Whether solitude or shared experience, The Sanctuary holds you.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    imageAlt: "The Sanctuary — private luxury space",
    reverse: false,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function ExperiencePage() {
  return (
    <div className="bg-[#1a1a1a]">
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1920&q=80"
            alt="Kinara House Experience — luxury bed"
            fill
            unoptimized
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/55 via-[#1a1a1a]/45 to-[#1a1a1a]" />
          <div className="absolute inset-0 bg-[#1a1a1a]/20" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter font-semibold mb-8"
          >
            The Experience
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl text-[#f5f0e8] leading-tight font-light"
          >
            The Slow-Burn{" "}
            <em className="text-[#c9a84c]">Rhythm</em>
            <br />
            of Intention.
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-16 h-px bg-[#c9a84c]/40" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter">
                What Awaits
              </span>
              <div className="w-16 h-px bg-[#c9a84c]/40" />
            </div>
            <p className="font-playfair text-2xl md:text-3xl text-[#f5f0e8] font-light leading-[1.7] italic">
              The days at Kinara House unfold with intention. There is no rush
              — only the slow-burn rhythm of experience layered upon experience.
            </p>
          </motion.div>

          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 text-[#f5f0e8]/60 font-inter font-light text-base md:text-lg leading-[1.9]"
          >
            Each gathering is designed as a complete world — one that you step
            into fully and leave transformed. The programme is curated; the
            moments between programme are equally so.
          </motion.p>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="pb-24 md:pb-32 border-t border-[#c9a84c]/10">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className="border-b border-[#c9a84c]/10 last:border-b-0"
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 ${
                  feature.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: feature.reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className={`relative h-64 md:h-80 lg:h-[520px] overflow-hidden ${
                    feature.reverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    unoptimized
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#1a1a1a]/20" />
                </motion.div>

                {/* Text Side */}
                <motion.div
                  initial={{ opacity: 0, x: feature.reverse ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                  className={`flex items-center ${
                    feature.reverse ? "lg:order-1" : "lg:order-2"
                  } p-10 md:p-14 lg:p-16 xl:p-20 bg-[#1a1a1a]`}
                >
                  <div>
                    <span className="block text-[#c9a84c]/40 text-xs tracking-widest font-inter uppercase mb-6">
                      0{i + 1}
                    </span>
                    <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] font-normal mb-6 leading-snug">
                      {feature.title}
                    </h2>
                    <div className="w-10 h-px bg-[#c9a84c]/50 mb-7" />
                    <p className="text-[#f5f0e8]/65 font-inter font-light text-base md:text-lg leading-[1.9]">
                      {feature.body}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Closing CTA */}
      <section className="py-24 md:py-32 px-6 text-center border-t border-[#c9a84c]/10">
        <div className="max-w-3xl mx-auto">
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.7 }}
            className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter mb-6"
          >
            Your Journey
          </motion.p>
          <motion.h2
            {...fadeInUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] font-light leading-[1.5] mb-8"
          >
            Every detail considered.
            <br />
            <em className="text-[#c9a84c]">Nothing left to chance.</em>
          </motion.h2>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <a
              href="https://dw7d97j0izd.typeform.com/to/ldsXW19a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c9a84c] text-[#1a1a1a] hover:bg-[#b8973b] px-10 py-5 font-semibold tracking-widest uppercase text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a84c]/20 hover:-translate-y-0.5"
            >
              Apply for Access
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
