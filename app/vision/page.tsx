"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Curated Chemistry",
    body: "Every guest is handpicked. Every encounter is intentional. The chemistry at Kinara House is not left to chance — it is the result of meticulous curation.",
  },
  {
    number: "02",
    title: "Uncompromising Discretion",
    body: "Your presence at Kinara House is yours alone. What happens within these walls stays within them — protected by architecture, policy, and honour.",
  },
  {
    number: "03",
    title: "Mastery in Experience",
    body: "From world-class facilitators to exquisitely designed spaces, every element of your stay has been refined to provoke wonder.",
  },
  {
    number: "04",
    title: "Radical Sophistication",
    body: "We reject the vulgar in all its forms. Kinara House is a celebration of desire expressed through elegance, intention, and artistry.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function VisionPage() {
  return (
    <div className="bg-[#1a1a1a]">
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Kinara House Vision — architectural luxury"
            fill
            unoptimized
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 via-[#1a1a1a]/50 to-[#1a1a1a]" />
          <div className="absolute inset-0 bg-[#1a1a1a]/25" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter font-semibold mb-8"
          >
            Our Vision
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl text-[#f5f0e8] leading-tight font-light"
          >
            A Sanctuary for the{" "}
            <em className="text-[#c9a84c]">Conscious</em>{" "}
            and Curious.
          </motion.h1>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-16 h-px bg-[#c9a84c]/40" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter">
                Mission
              </span>
              <div className="w-16 h-px bg-[#c9a84c]/40" />
            </div>
          </motion.div>

          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#f5f0e8] font-light leading-[1.6] italic"
          >
            &ldquo;We are building the world&apos;s most refined sanctuary for
            conscious, curious adults — a space where sophistication meets
            authentic human connection.&rdquo;
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 space-y-5"
          >
            <p className="text-[#f5f0e8]/65 font-inter font-light text-lg leading-[1.9]">
              We believe that desire, when held with intelligence and care, is
              one of the most profound forces of human experience. Kinara House
              exists to honour that belief — in architecture, in programme, in
              the people we welcome.
            </p>
            <p className="text-[#f5f0e8]/55 font-inter font-light text-base leading-[1.9]">
              We are not building an event. We are building a world — one where
              the adventurous, the thoughtful, and the deeply human can finally
              exhale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 border-t border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter">
              Our Values
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] font-light mt-4">
              The Four Pillars
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c9a84c]/10">
            {values.map((value, i) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="bg-[#1a1a1a] hover:bg-[#1e1e1e] transition-colors duration-500 p-10 md:p-14"
              >
                <span className="block text-[#c9a84c]/30 text-xs tracking-widest font-inter uppercase mb-6">
                  {value.number}
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl text-[#f5f0e8] font-normal mb-6">
                  {value.title}
                </h3>
                <div className="w-8 h-px bg-[#c9a84c]/40 mb-6" />
                <p className="text-[#f5f0e8]/60 font-inter font-light text-base leading-[1.9]">
                  {value.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-24 md:py-32 px-6 text-center border-t border-[#c9a84c]/10">
        <div className="max-w-3xl mx-auto">
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.7 }}
            className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter mb-8"
          >
            The Standard
          </motion.p>
          <motion.h2
            {...fadeInUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] font-light leading-[1.5] mb-8"
          >
            We do not meet the market.
            <br />
            <em className="text-[#c9a84c]">We define it.</em>
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#f5f0e8]/55 font-inter font-light leading-relaxed"
          >
            Every aspect of Kinara House — from the guest selection process to
            the thread count of the linen — reflects a single, unwavering
            commitment: that you deserve the finest version of this experience.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
