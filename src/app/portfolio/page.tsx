"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import TextReveal from "@/components/TextReveal";

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

function DealRow({ deal, index, onHover, onLeave }: {
  deal: typeof deals[0];
  index: number;
  onHover: (city: string) => void;
  onLeave: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      className="group border-t border-cream/[0.06] py-7 md:py-8 flex items-center justify-between px-2 md:px-4 transition-all duration-500"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => onHover(deal.city)}
      onMouseLeave={onLeave}
      whileHover={{
        paddingLeft: 20,
        backgroundColor: "rgba(245,242,235,0.015)",
      }}
      data-cursor-hover
    >
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-5">
          <h3 className="font-heading text-cream text-xl md:text-[1.6rem] tracking-[-0.01em] font-light">
            {deal.city}
          </h3>
          <span className="font-heading text-cream/85 text-lg md:text-xl font-light">
            {deal.amount}
          </span>
        </div>
        <p className="text-cream/75 text-[11px] tracking-[0.15em] uppercase mt-1.5 font-body">
          {deal.type}
          {deal.sector ? ` · ${deal.sector}` : ""}
        </p>
      </div>

    </motion.div>
  );
}

export default function Portfolio() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <div className="bg-green-dark min-h-screen">
      {/* Full-width image */}
      <section className="w-full h-[25vh] md:h-[35vh] overflow-hidden absolute" style={{ zIndex: 1 }}>
        <motion.img
          src="/images/pexels-mike-van-schoonderwalt-1884800-5511806.jpg"
          alt="Dutch canal"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(100%) brightness(0.6) contrast(1.1)", opacity: 0.4 }}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-green-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 z-10 pointer-events-none" style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(22,40,22,0.7) 100%)"
        }} />
      </section>

      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto" style={{ zIndex: 30, position: "relative" }}>
        <FadeIn>
          <p className="text-cream/75 text-[14px] tracking-[0.4em] uppercase mb-8 font-body">
            Track Record
          </p>
        </FadeIn>
        <TextReveal
          as="h1"
          className="font-heading text-cream text-[2.8rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.06] max-w-3xl tracking-[-0.02em]"
        >
          Portfolio
        </TextReveal>

        {/* Two-column layout */}
        <div className="mt-20 md:mt-28 flex flex-col md:flex-row gap-12">
          {/* Deal list */}
          <div className="flex-1 min-w-0">
            {deals.map((deal, i) => (
              <DealRow
                key={`${deal.city}-${deal.amount}-${i}`}
                deal={deal}
                index={i}
                onHover={setHoveredCity}
                onLeave={() => setHoveredCity(null)}
              />
            ))}
            <div className="border-t border-cream/[0.06]" />

          </div>

          {/* Map */}
          <div className="w-full md:w-[520px] shrink-0 order-first md:order-last mb-8 md:mb-0">
            <div className="md:sticky md:top-32">
              <FadeIn delay={0.3}>
                <div className="relative mx-auto max-w-[250px] md:max-w-none" style={{ width: "100%", aspectRatio: "1/1" }}>
                  <Image
                    src="/images/Map of Netherlands.svg"
                    alt="Map of the Netherlands"
                    fill
                    className="object-contain opacity-[0.1]"
                    unoptimized
                    style={{ filter: "brightness(3) saturate(0)" }}
                  />

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
                        {isActive && (
                          <motion.div
                            className="absolute rounded-full"
                            style={{
                              width: 36,
                              height: 36,
                              left: -18,
                              top: -18,
                              border: "1px solid rgba(245,242,235,0.15)",
                            }}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: [0.5, 1.5], opacity: [0.5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}
                        {isActive && (
                          <div
                            className="absolute rounded-full"
                            style={{
                              width: 22,
                              height: 22,
                              left: -11,
                              top: -11,
                              background: "rgba(245,242,235,0.04)",
                              border: "0.5px solid rgba(245,242,235,0.15)",
                            }}
                          />
                        )}
                        <motion.div
                          className="rounded-full"
                          animate={{
                            width: isActive ? 8 : 4,
                            height: isActive ? 8 : 4,
                            marginLeft: isActive ? -4 : -2,
                            marginTop: isActive ? -4 : -2,
                            background: isActive
                              ? "rgba(245,242,235,0.9)"
                              : "rgba(245,242,235,0.25)",
                            boxShadow: isActive
                              ? "0 0 16px rgba(245,242,235,0.4)"
                              : "none",
                          }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        />
                        {isActive && (
                          <motion.div
                            className="absolute whitespace-nowrap font-body text-cream/50"
                            style={{
                              left: 14,
                              top: -7,
                              fontSize: 10,
                              letterSpacing: "0.15em",
                              textTransform: "uppercase",
                            }}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {city}
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
