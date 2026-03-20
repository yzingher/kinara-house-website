"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const TYPEFORM_URL = "https://dw7d97j0izd.typeform.com/to/ldsXW19a";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const faqs = [
  {
    q: "How is this different from a high-end dating app?",
    a: "Apps are a numbers game; Kinara is a quality game. We remove the swipe and the ghosting. You aren't browsing a catalog; you are being introduced to a vetted peer by a human who has spoken to both of you.",
  },
  {
    q: "Does Kinara House have a physical location?",
    a: "We are a House without Walls. We operate globally, hosting pop-up events and master-led workshops in high-end, discreet locations. Think of us as a private club that travels with its members.",
  },
  {
    q: "Do you help with Poly-cule building or finding a Third?",
    a: "Yes. We specialise in the complexities of multi-partner dynamics. We facilitate the delicate conversations required to ensure that any plus-one or third is entering a dynamic built on equity and enthusiasm, not just filling a slot.",
  },
  {
    q: "What happens if I have a bad experience with a match?",
    a: "We conduct a mandatory debrief after every first introduction. If a member violates a boundary or fails to uphold the Kinara Code of Respect, their membership is revoked immediately. We protect the integrity of the circle above all else.",
  },
  {
    q: "Can I join if I'm single but looking for a monogamous partner?",
    a: "No. Kinara House is strictly for those committed to Ethical Non-Monogamy in its various forms. We are a sanctuary for people who don't want to explain their lifestyle on a first date.",
  },
  {
    q: "How do you handle the Tourist problem?",
    a: "We reject roughly 60% of applicants. If we sense someone is just looking for a thrill without the emotional intelligence to handle the ENM landscape, we do not admit them. Our members pay for a tourist-free environment.",
  },
  {
    q: "What if I see someone I know in the network?",
    a: "You won't. There is no browsing. You only ever see the identity of someone we have specifically matched you with, and only after you have both expressed interest in the concept of each other.",
  },
  {
    q: "I'm in a couple, but my partner doesn't want to be involved in the matchmaking. Can I join alone?",
    a: "You can join as a Sovereign, but we still require a brief Consent Check with your partner. We do not facilitate cheating or Don't Ask Don't Tell dynamics that lack foundational transparency.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#C9A96E]/20">
      <button
        className="w-full flex items-start justify-between py-7 text-left gap-6"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-cormorant text-[#F0EAD6] leading-snug"
          style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
        >
          {q}
        </span>
        <span
          className="shrink-0 w-5 h-5 mt-1 flex items-center justify-center text-[#C9A96E] transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <line x1="6.5" y1="0" x2="6.5" y2="13" stroke="currentColor" strokeWidth="1.2" />
            <line x1="0" y1="6.5" x2="13" y2="6.5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: open ? "400px" : "0px" }}
      >
        <p className="pb-7 text-[#F0EAD6]/60 text-base leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function Home() {
  useScrollReveal();

  return (
    <div className="bg-[#0f0d0b] text-[#F0EAD6]">

      {/* ─── 1. HERO ─── */}
      <section
        className="relative min-h-screen flex flex-col justify-end pb-28 px-6 md:px-16 lg:px-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 20% 30%, rgba(201,169,110,0.09) 0%, transparent 55%), " +
            "radial-gradient(ellipse 60% 80% at 85% 75%, rgba(160,101,106,0.07) 0%, transparent 55%), " +
            "linear-gradient(155deg, #1c1610 0%, #0f0d0b 45%, #0b0909 100%)",
        }}
      >
        {/* Grain texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Top nav bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-16 lg:px-24 py-8 z-10">
          <span
            className="font-cormorant text-[#C9A96E] tracking-[0.32em] text-sm font-medium uppercase"
          >
            KINARA HOUSE
          </span>
          <a
            href={TYPEFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A96E] border border-[#C9A96E]/40 hover:border-[#C9A96E] hover:bg-[#C9A96E]/10 px-5 py-2.5 text-[11px] tracking-widest uppercase transition-all duration-300 font-medium"
          >
            Apply
          </a>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl">
          <p className="text-[#C9A96E]/80 tracking-[0.35em] text-[11px] uppercase mb-10 font-medium">
            Private Members — Est. London
          </p>
          <h1
            className="font-cormorant font-light leading-[0.9] text-[#F0EAD6] mb-12"
            style={{ fontSize: "clamp(3.2rem, 8.5vw, 7rem)" }}
          >
            The Architecture<br />
            <em className="italic" style={{ color: "#D4BC88" }}>of Modern</em><br />
            Intimacy.
          </h1>
          <p
            className="text-[#F0EAD6]/55 leading-relaxed mb-14 max-w-xl"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
          >
            A bespoke matchmaking house for the ENM community. We curate high-chemistry
            connections for adventurous couples and intentional singles who have outgrown
            the noise of the apps.
          </p>
          <a
            href={TYPEFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A96E] text-[#0f0d0b] px-11 py-4 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d9bc85] transition-all duration-300"
          >
            Apply Now
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 right-6 md:right-16 lg:right-24 flex flex-col items-center gap-3">
          <span className="text-[#F0EAD6]/25 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <div className="w-px h-14 bg-gradient-to-b from-[#C9A96E]/35 to-transparent" />
        </div>
      </section>

      {/* ─── 2. THE NARRATIVE ─── */}
      <section
        className="relative py-36 md:py-56 px-6 md:px-16 lg:px-24"
        style={{
          background: "linear-gradient(180deg, #0f0d0b 0%, #131009 60%, #0f0d0b 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <div className="w-16 h-px bg-[#C9A96E]/40 mb-20" />
          </div>
          <div className="reveal reveal-delay-1">
            <p
              className="font-cormorant font-light text-[#F0EAD6] leading-[1.35]"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)" }}
            >
              Kinara House is not a place; it is a standard. We serve those who live with taste,
              confidence, and a clear understanding of their own desire. Whether you are a couple
              seeking to expand your circle or a single person dedicated to the ENM path, we
              provide the vetting, the atmosphere, and the introductions that traditional dating
              platforms cannot.
            </p>
          </div>
          <div className="reveal reveal-delay-2">
            <p
              className="font-cormorant font-light text-[#F0EAD6]/60 leading-[1.35] mt-10"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)" }}
            >
              In our world, desire is paired with elegance. We bridge the gap between
              &lsquo;lifestyle&rsquo; and &lsquo;luxury,&rsquo; creating a private ecosystem defined by radical
              respect and sophisticated play.
            </p>
          </div>
          <div className="reveal reveal-delay-3 mt-20">
            <div className="w-8 h-px bg-[#C9A96E]/40" />
          </div>
        </div>
      </section>

      {/* ─── 3. THE KINARA CODE ─── */}
      <section className="py-36 md:py-56 px-6 md:px-16 lg:px-24 bg-[#0f0d0b]">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-24">
            <p className="text-[#C9A96E]/70 tracking-[0.32em] text-[11px] uppercase mb-5 font-medium">
              The Foundation
            </p>
            <h2
              className="font-cormorant font-light text-[#F0EAD6]"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
            >
              The Kinara Code
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20 lg:gap-x-32">
            <div className="reveal reveal-delay-1">
              <div className="w-8 h-px bg-[#C9A96E] mb-8" />
              <h3
                className="font-cormorant text-[#F0EAD6] mb-5 leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)" }}
              >
                The Vetted Circle
              </h3>
              <p className="text-[#F0EAD6]/55 leading-relaxed">
                We don&rsquo;t use algorithms; we use intuition and rigorous human vetting.
                Every member is hand-selected.
              </p>
            </div>

            <div className="reveal reveal-delay-2 md:mt-28">
              <div className="w-8 h-px bg-[#C9A96E] mb-8" />
              <h3
                className="font-cormorant text-[#F0EAD6] mb-5 leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)" }}
              >
                Absolute Discretion
              </h3>
              <p className="text-[#F0EAD6]/55 leading-relaxed">
                We operate a closed-loop system where identities are protected until
                mutual intent is established.
              </p>
            </div>

            <div className="reveal reveal-delay-1">
              <div className="w-8 h-px bg-[#A0656A] mb-8" />
              <h3
                className="font-cormorant text-[#F0EAD6] mb-5 leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)" }}
              >
                Relational Mastery
              </h3>
              <p className="text-[#F0EAD6]/55 leading-relaxed">
                We believe ENM is a skill. We provide access to world-class masters in Tantra,
                Shibari, and Conscious Communication to ensure our members are as skilled
                as they are adventurous.
              </p>
            </div>

            <div className="reveal reveal-delay-2 md:mt-28">
              <div className="w-8 h-px bg-[#A0656A] mb-8" />
              <h3
                className="font-cormorant text-[#F0EAD6] mb-5 leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)" }}
              >
                Intentionality
              </h3>
              <p className="text-[#F0EAD6]/55 leading-relaxed">
                We are a destination for the decided. We do not cater to the curious or the
                undecided. We cater to those who know what they want and how to communicate it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. THE PROCESS ─── */}
      <section
        className="py-36 md:py-56 px-6 md:px-16 lg:px-24"
        style={{
          background: "linear-gradient(180deg, #0f0d0b 0%, #12100d 55%, #0f0d0b 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="reveal mb-28">
            <p className="text-[#C9A96E]/70 tracking-[0.32em] text-[11px] uppercase mb-5 font-medium">
              How We Work
            </p>
            <h2
              className="font-cormorant font-light text-[#F0EAD6]"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
            >
              The Process
            </h2>
          </div>

          {/* Step I */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-[180px,1fr] gap-8 lg:gap-20 py-16 border-t border-[#C9A96E]/12">
            <div>
              <span
                className="font-cormorant text-[#C9A96E]/30 font-light"
                style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
              >
                I
              </span>
              <h3
                className="font-cormorant text-[#F0EAD6] mt-3 leading-tight"
                style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}
              >
                The Sovereign Audit
              </h3>
            </div>
            <div className="self-center">
              <p className="text-[#F0EAD6]/60 leading-relaxed text-base lg:text-[1.05rem]">
                It starts with an application that goes deeper than a bio. We ask about your
                boundaries, your relationship history, and your specific erotic north star.
                If your application aligns with our values, we move to a 1-on-1 video interview.
              </p>
            </div>
          </div>

          {/* Step II */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-[180px,1fr] gap-8 lg:gap-20 py-16 border-t border-[#C9A96E]/12">
            <div>
              <span
                className="font-cormorant text-[#C9A96E]/30 font-light"
                style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
              >
                II
              </span>
              <h3
                className="font-cormorant text-[#F0EAD6] mt-3 leading-tight"
                style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}
              >
                The Deep-Dive Curation
              </h3>
            </div>
            <div className="self-center">
              <p className="text-[#F0EAD6]/60 leading-relaxed text-base lg:text-[1.05rem] mb-7">
                Once admitted, your matchmaker begins scanning the house. We don&rsquo;t look for
                likes; we look for Triple Alignment:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 text-[#F0EAD6]/60 text-base lg:text-[1.05rem]">
                  <span className="text-[#C9A96E] shrink-0 select-none">—</span>
                  <span>
                    <span className="text-[#F0EAD6]/85 font-medium">Structural</span> — You both
                    want the same relationship style (Poly, Kitchen Table, Parallel, etc.)
                  </span>
                </li>
                <li className="flex gap-4 text-[#F0EAD6]/60 text-base lg:text-[1.05rem]">
                  <span className="text-[#C9A96E] shrink-0 select-none">—</span>
                  <span>
                    <span className="text-[#F0EAD6]/85 font-medium">Intellectual</span> — Your
                    lifestyles and values create a foundation of respect.
                  </span>
                </li>
                <li className="flex gap-4 text-[#F0EAD6]/60 text-base lg:text-[1.05rem]">
                  <span className="text-[#C9A96E] shrink-0 select-none">—</span>
                  <span>
                    <span className="text-[#F0EAD6]/85 font-medium">Erotic</span> — Your desires
                    and boundaries create the necessary spark.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step III */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-[180px,1fr] gap-8 lg:gap-20 py-16 border-t border-b border-[#C9A96E]/12">
            <div>
              <span
                className="font-cormorant text-[#C9A96E]/30 font-light"
                style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
              >
                III
              </span>
              <h3
                className="font-cormorant text-[#F0EAD6] mt-3 leading-tight"
                style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}
              >
                The Facilitated Introduction
              </h3>
            </div>
            <div className="self-center">
              <p className="text-[#F0EAD6]/60 leading-relaxed text-base lg:text-[1.05rem]">
                We don&rsquo;t just send a contact. We set the stage. This might be a private dinner
                reservation at a discreet partner venue or an invitation for both parties to
                attend a specific Kinara Ritual — to meet in a low-pressure, high-vibe environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. MEMBERSHIP TIERS ─── */}
      <section className="py-36 md:py-56 px-6 md:px-16 lg:px-24 bg-[#0f0d0b]">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-24">
            <p className="text-[#C9A96E]/70 tracking-[0.32em] text-[11px] uppercase mb-5 font-medium">
              Membership
            </p>
            <h2
              className="font-cormorant font-light text-[#F0EAD6]"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
            >
              Three Ways In
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
            {/* The Sovereign */}
            <div className="reveal reveal-delay-1 border border-[#F0EAD6]/10 p-10 flex flex-col hover:border-[#F0EAD6]/22 transition-all duration-500">
              <p className="text-[#C9A96E]/75 tracking-[0.28em] text-[10px] uppercase mb-7 font-medium">
                The Sovereign
              </p>
              <h3
                className="font-cormorant text-[#F0EAD6] mb-5 leading-tight"
                style={{ fontSize: "clamp(1.5rem, 2vw, 1.9rem)" }}
              >
                Intentional Singles
              </h3>
              <p className="text-[#F0EAD6]/50 text-sm leading-relaxed mb-10 flex-1">
                Full vetting, individual profile curation, 1:1 matchmaking, and access to all workshops.
              </p>
              <a
                href={TYPEFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block self-start border border-[#C9A96E]/45 text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0f0d0b] px-8 py-3 text-[10px] tracking-widest uppercase transition-all duration-300 font-medium"
              >
                Apply Now
              </a>
            </div>

            {/* The Duo */}
            <div className="reveal reveal-delay-2 border border-[#F0EAD6]/10 p-10 flex flex-col hover:border-[#F0EAD6]/22 transition-all duration-500">
              <p className="text-[#C9A96E]/75 tracking-[0.28em] text-[10px] uppercase mb-7 font-medium">
                The Duo
              </p>
              <h3
                className="font-cormorant text-[#F0EAD6] mb-5 leading-tight"
                style={{ fontSize: "clamp(1.5rem, 2vw, 1.9rem)" }}
              >
                Adventurous Couples
              </h3>
              <p className="text-[#F0EAD6]/50 text-sm leading-relaxed mb-10 flex-1">
                Joint vetting, dynamic-specific matching (finding 3rds or other couples), and Couples-Only salons.
              </p>
              <a
                href={TYPEFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block self-start border border-[#C9A96E]/45 text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0f0d0b] px-8 py-3 text-[10px] tracking-widest uppercase transition-all duration-300 font-medium"
              >
                Apply Now
              </a>
            </div>

            {/* The Elite — featured */}
            <div
              className="reveal reveal-delay-3 p-10 flex flex-col relative"
              style={{
                border: "1px solid #C9A96E",
                boxShadow:
                  "0 0 70px rgba(201,169,110,0.1), 0 0 140px rgba(201,169,110,0.04), inset 0 0 40px rgba(201,169,110,0.03)",
                background:
                  "linear-gradient(145deg, rgba(201,169,110,0.06) 0%, rgba(201,169,110,0.01) 50%, transparent 100%)",
              }}
            >
              <div className="absolute top-0 right-0 bg-[#C9A96E] px-3 py-1.5">
                <span className="text-[#0f0d0b] text-[9px] tracking-[0.2em] uppercase font-semibold">
                  Featured
                </span>
              </div>
              <p className="text-[#C9A96E]/90 tracking-[0.28em] text-[10px] uppercase mb-7 font-medium">
                The Elite
              </p>
              <h3
                className="font-cormorant text-[#F0EAD6] mb-5 leading-tight"
                style={{ fontSize: "clamp(1.5rem, 2vw, 1.9rem)" }}
              >
                High-Profile & HNW Individuals
              </h3>
              <p className="text-[#F0EAD6]/50 text-sm leading-relaxed mb-10 flex-1">
                Fully anonymous concierge service, NDA-protected introductions, and private-hire master sessions.
              </p>
              <a
                href={TYPEFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block self-start bg-[#C9A96E] text-[#0f0d0b] hover:bg-[#d9bc85] px-8 py-3 text-[10px] tracking-widest uppercase transition-all duration-300 font-semibold"
              >
                Apply Now
              </a>
            </div>
          </div>

          <div className="reveal mt-14 text-center">
            <p className="text-[#F0EAD6]/30 text-sm tracking-wide">
              Pricing is discussed after vetting. We keep it this way intentionally.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 6. FAQ ─── */}
      <section
        className="py-36 md:py-56 px-6 md:px-16 lg:px-24"
        style={{
          background: "linear-gradient(180deg, #0f0d0b 0%, #12100d 55%, #0f0d0b 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="reveal mb-16">
            <p className="text-[#C9A96E]/70 tracking-[0.32em] text-[11px] uppercase mb-5 font-medium">
              Clarity
            </p>
            <h2
              className="font-cormorant font-light text-[#F0EAD6]"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
            >
              Questions Worth Asking
            </h2>
          </div>

          <div className="reveal reveal-delay-1">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. PRIVACY ─── */}
      <section className="py-36 md:py-56 px-6 md:px-16 lg:px-24 bg-[#0f0d0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal mb-24">
            <p className="text-[#C9A96E]/70 tracking-[0.32em] text-[11px] uppercase mb-5 font-medium">
              Privacy & Trust
            </p>
            <h2
              className="font-cormorant font-light text-[#F0EAD6] leading-tight"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
            >
              Built on Trust,<br />
              Protected by Design
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20">
            <div className="reveal reveal-delay-1">
              <div className="w-8 h-px bg-[#C9A96E] mb-7" />
              <h3 className="font-cormorant text-[#F0EAD6] mb-4 leading-tight text-2xl">
                Your data stays yours
              </h3>
              <p className="text-[#F0EAD6]/55 leading-relaxed">
                We collect only what we need to match you well. We never sell, share, or
                monetise your personal information. Ever.
              </p>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="w-8 h-px bg-[#C9A96E] mb-7" />
              <h3 className="font-cormorant text-[#F0EAD6] mb-4 leading-tight text-2xl">
                Videos are private
              </h3>
              <p className="text-[#F0EAD6]/55 leading-relaxed">
                Your application video is only ever seen by our small matching team. Never
                shared with members, never used in marketing, deleted if you leave.
              </p>
            </div>

            <div className="reveal reveal-delay-1">
              <div className="w-8 h-px bg-[#A0656A] mb-7" />
              <h3 className="font-cormorant text-[#F0EAD6] mb-4 leading-tight text-2xl">
                You&rsquo;re in control
              </h3>
              <p className="text-[#F0EAD6]/55 leading-relaxed">
                View, update, or delete your data at any time. Want to leave? We remove
                everything — no questions, no hoops.
              </p>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="w-8 h-px bg-[#A0656A] mb-7" />
              <h3 className="font-cormorant text-[#F0EAD6] mb-4 leading-tight text-2xl">
                GDPR compliant
              </h3>
              <p className="text-[#F0EAD6]/55 leading-relaxed">
                We operate under UK GDPR. Your data is processed lawfully, stored securely,
                and handled with the care it deserves.
              </p>
            </div>
          </div>

          <div className="reveal mt-16">
            <Link
              href="/privacy"
              className="text-[#C9A96E] border-b border-[#C9A96E]/35 hover:border-[#C9A96E] text-[11px] tracking-[0.2em] uppercase pb-1 transition-all duration-300"
            >
              Read our Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 8. CLOSING CTA ─── */}
      <section
        className="relative py-48 md:py-64 px-6 md:px-16 lg:px-24 text-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,169,110,0.09) 0%, transparent 65%), " +
            "linear-gradient(180deg, #0f0d0b 0%, #131009 50%, #0f0d0b 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="reveal flex justify-center mb-14">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#C9A96E]/35 to-transparent" />
          </div>
          <h2
            className="reveal font-cormorant font-light text-[#F0EAD6] leading-[1.1] mb-8"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)" }}
          >
            Ready to be introduced<br />
            <em className="italic text-[#C9A96E]">to someone worth</em><br />
            your time?
          </h2>
          <p className="reveal reveal-delay-1 text-[#F0EAD6]/50 text-base lg:text-lg mb-14 leading-relaxed">
            The application takes five minutes.<br />
            Your next connection starts here.
          </p>
          <div className="reveal reveal-delay-2">
            <a
              href={TYPEFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C9A96E] text-[#0f0d0b] px-14 py-5 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d9bc85] transition-all duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* ─── 9. FOOTER ─── */}
      <footer className="border-t border-[#C9A96E]/12 py-14 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <span
            className="font-cormorant text-[#C9A96E] tracking-[0.32em] text-base font-medium uppercase"
          >
            KINARA HOUSE
          </span>
          <div className="flex flex-col md:flex-row items-center gap-6 text-[#F0EAD6]/30 text-sm">
            <a
              href="mailto:hello@kinara.house"
              className="hover:text-[#C9A96E] transition-colors duration-200"
            >
              hello@kinara.house
            </a>
            <Link
              href="/privacy"
              className="hover:text-[#C9A96E] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span>&copy; 2026 Kinara House. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
