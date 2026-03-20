"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const APPLY_URL = "https://dw7d97j0izd.typeform.com/to/ldsXW19a";

const teaserCards = [
  {
    title: "The Experience",
    description:
      "Workshops, rituals, and curated encounters designed for the discerning.",
    href: "/experience",
    cta: "Explore",
  },
  {
    title: "Our Vision",
    description:
      "Built on discretion, sophistication, and the art of refined desire.",
    href: "/vision",
    cta: "Discover",
  },
  {
    title: "Membership",
    description: "By invitation only. For those who understand.",
    href: "/membership",
    cta: "Apply",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function HomePage() {
  return (
    <div className="bg-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
            alt="Kinara House — luxury interior"
            fill
            unoptimized
            priority
            className="object-cover object-center"
          />
          {/* Layered overlays for luxury feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/50 to-[#1a1a1a]" />
          <div className="absolute inset-0 bg-[#1a1a1a]/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter font-semibold mb-8"
          >
            A Private Members Retreat
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl text-[#f5f0e8] leading-tight mb-8 font-light"
          >
            Where Desire{" "}
            <em className="text-[#c9a84c] not-italic">Meets</em>
            <br />
            Elegance.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[#f5f0e8]/70 text-lg md:text-xl font-inter font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            A hand-curated retreat for the adventurous, the tasteful, and the
            bold.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c9a84c] text-[#1a1a1a] hover:bg-[#b8973b] px-10 py-5 font-semibold tracking-widest uppercase text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a84c]/20 hover:-translate-y-0.5"
            >
              Begin Your Application
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[#c9a84c]/40 text-xs tracking-widest uppercase">
                Scroll
              </span>
              <div className="w-px h-8 bg-gradient-to-b from-[#c9a84c]/40 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Block */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter">
              Our Nature
            </span>
          </motion.div>

          <motion.h2
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#f5f0e8] text-center leading-tight mb-10 font-light"
          >
            Not a destination.{" "}
            <em className="text-[#c9a84c]">A transformation.</em>
          </motion.h2>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center"
          >
            <p className="text-[#f5f0e8]/70 text-lg md:text-xl font-inter font-light leading-[1.9]">
              Kinara House is not a destination. It is a transformation. We
              gather those who seek depth beyond the surface — curated souls
              drawn together by chemistry, intention, and the slow-burn alchemy
              of genuine connection.
            </p>
            <p className="text-[#f5f0e8]/60 text-base md:text-lg font-inter font-light leading-[1.9]">
              Here, ritual is not performance. Desire is not shame. Beauty is
              not ornament — it is the language we speak, the air we breathe,
              the architecture of every moment we design for you.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mt-14"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-[#c9a84c]/40" />
              <span className="font-playfair text-[#c9a84c] italic text-sm">
                est. 2026
              </span>
              <div className="w-16 h-px bg-[#c9a84c]/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teaser Cards */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 border-t border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter">
              Explore
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-[#c9a84c]/10">
            {teaserCards.map((card, i) => (
              <motion.div
                key={card.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                <Link
                  href={card.href}
                  className="group block bg-[#1a1a1a] hover:bg-[#222222] transition-colors duration-500 p-10 md:p-12 h-full"
                >
                  <div className="flex flex-col h-full min-h-[260px]">
                    <div className="mb-6">
                      <span className="text-[#c9a84c]/50 text-xs tracking-widest font-inter uppercase">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-playfair text-2xl md:text-3xl text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors duration-300 mb-5 font-normal">
                      {card.title}
                    </h3>
                    <p className="text-[#f5f0e8]/55 font-inter text-sm leading-relaxed flex-1">
                      {card.description}
                    </p>
                    <div className="mt-8 flex items-center gap-3">
                      <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-inter group-hover:gap-4 transition-all">
                        {card.cta}
                      </span>
                      <span className="text-[#c9a84c] group-hover:translate-x-1 transition-transform duration-300">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
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
            className="font-playfair text-3xl md:text-5xl text-[#f5f0e8] font-light mb-8 leading-tight"
          >
            By invitation only.
            <br />
            <em className="text-[#c9a84c]">Are you ready?</em>
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#f5f0e8]/55 font-inter font-light mb-12 leading-relaxed"
          >
            We do not sell memberships. We extend invitations — to those whose
            curiosity, elegance, and intention align with ours.
          </motion.p>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c9a84c] text-[#1a1a1a] hover:bg-[#b8973b] px-10 py-5 font-semibold tracking-widest uppercase text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a84c]/20 hover:-translate-y-0.5"
            >
              Begin Your Application
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
