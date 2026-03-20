"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const APPLY_URL = "https://dw7d97j0izd.typeform.com/to/ldsXW19a";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ApplyBtn({
  outline = false,
  large = false,
  className = "",
}: {
  outline?: boolean;
  large?: boolean;
  className?: string;
}) {
  const base = `inline-block font-semibold tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${
    large ? "px-10 py-5 text-base" : "px-8 py-4 text-sm"
  }`;
  const variant = outline
    ? "border border-[#D4A853] text-[#D4A853] hover:bg-[#D4A853] hover:text-[#1a1a1a]"
    : "bg-[#D4A853] text-[#1a1a1a] hover:bg-[#c49840] hover:shadow-lg hover:shadow-[#D4A853]/20";

  return (
    <a
      href={APPLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variant} ${className}`}
    >
      Apply Now
    </a>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#1a1a1a]">
      {/* ─── 1. HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 25% 50%, rgba(212,168,83,0.09) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 75% 20%, rgba(201,123,123,0.07) 0%, transparent 55%), #1a1a1a",
        }}
      >
        {/* subtle grain texture via SVG filter */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "256px",
        }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl text-[#f5f0e8] font-normal leading-tight mb-6"
          >
            Done swiping.
            <br />
            <em className="text-[#D4A853] not-italic">Start meeting.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-[#f5f0e8]/65 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Kinara House is a curated matchmaking service for London&apos;s ENM community.
            No algorithms. No swiping. Just thoughtful introductions between people who
            are actually worth meeting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <ApplyBtn large />
          </motion.div>
        </div>

        {/* scroll nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#D4A853]/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── 2. HOW IT WORKS ─── */}
      <section className="py-24 md:py-32 px-6 border-t border-[#D4A853]/10">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-3">
            <span className="text-[#D4A853] text-xs tracking-[0.35em] uppercase font-semibold">
              How It Works
            </span>
          </FadeUp>
          <FadeUp delay={0.1} className="text-center mb-6">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#f5f0e8] font-normal">
              We do the work so you skip the guesswork
            </h2>
          </FadeUp>
          <FadeUp delay={0.15} className="text-center mb-16">
            <p className="text-[#f5f0e8]/55 text-lg leading-relaxed max-w-2xl mx-auto">
              Every member goes through the same process — a short application, a questionnaire,
              and a quick video. We use that to understand who you are, what you&apos;re looking
              for, and how you connect.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                num: "01",
                title: "Tell us about you",
                body: "A short application and a 2-minute video where you share what you're looking for. It gives us what no questionnaire can — a real sense of who you are and how you communicate.",
              },
              {
                num: "02",
                title: "We learn what matters",
                body: "Our team reviews every application personally. We understand your dating intentions, your energy, what kind of connection you're after — so when we match, we're matching on what actually matters.",
              },
              {
                num: "03",
                title: "Meet with confidence",
                body: "When we make an introduction, both people already know you're looking for the same thing. No misaligned expectations, no wasted evenings — just two people who've been thoughtfully matched by someone who knows them both.",
              },
            ].map((step, i) => (
              <FadeUp key={step.num} delay={0.1 + i * 0.1}>
                <div>
                  <span className="block font-playfair text-4xl text-[#D4A853]/25 mb-4 font-normal">
                    {step.num}
                  </span>
                  <h3 className="font-playfair text-xl text-[#f5f0e8] mb-3">{step.title}</h3>
                  <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">{step.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. WHY KINARA HOUSE ─── */}
      <section
        className="py-24 md:py-32 px-6 border-t border-[#D4A853]/10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(212,168,83,0.05) 0%, transparent 60%), #1a1a1a",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-3">
            <span className="text-[#D4A853] text-xs tracking-[0.35em] uppercase font-semibold">
              Why Kinara House
            </span>
          </FadeUp>
          <FadeUp delay={0.1} className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#f5f0e8] font-normal">
              You&apos;ve tried everything else
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Not another app",
                body: "No swiping, no algorithms, no inbox full of 'hey.' Every introduction is made by a real person who's watched your video and theirs.",
              },
              {
                title: "Built for people who get it",
                body: "You won't have to explain your relationship structure. Everyone here already understands. No awkward conversations, no educating — just connection.",
              },
              {
                title: "Quality over quantity",
                body: "We'd rather make one great introduction than twenty mediocre ones. Every member is vetted. Every match is intentional.",
              },
              {
                title: "Discreet by design",
                body: "Your video is only seen by our team. Your information is never shared without your consent. We understand that privacy matters.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={0.05 * i}>
                <div className="bg-[#242424] p-8 border border-[#D4A853]/8 h-full">
                  <div className="w-8 h-px bg-[#D4A853] mb-5" />
                  <h3 className="font-playfair text-xl text-[#f5f0e8] mb-3">{item.title}</h3>
                  <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. MEMBERSHIP / PRICING ─── */}
      <section className="py-24 md:py-32 px-6 border-t border-[#D4A853]/10">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-3">
            <span className="text-[#D4A853] text-xs tracking-[0.35em] uppercase font-semibold">
              Membership
            </span>
          </FadeUp>
          <FadeUp delay={0.1} className="text-center mb-4">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#f5f0e8] font-normal">
              Two ways to join
            </h2>
          </FadeUp>
          <FadeUp delay={0.15} className="text-center mb-14">
            <p className="text-[#f5f0e8]/55 text-lg leading-relaxed max-w-xl mx-auto">
              Every member goes through the same vetting. The difference is how hard we
              work to find your next introduction.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 — Member (Free) */}
            <FadeUp delay={0.1}>
              <div className="bg-[#242424] border border-[#D4A853]/15 p-8 md:p-10 flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="font-playfair text-2xl text-[#f5f0e8] mb-1">Join the book</h3>
                  <p className="text-[#D4A853] text-3xl font-playfair mt-4">Free</p>
                </div>
                <p className="text-[#f5f0e8]/55 text-sm leading-relaxed mb-8">
                  You&apos;re vetted, you&apos;re in our book, and you&apos;re visible to our
                  matching team. When we spot a strong match, we make the introduction —
                  with the same care and personal context as every Kinara House connection.
                </p>
                <ul className="space-y-3 mb-10 flex-1">
                  {[
                    "Full vetting and personal review",
                    "Introductions when we find a great match",
                    "Same quality, same personal touch",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#f5f0e8]/55">
                      <span className="text-[#D4A853] mt-0.5 shrink-0">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <ApplyBtn outline />
              </div>
            </FadeUp>

            {/* Card 2 — Concierge (Featured) */}
            <FadeUp delay={0.2}>
              <div className="relative bg-[#2a2218] border border-[#D4A853]/40 p-8 md:p-10 flex flex-col h-full">
                {/* gold glow */}
                <div className="absolute inset-0 rounded-none pointer-events-none" style={{
                  background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,168,83,0.07) 0%, transparent 70%)"
                }} />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div>
                      <h3 className="font-playfair text-2xl text-[#f5f0e8] mb-1">
                        We go looking for you
                      </h3>
                      <div className="flex items-center gap-3 mt-4">
                        <p className="text-[#D4A853] text-3xl font-playfair">£199<span className="text-lg">/mo</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#D4A853]/10 border border-[#D4A853]/25 px-4 py-3 mb-6">
                    <p className="text-[#D4A853] text-sm font-semibold">
                      Founding member: £99/month, locked in forever
                    </p>
                    <p className="text-[#D4A853]/70 text-xs mt-0.5">
                      7 of 20 founding spots remaining
                    </p>
                  </div>
                  <p className="text-[#f5f0e8]/60 text-sm leading-relaxed mb-8">
                    The full service. A dedicated matching session to understand exactly what
                    you&apos;re looking for, active sourcing on your behalf, and first priority
                    when someone great joins.
                  </p>
                  <ul className="space-y-3 mb-10">
                    {[
                      "Personal matching session with our team",
                      "Active sourcing: we don't wait, we search",
                      "First priority on new members",
                      "Minimum 2 introductions per month",
                      "3-month commitment",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[#f5f0e8]/60">
                        <span className="text-[#D4A853] mt-0.5 shrink-0">—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <ApplyBtn />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── 5. CLOSING CTA ─── */}
      <section
        className="py-24 md:py-32 px-6 text-center border-t border-[#D4A853]/10"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(212,168,83,0.07) 0%, transparent 65%), #1a1a1a",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-playfair text-3xl md:text-5xl text-[#f5f0e8] font-normal leading-tight mb-6">
              Ready to meet someone worth your time?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[#f5f0e8]/55 text-lg leading-relaxed mb-12">
              The application takes five minutes. Both memberships start with the same
              application — you choose your tier after you&apos;re in.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <ApplyBtn large />
          </FadeUp>
        </div>
      </section>

      {/* ─── 6. TRUST & PRIVACY ─── */}
      <section className="py-24 md:py-32 px-6 border-t border-[#D4A853]/10">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-3">
            <span className="text-[#D4A853] text-xs tracking-[0.35em] uppercase font-semibold">
              Your Privacy
            </span>
          </FadeUp>
          <FadeUp delay={0.1} className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#f5f0e8] font-normal">
              Built on trust, protected by design
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Your data stays yours",
                body: "We collect only what we need to match you well. We never sell, share, or monetise your personal information. Ever.",
              },
              {
                title: "Videos are private",
                body: "Your application video is only ever seen by our small matching team. It is never shared with other members, never used in marketing, and deleted if you leave.",
              },
              {
                title: "You're in control",
                body: "You can view, update, or delete your data at any time. Want to leave? We'll remove everything — no questions, no hoops.",
              },
              {
                title: "GDPR compliant",
                body: "We operate under UK GDPR. Your data is processed lawfully, stored securely, and handled with the care it deserves.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={0.05 * i}>
                <div className="flex gap-4">
                  <div className="w-px bg-[#C97B7B]/40 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-playfair text-lg text-[#f5f0e8] mb-2">{item.title}</h3>
                    <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2} className="text-center">
            <Link
              href="/privacy"
              className="text-[#D4A853] text-sm underline underline-offset-4 hover:text-[#c49840] transition-colors"
            >
              Read our full Privacy Policy
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
