"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const APPLY_URL = "https://dw7d97j0izd.typeform.com/to/ldsXW19a";

const processSteps = [
  {
    step: "01",
    title: "The Application",
    body: "A thoughtful questionnaire — not a form. We ask about who you are, how you live, and what you seek. There are no wrong answers, only honest ones.",
  },
  {
    step: "02",
    title: "The Review",
    body: "Each application is read by a human — not filtered by an algorithm. We are looking for alignment: with our values, our community, and the experience we are building.",
  },
  {
    step: "03",
    title: "The Conversation",
    body: "If we see a fit, we reach out. This is not an interview — it is the beginning of a relationship. We want to understand you, and we want you to understand us.",
  },
  {
    step: "04",
    title: "The Invitation",
    body: "If alignment is confirmed, you receive your invitation. From here, the experience of Kinara House begins — before you ever arrive.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function MembershipPage() {
  return (
    <div className="bg-[#1a1a1a]">
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=1920&q=80"
            alt="Kinara House Membership — luxury private space"
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
            Membership
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl text-[#f5f0e8] leading-tight font-light"
          >
            We Do Not{" "}
            <em className="text-[#c9a84c]">Sell</em>
            <br />
            Memberships.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-[#f5f0e8]/65 text-lg font-inter font-light"
          >
            We extend invitations.
          </motion.p>
        </div>
      </section>

      {/* Main Copy */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-16 h-px bg-[#c9a84c]/40" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter">
                How It Works
              </span>
              <div className="w-16 h-px bg-[#c9a84c]/40" />
            </div>
          </motion.div>

          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-2xl md:text-3xl text-[#f5f0e8] font-light leading-[1.7] italic text-center mb-10"
          >
            &ldquo;Kinara House does not sell memberships. It extends
            invitations. Each applicant is reviewed with care — not for status
            or wealth, but for alignment, intention, and the quality of their
            curiosity.&rdquo;
          </motion.p>

          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#f5f0e8]/60 font-inter font-light text-base md:text-lg leading-[1.9] text-center"
          >
            Membership is not a transaction. It is a relationship — one that
            begins with an honest conversation and deepens over time. We are
            building a community of remarkable people. Every invitation carries
            that weight.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mt-14"
          >
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c9a84c] text-[#1a1a1a] hover:bg-[#b8973b] px-12 py-5 font-semibold tracking-widest uppercase text-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#c9a84c]/20 hover:-translate-y-0.5"
            >
              Begin Your Application
            </a>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 border-t border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter">
              The Process
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] font-light mt-4">
              The Application
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c9a84c]/10">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="bg-[#1a1a1a] hover:bg-[#1d1d1d] transition-colors duration-500 p-10 md:p-14"
              >
                <span className="block text-[#c9a84c]/35 text-xs tracking-widest font-inter uppercase mb-6">
                  {step.step}
                </span>
                <h3 className="font-playfair text-2xl text-[#f5f0e8] font-normal mb-5">
                  {step.title}
                </h3>
                <div className="w-8 h-px bg-[#c9a84c]/40 mb-6" />
                <p className="text-[#f5f0e8]/60 font-inter font-light text-sm leading-[1.9]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Are Looking For */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#111111] border-t border-[#c9a84c]/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter">
              Our Standard
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] font-light mt-5 mb-10 leading-[1.4]">
              What We Are{" "}
              <em className="text-[#c9a84c]">Looking For</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { label: "Alignment", desc: "With our values of discretion, sophistication, and intentional experience." },
              { label: "Intention", desc: "A clarity of purpose — knowing what you seek and why." },
              { label: "Curiosity", desc: "An open mind. A willingness to learn, grow, and be surprised." },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="text-center"
              >
                <div className="w-12 h-px bg-[#c9a84c]/40 mx-auto mb-5" />
                <h3 className="font-playfair text-xl text-[#c9a84c] mb-4">
                  {item.label}
                </h3>
                <p className="text-[#f5f0e8]/55 font-inter font-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Typeform Embed */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-[#c9a84c]/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter mb-4 block">
              The Form
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] font-light leading-[1.5]">
              Begin Here.
            </h2>
            <p className="text-[#f5f0e8]/55 font-inter font-light mt-4 text-sm leading-relaxed max-w-xl mx-auto">
              Take your time. Answer honestly. We read every response with the
              same care we bring to every experience we design.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="border border-[#c9a84c]/15 overflow-hidden"
          >
            <iframe
              src={APPLY_URL}
              width="100%"
              height="700px"
              frameBorder="0"
              allow="camera; microphone; autoplay; encrypted-media;"
              title="Kinara House Membership Application"
              className="block"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
