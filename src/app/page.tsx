"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "@/components/Marquee";
import MagneticButton from "@/components/MagneticButton";

const heroWords = ["We don't just", "finance real estate.", "We understand it."];

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-green-dark overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover"
          style={{ opacity: 0.3 }}
        >
          <source src="/images/8485943-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay with vignette */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(22,40,22,0.4) 0%, rgba(22,40,22,0.9) 100%)",
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 z-10 grid-overlay pointer-events-none" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-64 z-10 bg-gradient-to-t from-green-dark via-green-dark/90 to-transparent pointer-events-none" />
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-40 z-10 bg-gradient-to-b from-green-dark/70 to-transparent pointer-events-none" />

        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
          {/* Tagline */}
          <motion.p
            className="text-cream/40 text-[11px] md:text-sm tracking-[0.4em] uppercase font-body mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Real Estate Debt Solutions
          </motion.p>

          {/* Main heading — staggered word reveals */}
          <h1 className="font-heading text-cream text-[3rem] md:text-[5rem] lg:text-[6.5rem] leading-[1.05] tracking-[-0.02em]">
            {heroWords.map((line, lineIdx) => (
              <span key={lineIdx} className="block overflow-hidden">
                <motion.span
                  className={`inline-block ${lineIdx === 2 ? "italic text-cream/60" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1,
                    delay: 2.3 + lineIdx * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Vertical line */}
          <motion.div
            className="flex justify-center mt-20 md:mt-24"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1, delay: 2.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
          >
            <div className="vertical-line" />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagneticButton
              as="a"
              href="/deals"
              className="inline-block mt-10 text-cream/40 text-[11px] tracking-[0.3em] uppercase font-body group hover-line transition-colors duration-500 hover:text-cream/80"
              strength={0.4}
            >
              Explore the Fund
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Marquee divider */}
      <div className="bg-green-dark py-8 border-y border-cream/[0.04]">
        <Marquee speed={40} className="py-2" pauseOnHover>
          <span className="font-heading text-cream/[0.07] text-[4rem] md:text-[6rem] tracking-[0.05em] mx-8 select-none">
            LOR Finance
          </span>
          <span className="text-cream/[0.15] text-xl mx-4 select-none">&bull;</span>
          <span className="font-body text-cream/[0.07] text-[4rem] md:text-[6rem] tracking-[0.2em] uppercase mx-8 select-none">
            Debt Solutions
          </span>
          <span className="text-cream/[0.15] text-xl mx-4 select-none">&bull;</span>
          <span className="font-heading text-cream/[0.07] text-[4rem] md:text-[6rem] tracking-[0.05em] mx-8 select-none italic">
            Amsterdam
          </span>
          <span className="text-cream/[0.15] text-xl mx-4 select-none">&bull;</span>
        </Marquee>
      </div>
    </>
  );
}
