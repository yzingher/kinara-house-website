import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#D4A853]/10 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-playfair text-xl text-[#f5f0e8] tracking-widest mb-1">KINARA HOUSE</p>
          <p className="text-[#f5f0e8]/45 text-sm">
            A curated matchmaking service for London&apos;s ENM community.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2 text-sm text-[#f5f0e8]/45">
          <a
            href="mailto:hello@kinara.house"
            className="hover:text-[#D4A853] transition-colors duration-200"
          >
            hello@kinara.house
          </a>
          <Link
            href="/privacy"
            className="hover:text-[#D4A853] transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <p>&copy; 2026 Kinara House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
