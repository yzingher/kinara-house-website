import Link from "next/link";

const navLinks = [
  { label: "Vision", href: "/vision" },
  { label: "Experience", href: "/experience" },
  { label: "Who We Are", href: "/who" },
  { label: "Membership", href: "/membership" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#c9a84c]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/">
              <span className="font-playfair text-[#c9a84c] tracking-[0.25em] text-base font-semibold uppercase block mb-4">
                KINARA HOUSE
              </span>
            </Link>
            <p className="font-playfair text-[#f5f0e8]/50 italic text-sm leading-relaxed">
              Where Desire Meets Elegance.
            </p>
            <div className="mt-6 w-10 h-px bg-[#c9a84c]/40"></div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-1">
            <h3 className="text-[#c9a84c]/70 text-xs tracking-widest uppercase font-inter font-semibold mb-6">
              Navigate
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#f5f0e8]/60 hover:text-[#c9a84c] text-sm tracking-wide font-inter transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-1">
            <h3 className="text-[#c9a84c]/70 text-xs tracking-widest uppercase font-inter font-semibold mb-6">
              Contact
            </h3>
            <a
              href="mailto:hello@kinara.house"
              className="text-[#f5f0e8]/60 hover:text-[#c9a84c] text-sm font-inter transition-colors duration-300 block mb-4"
            >
              hello@kinara.house
            </a>
            <a
              href="https://dw7d97j0izd.typeform.com/to/ldsXW19a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-[#c9a84c] text-[#1a1a1a] hover:bg-[#b8973b] px-6 py-3 text-xs font-semibold tracking-widest uppercase transition-all duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#c9a84c]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#f5f0e8]/30 text-xs font-inter tracking-wide">
            &copy; 2026 Kinara House. All rights reserved.
          </p>
          <p className="text-[#f5f0e8]/20 text-xs font-inter tracking-widest uppercase">
            Discretion is our architecture
          </p>
        </div>
      </div>
    </footer>
  );
}
