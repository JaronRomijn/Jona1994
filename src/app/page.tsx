import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-green-dark overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover opacity-40"
      >
        <source src="/images/8485943-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay with vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(22,40,22,0.5) 0%, rgba(22,40,22,0.85) 100%)",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-10 grid-overlay pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-10 bg-gradient-to-t from-green-dark via-green-dark/80 to-transparent pointer-events-none" />
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 z-10 bg-gradient-to-b from-green-dark/60 to-transparent pointer-events-none" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Tagline */}
        <p className="text-cream/50 text-base md:text-xl tracking-[0.35em] uppercase font-body mb-12 md:mb-16">
          Fast. Flexible. Funded.
        </p>

        {/* Main heading */}
        <h1 className="font-heading text-cream text-[2.8rem] md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-[-0.01em]">
          We don&apos;t just
          <br />
          finance real estate.
          <br />
          <span className="italic text-cream/70">We understand it.</span>
        </h1>

        {/* Vertical line */}
        <div className="flex justify-center mt-16 md:mt-20">
          <div className="vertical-line" />
        </div>

        {/* CTA */}
        <Link
          href="/deals"
          className="inline-block mt-8 text-cream/50 text-sm tracking-[0.25em] uppercase hover:text-cream transition-colors duration-500 group font-body"
        >
          Explore the Fund
          <span className="block w-0 group-hover:w-full h-px bg-cream/30 transition-all duration-700 mt-2 mx-auto" />
        </Link>
      </div>
    </section>
  );
}
