"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const deals = [
  { city: "Amsterdam", amount: "€8.5M", type: "Construction Loan", sector: "Residential" },
  { city: "Beuningen & Leerdam", amount: "€4.5M", type: "Retail Bridge", sector: "" },
  { city: "Leiden", amount: "€19.4M", type: "Development Loan", sector: "Residential" },
  { city: "Hengelo", amount: "€7.5M", type: "Offices Bridge", sector: "" },
  { city: "Lelystad", amount: "€25M", type: "Logistics Bridge", sector: "" },
  { city: "Eemshaven", amount: "€10M", type: "Logistics Bridge", sector: "" },
  { city: "Amersfoort", amount: "€12M", type: "Development", sector: "Residential" },
  { city: "Alblasserdam", amount: "€19M", type: "Residential Development", sector: "" },
  { city: "Rijswijk", amount: "€13M", type: "Residential Development", sector: "" },
  { city: "Den Haag", amount: "€16.5M", type: "Development", sector: "Residential" },
  { city: "Amstelveen", amount: "€10M", type: "Bridge", sector: "Short Stay" },
  { city: "Den Haag", amount: "€8.5M", type: "Bridge", sector: "Residential" },
];

// City coordinates as percentages of the map container
// Based on the real Netherlands SVG (1000x1000 viewBox)
const cityCoords: Record<string, { x: number; y: number }> = {
  "Amsterdam":            { x: 41.5, y: 38.5 },
  "Amstelveen":           { x: 41.0, y: 41.0 },
  "Den Haag":             { x: 33.0, y: 54.0 },
  "Rijswijk":             { x: 34.5, y: 52.5 },
  "Leiden":               { x: 35.5, y: 48.0 },
  "Amersfoort":           { x: 50.5, y: 43.0 },
  "Lelystad":             { x: 55.5, y: 36.5 },
  "Hengelo":              { x: 74.0, y: 40.0 },
  "Eemshaven":            { x: 79.0, y: 12.0 },
  "Alblasserdam":         { x: 39.0, y: 58.0 },
  "Beuningen & Leerdam":  { x: 52.0, y: 56.0 },
};

export default function Portfolio() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <div className="bg-green-dark min-h-screen">
      <section className="pt-32 pb-20 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <p className="text-cream/30 text-xs tracking-[0.35em] uppercase mb-6 font-body">
            Track Record
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h1 className="font-heading text-cream text-[2.8rem] md:text-6xl lg:text-[5.2rem] leading-[1.08] max-w-3xl tracking-[-0.01em]">
            Portfolio
          </h1>
        </ScrollReveal>

        {/* Two-column layout: deals left, map right */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row gap-12">
          {/* Deal list — left side */}
          <div className="flex-1 min-w-0">
            {deals.map((deal, i) => (
              <ScrollReveal key={`${deal.city}-${deal.amount}-${i}`}>
                <div
                  className="group border-t border-cream/8 py-6 md:py-7 flex items-center justify-between cursor-default transition-all duration-500 hover:pl-4 hover:bg-cream/[0.02] px-2 md:px-4"
                  onMouseEnter={() => setHoveredCity(deal.city)}
                  onMouseLeave={() => setHoveredCity(null)}
                >
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
                      <h3 className="font-heading text-cream text-2xl md:text-[1.75rem] tracking-[-0.01em]">
                        {deal.city}
                      </h3>
                      <span className="font-heading text-cream/50 text-xl md:text-2xl">
                        {deal.amount}
                      </span>
                    </div>
                    <p className="text-cream/30 text-sm tracking-[0.12em] uppercase mt-1 font-body">
                      {deal.type}
                      {deal.sector ? ` · ${deal.sector}` : ""}
                    </p>
                  </div>

                  {/* Chevron */}
                  <div className="text-cream/15 group-hover:text-cream/40 group-hover:translate-x-1 transition-all duration-500 ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            {/* Bottom border */}
            <div className="border-t border-cream/8" />

            {/* Summary stat */}
            <ScrollReveal delay={2}>
              <div className="mt-16 flex gap-16">
                <div>
                  <p className="font-heading text-cream/60 text-4xl md:text-5xl tracking-[-0.02em]">
                    €{deals.reduce((sum, d) => {
                      const num = parseFloat(d.amount.replace("€", "").replace("M", ""));
                      return sum + num;
                    }, 0).toFixed(1)}M
                  </p>
                  <p className="text-cream/25 text-xs tracking-[0.3em] uppercase mt-2 font-body">
                    Total Deployed
                  </p>
                </div>
                <div>
                  <p className="font-heading text-cream/60 text-4xl md:text-5xl tracking-[-0.02em]">
                    {deals.length}
                  </p>
                  <p className="text-cream/25 text-xs tracking-[0.3em] uppercase mt-2 font-body">
                    Transactions
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Map — below on mobile, sticky right on desktop */}
          <div className="w-full md:w-[520px] shrink-0 order-first md:order-last mb-8 md:mb-0">
            <div className="md:sticky md:top-32">
              <div className="relative mx-auto max-w-[250px] md:max-w-none" style={{ width: "100%", aspectRatio: "1/1" }}>
                {/* Real Netherlands SVG map as background */}
                <Image
                  src="/images/Map of Netherlands.svg"
                  alt="Map of the Netherlands"
                  fill
                  className="object-contain opacity-[0.12]"
                  unoptimized
                  style={{ filter: "brightness(3) saturate(0)" }}
                />

                {/* City dots overlay */}
                {Object.entries(cityCoords).map(([city, coords]) => {
                  const isActive = hoveredCity === city;
                  return (
                    <div
                      key={city}
                      className="absolute"
                      style={{
                        left: `${coords.x}%`,
                        top: `${coords.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {/* Glow ring when active */}
                      {isActive && (
                        <div
                          className="absolute rounded-full animate-ping"
                          style={{
                            width: 32,
                            height: 32,
                            left: -16,
                            top: -16,
                            border: "1px solid rgba(245,242,235,0.2)",
                            animationDuration: "2s",
                          }}
                        />
                      )}
                      {isActive && (
                        <div
                          className="absolute rounded-full"
                          style={{
                            width: 20,
                            height: 20,
                            left: -10,
                            top: -10,
                            background: "rgba(245,242,235,0.06)",
                            border: "0.5px solid rgba(245,242,235,0.2)",
                          }}
                        />
                      )}
                      {/* Dot */}
                      <div
                        className="rounded-full transition-all duration-500"
                        style={{
                          width: isActive ? 8 : 5,
                          height: isActive ? 8 : 5,
                          marginLeft: isActive ? -4 : -2.5,
                          marginTop: isActive ? -4 : -2.5,
                          background: isActive
                            ? "rgba(245,242,235,0.9)"
                            : "rgba(245,242,235,0.3)",
                          boxShadow: isActive
                            ? "0 0 12px rgba(245,242,235,0.4)"
                            : "none",
                        }}
                      />
                      {/* Label when active */}
                      {isActive && (
                        <div
                          className="absolute whitespace-nowrap font-body text-cream/60"
                          style={{
                            left: 12,
                            top: -6,
                            fontSize: 11,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          {city}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
