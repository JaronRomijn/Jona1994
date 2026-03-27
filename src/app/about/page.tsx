"use client";
import { useState, useRef, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const pillData: Record<string, string> = {
  FAST: "Speed matters in real estate because opportunities have limited windows. Traditional bank financing can take months due to multiple approval layers and committees. LOR Finance understands real estate and can evaluate opportunities and make decisions within weeks, not months.",
  FLEXIBLE:
    "No two real estate deals are the same, yet traditional lenders often apply standardized structures to every project. LOR Finance evaluates each opportunity based on the actual asset, market fundamentals, and exit strategy. If the real estate makes sense, we structure financing that fits the deal.",
  FUNDED:
    "We are not brokers arranging capital from others. We have committed capital ready to deploy. When we say yes to a transaction, the funding is there.",
};

function PillBadge({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`font-heading text-xl md:text-2xl tracking-[0.25em] uppercase px-10 md:px-14 py-4 md:py-5 cursor-pointer transition-all duration-700 inline-block rounded-sm ${
          hovered
            ? "text-cream bg-cream/[0.08] shadow-[0_0_40px_-6px_rgba(245,242,235,0.12),_inset_0_0_20px_-8px_rgba(245,242,235,0.04)]"
            : "text-cream/55"
        }`}
        style={{
          border: hovered ? "1px solid rgba(245,242,235,0.4)" : "1px solid rgba(245,242,235,0.12)",
          background: hovered
            ? "linear-gradient(135deg, rgba(245,242,235,0.06) 0%, rgba(245,242,235,0.02) 100%)"
            : "transparent",
        }}
      >
        {label}
      </span>

      {/* Tooltip — appears BELOW, high z-index */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[360px] backdrop-blur-xl border border-cream/10 p-7 rounded-sm transition-all duration-500 ease-out ${
          hovered
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
        style={{ zIndex: 9000, background: "rgba(22,38,22,0.97)" }}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 border-l border-t border-cream/10 transform rotate-45" style={{ background: "rgba(22,38,22,0.97)" }} />
        <p className="text-cream/40 text-[10px] tracking-[0.3em] uppercase mb-3 font-body">
          {label}
        </p>
        <p className="text-cream/70 text-sm leading-[1.8] font-body text-justify">
          {pillData[label]}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // If already has enough data, show immediately
    if (video.readyState >= 3) {
      setVideoReady(true);
      return;
    }
    const onCanPlay = () => setVideoReady(true);
    video.addEventListener("canplay", onCanPlay);
    return () => video.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <div className="bg-green-dark min-h-screen">
      {/* Preload video */}
      <link rel="preload" href="/images/12135211_3840_2160_60fps.mp4" as="video" type="video/mp4" />

      {/* Hero section with heading + pills */}
      <section className="pt-24 pb-8 px-6 md:px-12 max-w-[1400px] mx-auto relative" style={{ zIndex: 30 }}>
        <ScrollReveal>
          <p className="text-cream/30 text-xs tracking-[0.35em] uppercase mb-6 font-body">
            About LOR Finance
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h1 className="font-heading text-cream text-[2.8rem] md:text-6xl lg:text-[5.2rem] leading-[1.08] max-w-4xl tracking-[-0.01em]">
              We are not<br />
              your <em className="italic text-cream/80">typical</em> lender.
            </h1>
            <div className="flex flex-wrap md:flex-nowrap gap-3 shrink-0 justify-center md:justify-end mb-2">
              {Object.keys(pillData).map((badge) => (
                <PillBadge key={badge} label={badge} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Full-width video — blends seamlessly */}
      <section className="w-full h-[28vh] md:h-[38vh] relative overflow-hidden" style={{ zIndex: 1, background: "linear-gradient(135deg, #162816 0%, #1a3018 30%, #162816 100%)" }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: videoReady ? 0.55 : 0 }}
          src="/images/12135211_3840_2160_60fps.mp4"
        />
        {/* Top fade into dark green */}
        <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-green-dark to-transparent z-10 pointer-events-none" />
        {/* Bottom fade into dark green */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-green-dark to-transparent z-10 pointer-events-none" />
        {/* Side vignette */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(22,40,22,0.6) 100%)"
        }} />
      </section>

      {/* Body copy */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-[1400px] mx-auto relative" style={{ zIndex: 20 }}>
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="text-cream/80 text-xl md:text-[1.65rem] leading-[1.65] font-body">
              We understand the asset. The opportunity. The value.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="text-cream/80 text-xl md:text-[1.65rem] leading-[1.65] font-body mt-4">
              And most importantly — we understand your deal.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="hr-accent mt-10 mb-10" />
            <p className="text-cream/45 text-base md:text-lg leading-[1.8] font-body max-w-2xl">
              LOR Finance provides real estate debt financing across the
              Netherlands for developers, owners, and operators who need a
              capital partner that truly speaks their language.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
