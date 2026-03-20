"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is Kinara House a sex club?",
    answer:
      "No. Kinara House is a luxury retreat for adults who are curious, open-minded, and sophisticated. While we create environments where intimacy can flourish, we do not operate as a club. Think of us as the space between Aman and Soho House — with a more honest conversation about desire.",
  },
  {
    question: "What is the dress code?",
    answer:
      "Dress as a heightened version of yourself. Evening events call for elegant, intentional attire — think: a gallery opening meets a private members dinner. We provide guidance prior to arrival.",
  },
  {
    question: "How is my privacy protected?",
    answer:
      "Every guest signs a comprehensive NDA. No cameras. No social media. No real names required. Our staff are trained in discretion. The architecture itself is designed to protect anonymity.",
  },
  {
    question: "Do I need experience with tantra or shibari?",
    answer:
      "Absolutely not. Our facilitators are world-class teachers who welcome all levels. Curiosity and openness are the only prerequisites.",
  },
  {
    question: "How do I join?",
    answer:
      "Apply via our application form. We review every applicant personally. If there is alignment, you will hear from us. We do not maintain a waiting list — we maintain a conversation.",
  },
];

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-b border-[#c9a84c]/15 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full text-left py-8 flex items-start justify-between gap-6 group focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-5 flex-1">
          <span className="text-[#c9a84c]/35 text-xs font-inter tracking-widest pt-1 flex-shrink-0">
            0{index + 1}
          </span>
          <h3
            className={`font-playfair text-lg md:text-xl transition-colors duration-300 leading-snug ${
              isOpen
                ? "text-[#c9a84c]"
                : "text-[#f5f0e8] group-hover:text-[#c9a84c]/80"
            }`}
          >
            {faq.question}
          </h3>
        </div>
        <div className="flex-shrink-0 mt-1">
          <div
            className={`w-6 h-6 border border-[#c9a84c]/30 flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? "border-[#c9a84c]/60 bg-[#c9a84c]/10 rotate-45"
                : "group-hover:border-[#c9a84c]/50"
            }`}
          >
            <span
              className={`text-[#c9a84c] text-base leading-none transition-all duration-300 ${
                isOpen ? "opacity-70" : ""
              }`}
            >
              +
            </span>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-11 pr-8">
              <p className="text-[#f5f0e8]/65 font-inter font-light text-base leading-[1.9]">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#1a1a1a]">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/60 to-[#1a1a1a]" />
          <div className="absolute inset-0 bg-[#1a1a1a]/40" />
          {/* Subtle pattern bg */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter font-semibold mb-8"
          >
            Frequently Asked
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl text-[#f5f0e8] leading-tight font-light"
          >
            Questions &{" "}
            <em className="text-[#c9a84c]">Clarity.</em>
          </motion.h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-[#c9a84c]/40" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter">
                Answered
              </span>
            </div>
            <p className="text-[#f5f0e8]/55 font-inter font-light text-base leading-relaxed">
              We believe in transparency — within the bounds of our absolute
              commitment to discretion. If your question is not answered here,
              reach out directly.
            </p>
          </motion.div>

          <div>
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#111111] border-t border-[#c9a84c]/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-inter block mb-6">
              Still Curious?
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] font-light mb-6 leading-[1.5]">
              We welcome the question.
            </h2>
            <p className="text-[#f5f0e8]/55 font-inter font-light text-base leading-relaxed mb-10">
              The most interesting conversations often begin with a simple
              question. Write to us — we reply to every message personally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@kinara.house"
                className="inline-block border border-[#c9a84c]/40 text-[#c9a84c] hover:border-[#c9a84c] hover:bg-[#c9a84c]/5 px-10 py-4 font-semibold tracking-widest uppercase text-sm transition-all duration-300"
              >
                hello@kinara.house
              </a>
              <a
                href="https://dw7d97j0izd.typeform.com/to/ldsXW19a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c9a84c] text-[#1a1a1a] hover:bg-[#b8973b] px-10 py-4 font-semibold tracking-widest uppercase text-sm transition-all duration-300"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
