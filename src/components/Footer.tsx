"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Marquee from "./Marquee";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <footer className="bg-green-deep border-t border-cream/[0.04]" ref={ref}>
      {/* Marquee band */}
      <div className="py-10 md:py-14 border-b border-cream/[0.04]">
        <Marquee speed={10} direction="left" pauseOnHover>
          <span className="font-heading text-cream/66 text-[4rem] md:text-[7rem] tracking-[0.08em] mx-10 select-none">
            LOR Finance
          </span>
          <span className="text-cream/[0.08] text-2xl mx-6 select-none">/</span>
          <span className="font-body text-cream/66 text-[4rem] md:text-[7rem] tracking-[0.3em] uppercase mx-10 select-none">
            Est. 2022
          </span>
          <span className="text-cream/[0.08] text-2xl mx-6 select-none">/</span>
        </Marquee>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left — Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-heading text-cream/70 text-xl tracking-[0.25em]">
              LOR
            </p>
            <p className="text-cream/70 text-[14px] tracking-[0.35em] uppercase mt-3 font-body">
              Debt Solutions
            </p>
            <p className="text-cream/80 text-xs font-body mt-6 leading-relaxed max-w-[280px]">
              Real estate debt financing across the Netherlands for developers, owners, and operators.
            </p>
          </motion.div>

          {/* Center — Contact */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-cream/70 text-[14px] tracking-[0.35em] uppercase font-body mb-2">
              Contact
            </p>
            <a
              href="mailto:contact@lorfinance.nl"
              className="text-cream/85 text-sm hover:text-cream transition-colors duration-500 font-body hover-line inline-block w-fit"
            >
              contact@lorfinance.nl
            </a>
            <div className="mt-4">
              <p className="text-cream/70 text-[14px] tracking-[0.35em] uppercase font-body mb-2">
                Locations
              </p>
              <p className="text-cream/85 text-sm font-body">Amsterdam</p>
              <p className="text-cream/50 text-xs font-body leading-[1.8] mt-1">
                Moermanskkade 600<br />1013 BC Amsterdam
              </p>
            </div>
          </motion.div>

          {/* Right — Navigation */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-cream/70 text-[14px] tracking-[0.35em] uppercase font-body mb-2">
              Navigate
            </p>
            <div className="grid grid-cols-2 gap-x-16 gap-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "What We Do", href: "/deals" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
                { label: "Enquire", href: "/enquire" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-cream/75 text-sm font-body hover:text-cream/60 transition-colors duration-500 hover-line w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/80 text-[14px] tracking-[0.25em] uppercase font-body">
            &copy; 2026 LOR Finance. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/lor-finance/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/80 hover:text-cream/50 transition-colors duration-500"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
