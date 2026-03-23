"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/deals", label: "What We Do" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-green-dark/95 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <span className="font-heading text-cream text-[26px] tracking-[0.15em] font-light transition-opacity duration-300 group-hover:opacity-80">
            LOR
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.18em] uppercase transition-colors duration-300 font-body ${
                pathname === link.href
                  ? "text-cream"
                  : "text-cream/40 hover:text-cream/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/enquire"
            className="text-xs tracking-[0.18em] uppercase border border-cream/30 text-cream/80 px-6 py-2.5 hover:bg-cream hover:text-green-dark transition-all duration-500 font-body"
          >
            Enquire
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-green-dark z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2"
          aria-label="Close menu"
        >
          <span className="block w-6 h-px bg-cream rotate-45 translate-y-px" />
          <span className="block w-6 h-px bg-cream -rotate-45" />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-heading text-3xl tracking-[0.1em] transition-colors ${
              pathname === link.href
                ? "text-cream"
                : "text-cream/40 hover:text-cream"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/enquire"
          className="mt-4 text-xs tracking-[0.18em] uppercase border border-cream/30 text-cream px-8 py-3 hover:bg-cream hover:text-green-dark transition-all duration-500 font-body"
        >
          Enquire
        </Link>
      </div>
    </nav>
  );
}
