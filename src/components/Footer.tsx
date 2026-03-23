import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-deep border-t border-cream/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left — Brand */}
          <div>
            <p className="font-heading text-cream/80 text-lg tracking-[0.2em]">
              LOR FINANCE
            </p>
            <p className="text-cream/25 text-xs tracking-[0.25em] uppercase mt-3 font-body">
              Debt Solutions
            </p>
          </div>

          {/* Center — Contact */}
          <div className="flex flex-col gap-2">
            <p className="text-cream/25 text-[10px] tracking-[0.3em] uppercase font-body">
              Contact
            </p>
            <a
              href="mailto:contact@lorfinance.nl"
              className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 font-body"
            >
              contact@lorfinance.nl
            </a>
          </div>

          {/* Right — Locations */}
          <div className="flex flex-col gap-2">
            <p className="text-cream/25 text-[10px] tracking-[0.3em] uppercase font-body">
              Locations
            </p>
            <p className="text-cream/50 text-sm font-body">Amsterdam / London</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/20 text-xs tracking-[0.2em] uppercase font-body">
            &copy; 2026 LOR
          </p>
          <div className="flex gap-8">
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
                  className="text-cream/20 text-xs tracking-[0.15em] uppercase hover:text-cream/50 transition-colors duration-300 font-body"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
