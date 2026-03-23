"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

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

function AssetChip({ label, isRight }: { label: string; isRight: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-cream/50 text-base tracking-[0.2em] uppercase border-b border-cream/10 pb-1.5 font-body cursor-pointer transition-all duration-500 hover:border-cream/40 hover:text-cream inline-block whitespace-nowrap">
        {label}
      </span>

      {/* Image popup — appears BELOW chip, aligned left or right */}
      <div
        className={`absolute top-full mt-4 transition-all duration-400 ease-out ${
          isRight ? "right-0" : "left-0"
        } ${
          hovered
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ zIndex: 9000 }}
      >
        <div className={`absolute -top-2 ${isRight ? "right-6" : "left-6"} w-4 h-4 bg-green-dark border-l border-t border-cream/10 transform rotate-45`} />
        <div className="w-[280px] border border-cream/10 overflow-hidden">
          <img
            src={assetClassImages[label]}
            alt={label}
            className="w-full h-[180px] object-cover grayscale"
          />
          <div className="bg-green-dark/95 backdrop-blur-md px-4 py-3">
            <p className="text-cream/40 text-[10px] tracking-[0.3em] uppercase mb-1 font-body">
              {label}
            </p>
            <p className="text-cream/65 text-xs leading-relaxed font-body">
              {assetClassData[label]}
            </p>
          </div>
        </div>
      </div>
    </div>
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

export default function Deals() {
  return (
    <div className="bg-green-dark min-h-screen">
      {/* Hero — heading left, asset classes right */}
      <section className="pt-24 pb-6 px-6 md:px-12 max-w-[1400px] mx-auto relative" style={{ zIndex: 30 }}>
        <ScrollReveal>
          <p className="text-cream/30 text-xs tracking-[0.35em] uppercase mb-6 font-body">
            What We Do
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <h1 className="font-heading text-cream text-[2.8rem] md:text-[4.5rem] lg:text-[5.8rem] leading-[1.05] max-w-[900px] tracking-[-0.02em]">
              Capital that{" "}
              <em className="italic text-cream/75">understands</em><br />
              real estate.
            </h1>

            {/* Asset Classes — right side */}
            <div className="shrink-0">
              <p className="text-cream/30 text-sm md:text-xl tracking-[0.3em] uppercase mb-6 font-body md:whitespace-nowrap">
                Asset Classes We Finance
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-5 w-full">
                {assetClasses.map((cls) => (
                  <div key={cls} className={["Logistics", "Offices", "Retail"].includes(cls) ? "text-right" : "text-left"}>
                    <AssetChip label={cls} isRight={["Logistics", "Offices", "Retail"].includes(cls)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="text-cream/40 text-lg md:text-xl leading-[1.7] font-body max-w-xl mt-10">
            We provide bespoke debt financing across the Netherlands — structured around the deal, not the other way around.
          </p>
        </ScrollReveal>
      </section>

      {/* Divider line */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative" style={{ zIndex: 1 }}>
        <ScrollReveal delay={2}>
          <div className="w-full h-px bg-cream/8 my-8" />
        </ScrollReveal>
      </div>

      {/* Parameters — aligned bottom, bigger labels */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-28">
          <ScrollReveal>
            <div>
              <p className="text-cream/30 text-sm tracking-[0.25em] uppercase mb-4 font-body">
                Maximum LTV
              </p>
              <p className="font-heading text-cream text-[5rem] md:text-[7.5rem] leading-none tracking-[-0.03em]">
                75<span className="text-cream/30">%</span>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div>
              <p className="text-cream/30 text-sm tracking-[0.25em] uppercase mb-4 font-body">
                Ticket Size
              </p>
              <p className="font-heading text-cream text-[5rem] md:text-[7.5rem] leading-none tracking-[-0.03em]">
                4<span className="text-cream/30">&ndash;</span>40
                <span className="text-cream/30 text-[3.5rem] md:text-[5rem] ml-2">M</span>
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Loan Types — editorial numbered list */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto py-12 md:py-20 overflow-hidden">
        <ScrollReveal>
          <p className="text-cream/30 text-sm tracking-[0.25em] uppercase mb-12 font-body">
            Loan Types
          </p>
        </ScrollReveal>

        <div className="border-t border-cream/8">
          {loanTypes.map((loan, i) => (
            <ScrollReveal key={loan.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div
                className="group border-b border-cream/8 py-8 md:py-10 cursor-pointer transition-all duration-500 hover:pl-6 hover:bg-cream/[0.03]"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "inset 2px 0 0 0 rgba(245,242,235,0.35), 0 0 40px -10px rgba(245,242,235,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Desktop: single row */}
                <div className="hidden md:flex items-baseline">
                  <span className="text-cream/15 text-xs tracking-[0.3em] font-body group-hover:text-cream/40 transition-colors duration-500" style={{ width: "50px", flexShrink: 0 }}>
                    {loan.number}
                  </span>
                  <h3 className="font-heading text-cream/70 text-[2rem] tracking-[-0.01em] group-hover:text-cream transition-colors duration-500 whitespace-nowrap" style={{ width: "300px", flexShrink: 0 }}>
                    {loan.title}
                  </h3>
                  <span className="text-cream/10 font-body" style={{ flexShrink: 0, margin: "0 20px" }}>—</span>
                  <p className="text-cream/30 text-sm leading-[1.75] font-body group-hover:text-cream/55 transition-colors duration-500 whitespace-nowrap text-left">
                    {loan.description}
                  </p>
                </div>
                {/* Mobile: stacked */}
                <div className="md:hidden">
                  <div className="flex items-baseline gap-3">
                    <span className="text-cream/15 text-xs tracking-[0.3em] font-body group-hover:text-cream/40 transition-colors duration-500">
                      {loan.number}
                    </span>
                    <h3 className="font-heading text-cream/70 text-2xl tracking-[-0.01em] group-hover:text-cream transition-colors duration-500">
                      {loan.title}
                    </h3>
                  </div>
                  <p className="text-cream/30 text-xs leading-[1.75] font-body mt-2 pl-8">
                    {loan.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
