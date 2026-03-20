"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const segments = [
  {
    number: "01",
    title: "Adventurous Couples",
    body: "Couples who have moved beyond convention and seek a space to explore together — with safety, style, and the thrill of the new.",
    icon: "◇",
  },
  {
    number: "02",
    title: "Modern Women",
    body: "Women who own their desire. Whether arriving solo or with a partner, Kinara House is designed to feel safe, empowering, and deeply luxurious.",
    icon: "◇",
  },
  {
    number: "03",
    title: "The Cultured Seeker",
    body: "Solo adventurers with refined taste and an open mind. Those who seek connection without compromise and experience without apology.",
    icon: "◇",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function WhoPage() {
  return (
    <div className="bg-[#1a1a1a]">
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
            alt="Kinara House — who we welcome"
            fill
            unoptimized
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/65 via-[#1a1a1a]/50 to-[#1a1a1a]" />
          <div className="absolute inset-0 bg-[#1a1a1a]/25" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter font-semibold mb-8"
          >
            Who We Are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl text-[#f5f0e8] leading-tight font-light"
          >
            Not for everyone.
            <br />
            <em className="text-[#c9a84c]">For those who know.</em>
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
                Our Guest
              </span>
              <div className="w-16 h-px bg-[#c9a84c]/40" />
            </div>
          </motion.div>

          <motion.h2
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] font-light leading-[1.6] mb-8"
          >
            Kinara House is not for everyone.
          </motion.h2>

          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#f5f0e8]/65 font-inter font-light text-lg md:text-xl leading-[1.9]"
          >
            It is for those who know themselves well enough to seek something
            more. Those who have outgrown the ordinary without losing their
            sense of wonder. Those for whom sophistication is not performance
            — it is simply how they move through the world.
          </motion.p>

          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-[#f5f0e8]/50 font-inter font-light text-base leading-[1.9]"
          >
            If you have found yourself here, you already belong.
          </motion.p>
        </div>
      </section>

      {/* Segment Cards */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-16 border-t border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto pt-16 md:pt-24">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter">
              Our Guests
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {segments.map((segment, i) => (
              <motion.div
                key={segment.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group border border-[#c9a84c]/15 hover:border-[#c9a84c]/40 bg-[#1a1a1a] hover:bg-[#1d1d1d] transition-all duration-500 p-10 md:p-12"
              >
                <div className="mb-8">
                  <span className="text-[#c9a84c] text-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                    {segment.icon}
                  </span>
                </div>
                <span className="block text-[#c9a84c]/40 text-xs tracking-widest font-inter uppercase mb-5">
                  {segment.number}
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl text-[#f5f0e8] font-normal mb-5 group-hover:text-[#c9a84c] transition-colors duration-400">
                  {segment.title}
                </h3>
                <div className="w-8 h-px bg-[#c9a84c]/35 mb-6 group-hover:w-16 transition-all duration-500" />
                <p className="text-[#f5f0e8]/60 font-inter font-light text-sm leading-[1.9]">
                  {segment.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Ethos */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#111111] border-t border-[#c9a84c]/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter mb-6">
                Our Ethos
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] font-light leading-[1.5] mb-8">
                Safety, Sovereignty,{" "}
                <em className="text-[#c9a84c]">and Style.</em>
              </h2>
              <p className="text-[#f5f0e8]/60 font-inter font-light text-base leading-[1.9]">
                We design every gathering around three principles: that you feel
                completely safe, that your agency is absolute, and that beauty
                surrounds every moment. These are not aspirations. They are
                guarantees.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-6"
            >
              {["Consent is architecture, not policy.", "Luxury is the baseline, not the aspiration.", "Every guest is known before they arrive.", "Discretion is not a feature. It is the foundation."].map(
                (item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-5 h-px bg-[#c9a84c]/50 mt-3 flex-shrink-0" />
                    <p className="text-[#f5f0e8]/70 font-inter font-light text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 text-center border-t border-[#c9a84c]/10">
        <div className="max-w-3xl mx-auto">
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.7 }}
            className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter mb-6"
          >
            Membership
          </motion.p>
          <motion.h2
            {...fadeInUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] font-light leading-[1.5] mb-8"
          >
            Recognise yourself here?
            <br />
            <em className="text-[#c9a84c]">You may be one of us.</em>
          </motion.h2>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://dw7d97j0izd.typeform.com/to/ldsXW19a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c9a84c] text-[#1a1a1a] hover:bg-[#b8973b] px-10 py-5 font-semibold tracking-widest uppercase text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a84c]/20 hover:-translate-y-0.5"
            >
              Apply Now
            </a>
            <Link
              href="/membership"
              className="inline-block border border-[#c9a84c]/40 text-[#c9a84c] hover:border-[#c9a84c] hover:bg-[#c9a84c]/5 px-10 py-5 font-semibold tracking-widest uppercase text-sm transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
