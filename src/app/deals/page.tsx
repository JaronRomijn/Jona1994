"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/FadeIn";
import TextReveal from "@/components/TextReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Marquee from "@/components/Marquee";

const assetClassData: Record<string, string> = {
  Residential: "Developments & Value-add opportunities",
  Logistics: "Expansion & Repositioning",
  "Light Industrial": "Adaptive Reuse and Development",
  Offices: "Quality Assets with Repositioning Potential",
  Hotels: "Repositioning & Value-Add Strategies",
  Retail: "Selective Opportunities with Strong Fundamentals",
};

const assetClassImages: Record<string, string> = {
  Residential: "/images/Residential-pexels-hellochemo-29012161.jpg",
  Logistics: "/images/Logistics The Forces Governing Supply banner.png",
  "Light Industrial": "/images/Light Industrial.jpg",
  Offices: "/images/Office-pexels-clickerhappy-9312.jpg",
  Hotels: "/images/Hotels.jpg",
  Retail: "/images/Retail.jpg",
};

const assetClasses = [
  "Residential",
  "Logistics",
  "Hotels",
  "Offices",
  "Light Industrial",
  "Retail",
];

function AssetChip({ label, isRight, index }: { label: string; isRight: boolean; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, x: isRight ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <span
        className="text-cream/40 text-sm md:text-base tracking-[0.2em] uppercase border-b border-cream/8 pb-2 font-body transition-all duration-500 hover:border-cream/30 hover:text-cream inline-block whitespace-nowrap"
        data-cursor-hover
      >
        {label}
      </span>

      {/* Image popup */}
      <motion.div
        className={`absolute top-full mt-4 ${isRight ? "right-0" : "left-0"}`}
        style={{ zIndex: 9000 }}
        animate={{
          opacity: hovered ? 1 : 0,
          y: hovered ? 0 : -6,
          pointerEvents: hovered ? "auto" as const : "none" as const,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`absolute -top-2 ${isRight ? "right-6" : "left-6"} w-4 h-4 bg-green-dark border-l border-t border-cream/8 transform rotate-45`} />
        <div className="w-[280px] border border-cream/8 overflow-hidden">
          <div className="overflow-hidden">
            <motion.img
              src={assetClassImages[label]}
              alt={label}
              className="w-full h-[180px] object-cover grayscale"
              animate={{ scale: hovered ? 1.05 : 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="bg-green-dark/95 backdrop-blur-md px-4 py-3">
            <p className="text-cream/30 text-[10px] tracking-[0.35em] uppercase mb-1 font-body">
              {label}
            </p>
            <p className="text-cream/55 text-xs leading-relaxed font-body">
              {assetClassData[label]}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const loanTypes = [
  {
    number: "01",
    title: "Bridge Loans",
    description:
      "Short-term financing from 3 months for acquisitions, repositioning, and value-add opportunities.",
  },
  {
    number: "02",
    title: "Development Loans",
    description:
      "Financing for ground-up development projects from planning through to completion.",
  },
  {
    number: "03",
    title: "Construction Loans",
    description:
      "Structured financing for construction phases with staged drawdowns and monitoring.",
  },
  {
    number: "04",
    title: "Investment Loans",
    description:
      "Longer-term financing for stabilized assets and income-producing real estate portfolios.",
  },
];

function LoanTypeRow({ loan, index }: { loan: typeof loanTypes[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      className="group border-b border-cream/[0.06] py-9 md:py-12 transition-all duration-600"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        paddingLeft: 24,
        backgroundColor: "rgba(245,242,235,0.02)",
      }}
      data-cursor-hover
    >
      {/* Desktop: single row */}
      <div className="hidden md:flex items-baseline">
        <span className="text-cream/10 text-[10px] tracking-[0.35em] font-body group-hover:text-cream/30 transition-colors duration-500" style={{ width: "50px", flexShrink: 0 }}>
          {loan.number}
        </span>
        <h3 className="font-heading text-cream/60 text-[1.8rem] tracking-[-0.01em] group-hover:text-cream transition-colors duration-500 whitespace-nowrap font-light" style={{ width: "320px", flexShrink: 0 }}>
          {loan.title}
        </h3>
        <span className="text-cream/8 font-body mx-5 flex-shrink-0">&mdash;</span>
        <p className="text-cream/25 text-sm leading-[1.8] font-body group-hover:text-cream/50 transition-colors duration-500">
          {loan.description}
        </p>
        <motion.div
          className="ml-auto pl-6 text-cream/0 group-hover:text-cream/30 transition-colors duration-500"
          whileHover={{ x: 4 }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </motion.div>
      </div>
      {/* Mobile: stacked */}
      <div className="md:hidden">
        <div className="flex items-baseline gap-3">
          <span className="text-cream/10 text-[10px] tracking-[0.35em] font-body group-hover:text-cream/30 transition-colors duration-500">
            {loan.number}
          </span>
          <h3 className="font-heading text-cream/60 text-2xl tracking-[-0.01em] group-hover:text-cream transition-colors duration-500 font-light">
            {loan.title}
          </h3>
        </div>
        <p className="text-cream/25 text-xs leading-[1.8] font-body mt-2 pl-8">
          {loan.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Deals() {
  return (
    <div className="bg-green-dark min-h-screen">
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-6 px-6 md:px-12 max-w-[1400px] mx-auto relative" style={{ zIndex: 30 }}>
        <FadeIn>
          <p className="text-cream/25 text-[10px] tracking-[0.4em] uppercase mb-8 font-body">
            What We Do
          </p>
        </FadeIn>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <TextReveal
            as="h1"
            className="font-heading text-cream text-[2.8rem] md:text-[4.5rem] lg:text-[6rem] leading-[1.04] max-w-[900px] tracking-[-0.02em]"
          >
            Capital that understands real estate.
          </TextReveal>

          {/* Asset Classes */}
          <div className="shrink-0">
            <FadeIn delay={0.2}>
              <p className="text-cream/25 text-[10px] md:text-xs tracking-[0.35em] uppercase mb-6 font-body">
                Asset Classes We Finance
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 gap-x-10 gap-y-5 w-full">
              {assetClasses.map((cls, i) => (
                <div key={cls} className={["Logistics", "Offices", "Retail"].includes(cls) ? "text-right" : "text-left"}>
                  <AssetChip label={cls} isRight={["Logistics", "Offices", "Retail"].includes(cls)} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <FadeIn delay={0.3}>
          <p className="text-cream/30 text-lg md:text-xl leading-[1.8] font-body max-w-xl mt-12 font-light">
            We provide bespoke debt financing across the Netherlands — structured around the deal, not the other way around.
          </p>
        </FadeIn>
      </section>

      {/* Full-width image */}
      <section className="w-full h-[30vh] md:h-[40vh] relative overflow-hidden mt-8" style={{ zIndex: 1 }}>
        <motion.img
          src="/images/pexels-francesco-ungaro-1170065.jpg"
          alt="Dutch architecture"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(100%) brightness(0.7) contrast(1.1)", opacity: 0.45 }}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-green-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-green-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 z-10 pointer-events-none" style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(22,40,22,0.7) 100%)"
        }} />
      </section>

      {/* Divider */}
      <FadeIn className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="w-full h-px bg-cream/[0.05] my-8" />
      </FadeIn>

      {/* Parameters */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end gap-16 md:gap-32">
          <FadeIn>
            <div>
              <p className="text-cream/25 text-[10px] tracking-[0.35em] uppercase mb-5 font-body">
                Maximum LTV
              </p>
              <p className="font-heading text-cream leading-none tracking-[-0.04em]">
                <AnimatedCounter
                  value={75}
                  className="text-[5rem] md:text-[8rem]"
                />
                <span className="text-cream/20 text-[3rem] md:text-[5rem]">%</span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <p className="text-cream/25 text-[10px] tracking-[0.35em] uppercase mb-5 font-body">
                Ticket Size
              </p>
              <p className="font-heading text-cream leading-none tracking-[-0.04em]">
                <AnimatedCounter
                  value={4}
                  className="text-[5rem] md:text-[8rem]"
                />
                <span className="text-cream/20 text-[3rem] md:text-[5rem]">&ndash;</span>
                <AnimatedCounter
                  value={40}
                  className="text-[5rem] md:text-[8rem]"
                  duration={2.5}
                />
                <span className="text-cream/20 text-[2.5rem] md:text-[4rem] ml-2">M</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Loan Types */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto py-12 md:py-24 overflow-hidden">
        <FadeIn>
          <p className="text-cream/25 text-[10px] tracking-[0.35em] uppercase mb-14 font-body">
            Loan Types
          </p>
        </FadeIn>

        <div className="border-t border-cream/[0.06]">
          {loanTypes.map((loan, i) => (
            <LoanTypeRow key={loan.title} loan={loan} index={i} />
          ))}
        </div>
      </section>

      {/* Marquee */}
      <div className="py-6 border-y border-cream/[0.04]">
        <Marquee speed={45} pauseOnHover>
          <span className="font-heading italic text-cream/[0.05] text-[4rem] md:text-[7rem] tracking-[0.05em] mx-8 select-none">
            Bridge
          </span>
          <span className="text-cream/[0.1] text-lg mx-4 select-none">/</span>
          <span className="font-heading italic text-cream/[0.05] text-[4rem] md:text-[7rem] tracking-[0.05em] mx-8 select-none">
            Development
          </span>
          <span className="text-cream/[0.1] text-lg mx-4 select-none">/</span>
          <span className="font-heading italic text-cream/[0.05] text-[4rem] md:text-[7rem] tracking-[0.05em] mx-8 select-none">
            Construction
          </span>
          <span className="text-cream/[0.1] text-lg mx-4 select-none">/</span>
          <span className="font-heading italic text-cream/[0.05] text-[4rem] md:text-[7rem] tracking-[0.05em] mx-8 select-none">
            Investment
          </span>
          <span className="text-cream/[0.1] text-lg mx-4 select-none">/</span>
        </Marquee>
      </div>
    </div>
  );
}
