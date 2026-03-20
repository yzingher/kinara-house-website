"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem("kh_cookie_consent");
      if (!dismissed) setVisible(true);
    } catch {
      // localStorage unavailable
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem("kh_cookie_consent", "1");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a160e] border-t border-[#C9A96E]/15">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-[#F0EAD6]/55 text-sm leading-relaxed">
          We use essential cookies only — no tracking, no ads.{" "}
          <Link href="/privacy" className="text-[#C9A96E] underline underline-offset-2 hover:text-[#d9bc85]">
            See our Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 bg-[#C9A96E] text-[#0f0d0b] text-sm font-semibold px-6 py-2.5 hover:bg-[#d9bc85] transition-colors duration-200"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
