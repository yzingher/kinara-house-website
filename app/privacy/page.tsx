import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Kinara House",
  description: "How Kinara House collects, uses, and protects your personal data under UK GDPR.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="font-playfair text-2xl text-[#f5f0e8] mb-4 pb-3 border-b border-[#D4A853]/15">
        {title}
      </h2>
      <div className="space-y-4 text-[#f5f0e8]/60 text-sm leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      {/* Header */}
      <div
        className="py-20 px-6 text-center"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(212,168,83,0.07) 0%, transparent 65%), #1a1a1a",
        }}
      >
        <Link href="/" className="inline-block mb-8">
          <span className="font-playfair text-xl text-[#f5f0e8] tracking-widest">
            KINARA HOUSE
          </span>
        </Link>
        <h1 className="font-playfair text-4xl md:text-5xl text-[#f5f0e8] font-normal mb-4">
          Privacy Policy
        </h1>
        <p className="text-[#f5f0e8]/45 text-sm">Last updated: March 2026</p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Section title="1. Who We Are">
          <p>
            Kinara House is a curated matchmaking service for London&apos;s ethically non-monogamous
            (ENM) community. We are the data controller responsible for your personal data.
          </p>
          <p>
            <strong className="text-[#f5f0e8]/80">Contact:</strong>{" "}
            <a href="mailto:hello@kinara.house" className="text-[#D4A853] hover:underline">
              hello@kinara.house
            </a>
          </p>
          <p>
            <strong className="text-[#f5f0e8]/80">Legal entity:</strong> [PLACEHOLDER — to be
            updated on incorporation]
          </p>
        </Section>

        <Section title="2. What Data We Collect">
          <p>We collect the following personal data when you apply to join Kinara House:</p>
          <ul className="list-none space-y-2 pl-4">
            {[
              "Name and email address",
              "Age and date of birth",
              "Gender identity and pronouns",
              "Location (London area)",
              "Relationship style and structure",
              "Dating intentions and preferences",
              "A short application video (2 minutes)",
              "Payment information (Concierge members only, processed via Stripe)",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#D4A853] shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="3. Special Category Data">
          <p>
            Some of the data we process falls under &quot;special category&quot; data under UK GDPR —
            specifically information relating to sexual orientation and relationship structure.
          </p>
          <p>
            We process this data only with your explicit consent, given at the time of application.
            You may withdraw this consent at any time by contacting us at{" "}
            <a href="mailto:hello@kinara.house" className="text-[#D4A853] hover:underline">
              hello@kinara.house
            </a>
            .
          </p>
        </Section>

        <Section title="4. Legal Basis for Processing">
          <p>We process your personal data on the following legal bases:</p>
          <ul className="list-none space-y-2 pl-4">
            {[
              "Consent — for special category data (relationship structure, sexual orientation) and for your application video",
              "Contract — to provide the matchmaking service you have signed up for",
              "Legitimate interest — to operate and improve our service, prevent fraud, and maintain security",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#D4A853] shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="5. How We Use Your Data">
          <p>We use your personal data solely for the purpose of providing the Kinara House matchmaking service. Specifically:</p>
          <ul className="list-none space-y-2 pl-4">
            {[
              "To assess your application and verify suitability",
              "To understand your preferences and make thoughtful introductions",
              "To communicate with you about potential matches and service updates",
              "To process payment for Concierge membership (via Stripe)",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#D4A853] shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-medium text-[#f5f0e8]/75">
            We do not use your data for marketing, advertising, or any purpose other than
            providing the matchmaking service. We never sell or monetise your personal
            information.
          </p>
        </Section>

        <Section title="6. Who Sees Your Data">
          <p>
            Your personal data — including your application video — is seen only by the Kinara
            House matching team (currently 2–3 people). It is never shared with other members.
          </p>
          <p>We use the following third-party processors to operate our service:</p>
          <ul className="list-none space-y-2 pl-4">
            {[
              "Typeform — application form collection",
              "VideoAsk — application video capture",
              "Supabase — secure database storage",
              "Stripe — payment processing (Concierge members only)",
              "Vercel — website hosting",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#D4A853] shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
          <p>
            Each processor is bound by a data processing agreement and is required to handle your
            data in accordance with UK GDPR.
          </p>
        </Section>

        <Section title="7. Data Retention">
          <ul className="list-none space-y-2 pl-4">
            {[
              "Active members — your data is retained for as long as you remain a member",
              "Inactive members — data is deleted 12 months after your last activity",
              "On request — we will delete your data within 30 days of a valid erasure request",
              "Application videos — deleted immediately upon request, or within 30 days of membership ending",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#D4A853] shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="8. Your Rights">
          <p>Under UK GDPR, you have the following rights in relation to your personal data:</p>
          <ul className="list-none space-y-2 pl-4">
            {[
              "Right of access — request a copy of the data we hold about you",
              "Right to rectification — ask us to correct inaccurate or incomplete data",
              "Right to erasure — ask us to delete your data (subject to legal obligations)",
              "Right to restrict processing — ask us to pause processing of your data",
              "Right to data portability — receive your data in a portable format",
              "Right to object — object to processing based on legitimate interest",
              "Right to withdraw consent — withdraw consent for special category data at any time",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#D4A853] shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:hello@kinara.house" className="text-[#D4A853] hover:underline">
              hello@kinara.house
            </a>
            . We will respond within 30 days.
          </p>
        </Section>

        <Section title="9. Cookies">
          <p>
            Our website uses essential cookies only. These are strictly necessary for the
            website to function and cannot be disabled.
          </p>
          <p>
            We use{" "}
            <a
              href="https://plausible.io"
              className="text-[#D4A853] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plausible Analytics
            </a>{" "}
            for privacy-respecting traffic analytics. Plausible does not use cookies and does
            not collect any personal data.
          </p>
          <p>
            We do not use advertising cookies, tracking pixels, or any third-party analytics
            that collect personal data.
          </p>
        </Section>

        <Section title="10. Security">
          <p>
            All data transmitted to and from our website is encrypted using HTTPS. Access to
            personal data is restricted to authorised team members only. We use
            industry-standard security practices to protect your data from unauthorised access,
            loss, or disclosure.
          </p>
        </Section>

        <Section title="11. International Transfers">
          <p>
            We primarily process and store your data within the UK and European Economic Area
            (EEA). Where any processor operates outside these regions, we ensure appropriate
            safeguards are in place in accordance with UK GDPR requirements.
          </p>
        </Section>

        <Section title="12. Complaints">
          <p>
            If you have concerns about how we handle your personal data, please contact us
            first at{" "}
            <a href="mailto:hello@kinara.house" className="text-[#D4A853] hover:underline">
              hello@kinara.house
            </a>
            .
          </p>
          <p>
            If you remain unsatisfied, you have the right to lodge a complaint with the
            Information Commissioner&apos;s Office (ICO):
          </p>
          <p>
            <a
              href="https://ico.org.uk/make-a-complaint/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A853] hover:underline"
            >
              https://ico.org.uk/make-a-complaint/
            </a>
          </p>
        </Section>

        <Section title="13. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update
            the &quot;last updated&quot; date at the top of this page. Material changes will be
            communicated to active members by email.
          </p>
        </Section>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-[#D4A853]/10 text-center">
          <Link
            href="/"
            className="text-[#D4A853] text-sm underline underline-offset-4 hover:text-[#c49840] transition-colors"
          >
            ← Back to Kinara House
          </Link>
        </div>
      </div>
    </div>
  );
}
