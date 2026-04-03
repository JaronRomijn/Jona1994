"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-green-dark/90 backdrop-blur-xl py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group relative z-50">
          <motion.span
            className="font-heading text-cream text-[24px] md:text-[28px] tracking-[0.2em] font-light block"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
          >
            LOR
          </motion.span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[11px] tracking-[0.2em] uppercase transition-colors duration-500 font-body hover-line ${
                pathname === link.href
                  ? "text-cream"
                  : "text-cream/80 hover:text-cream/70"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-cream/40"
                  layoutId="nav-underline"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </Link>
          ))}
          <MagneticButton
            as="link"
            href="/enquire"
            className="text-[11px] tracking-[0.2em] uppercase border border-cream/20 text-cream/70 px-7 py-3 hover:bg-cream hover:text-green-dark transition-all duration-600 font-body btn-glow"
            strength={0.2}
          >
            Enquire
          </MagneticButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-7 h-px bg-cream"
            animate={isOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.span
            className="block w-7 h-px bg-cream"
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-7 h-px bg-cream"
            animate={isOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </button>
      </div>

      {/* Mobile Menu — Full Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-green-dark z-40 flex flex-col items-center justify-center gap-2"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  className={`font-heading text-[2.5rem] tracking-[0.08em] transition-colors block py-2 ${
                    pathname === link.href
                      ? "text-cream"
                      : "text-cream/80 hover:text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/enquire"
                className="mt-8 text-[11px] tracking-[0.2em] uppercase border border-cream/20 text-cream px-10 py-4 hover:bg-cream hover:text-green-dark transition-all duration-500 font-body inline-block"
              >
                Enquire
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
