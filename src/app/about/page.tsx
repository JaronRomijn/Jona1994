"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import TextReveal from "@/components/TextReveal";
import Marquee from "@/components/Marquee";

const pillData: Record<string, string> = {
  FAST: "Speed matters in real estate because opportunities have limited windows. Traditional bank financing can take months due to multiple approval layers and committees. LOR Finance understands real estate and can evaluate opportunities and make decisions within weeks, not months.",
  FLEXIBLE:
    "No two real estate deals are the same, yet traditional lenders often apply standardized structures to every project. LOR Finance evaluates each opportunity based on the actual asset, market fundamentals, and exit strategy. If the real estate makes sense, we structure financing that fits the deal.",
  FUNDED:
    "We are not brokers arranging capital from others. We have committed capital ready to deploy. When we say yes to a transaction, the funding is there.",
};

function PillBadge({ label, index }: { label: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        className="font-heading text-lg md:text-xl tracking-[0.3em] uppercase px-8 md:px-12 py-4 md:py-5 inline-block rounded-sm font-light"
        animate={{
          color: hovered ? "rgba(245,242,235,1)" : "rgba(245,242,235,0.4)",
          borderColor: hovered ? "rgba(245,242,235,0.4)" : "rgba(245,242,235,0.08)",
          backgroundColor: hovered ? "rgba(245,242,235,0.05)" : "transparent",
        }}
        transition={{ duration: 0.5 }}
        style={{
          border: "1px solid rgba(245,242,235,0.08)",
          cursor: "none",
        }}
        data-cursor-text={label}
      >
        {label}
      </motion.span>

      {/* Tooltip */}
      <motion.div
        className="absolute top-full left-1/2 mt-5 w-[340px] backdrop-blur-xl border border-cream/8 p-7 rounded-sm"
        style={{
          zIndex: 9000,
          background: "rgba(22,38,22,0.97)",
          x: "-50%",
        }}
        animate={{
          opacity: hovered ? 1 : 0,
          y: hovered ? 0 : -8,
          pointerEvents: hovered ? "auto" as const : "none" as const,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 border-l border-t border-cream/8 transform rotate-45" style={{ background: "rgba(22,38,22,0.97)" }} />
        <p className="text-cream/30 text-[10px] tracking-[0.35em] uppercase mb-3 font-body">
          {label}
        </p>
        <p className="text-cream/60 text-sm leading-[1.9] font-body">
          {pillData[label]}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
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
      <link rel="preload" href="/images/12135211_3840_2160_60fps.mp4" as="video" type="video/mp4" />

      {/* Hero section */}
      <section className="pt-32 md:pt-40 pb-8 px-6 md:px-12 max-w-[1400px] mx-auto relative" style={{ zIndex: 30 }}>
        <FadeIn>
          <p className="text-cream/25 text-[10px] tracking-[0.4em] uppercase mb-8 font-body">
            About LOR Finance
          </p>
<<<<<<< HEAD
        </FadeIn>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <TextReveal
            as="h1"
            className="font-heading text-cream text-[2.8rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.06] max-w-4xl tracking-[-0.02em]"
            delay={0.1}
          >
            We are not your typical lender.
          </TextReveal>
          <FadeIn delay={0.4} className="flex flex-wrap md:flex-nowrap gap-3 shrink-0 justify-center md:justify-end">
            {Object.keys(pillData).map((badge, i) => (
              <PillBadge key={badge} label={badge} index={i} />
            ))}
          </FadeIn>
        </div>
=======
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
>>>>>>> 7c3582a42761df654384c4d45e033f21107fd4a9
      </section>

      {/* Full-width video */}
      <section className="w-full h-[30vh] md:h-[40vh] relative overflow-hidden mt-8" style={{ zIndex: 1, background: "linear-gradient(135deg, #162816 0%, #1a3018 30%, #162816 100%)" }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: videoReady ? 0.45 : 0 }}
          src="/images/12135211_3840_2160_60fps.mp4"
        />
        <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-green-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-green-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 z-10 pointer-events-none" style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(22,40,22,0.7) 100%)"
        }} />
      </section>

      {/* Body copy */}
      <section className="py-16 md:py-28 px-6 md:px-12 max-w-[1400px] mx-auto relative" style={{ zIndex: 20 }}>
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-cream/70 text-xl md:text-[1.75rem] leading-[1.7] font-body font-light">
              We understand the asset. The opportunity. The value.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-cream/70 text-xl md:text-[1.75rem] leading-[1.7] font-body mt-4 font-light">
              And most importantly — <em className="italic text-cream/90">we understand your deal.</em>
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="hr-accent mt-12 mb-12" />
            <p className="text-cream/35 text-base md:text-lg leading-[1.9] font-body max-w-2xl">
              LOR Finance provides real estate debt financing across the
              Netherlands for developers, owners, and operators who need a
              capital partner that truly speaks their language.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Marquee divider */}
      <div className="py-6 border-y border-cream/[0.04]">
        <Marquee speed={35} direction="right" pauseOnHover>
          <span className="font-body text-cream/[0.06] text-[3rem] md:text-[5rem] tracking-[0.15em] uppercase mx-8 select-none">
            Fast
          </span>
          <span className="text-cream/[0.1] text-lg mx-4 select-none">&mdash;</span>
          <span className="font-body text-cream/[0.06] text-[3rem] md:text-[5rem] tracking-[0.15em] uppercase mx-8 select-none">
            Flexible
          </span>
          <span className="text-cream/[0.1] text-lg mx-4 select-none">&mdash;</span>
          <span className="font-body text-cream/[0.06] text-[3rem] md:text-[5rem] tracking-[0.15em] uppercase mx-8 select-none">
            Funded
          </span>
          <span className="text-cream/[0.1] text-lg mx-4 select-none">&mdash;</span>
        </Marquee>
      </div>
    </div>
  );
}
