import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const contacts = [
  {
    name: "Gijs Sleijffers",
    role: "Commercial Director",
    phone: "+31 6 10906716",
    email: "gijssleijffers@lorfinance.nl",
    linkedin: "https://linkedin.com/in/gijs-sleijffers",
    photo: "/images/gijs.webp",
    imgFilter: "grayscale(100%) brightness(0.95) contrast(1.05)",
  },
  {
    name: "Yoshi Snijders",
    role: "Portfoliomanager",
    phone: "+31 6 29014599",
    email: "yoshisnijders@lorfinance.nl",
    linkedin: "https://linkedin.com/in/yoshisnijders",
    photo: "/images/yoshi.webp",
    imgFilter: "grayscale(100%) brightness(0.85) contrast(1.05)",
  },
];

export default function Contact() {
  return (
    <div className="bg-green-dark min-h-screen">
      <section className="pt-32 pb-20 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <p className="text-cream/30 text-xs tracking-[0.35em] uppercase mb-6 font-body">
            Get In Touch
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h1 className="font-heading text-cream text-[2.8rem] md:text-6xl lg:text-[5.2rem] leading-[1.08] max-w-3xl tracking-[-0.01em]">
            Contact
          </h1>
        </ScrollReveal>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-16 md:mt-24 max-w-3xl">
          {contacts.map((contact, i) => (
            <ScrollReveal key={contact.name} delay={i as 0 | 1}>
              <div className="border-t border-cream/8 pt-8">
                {/* Oval photo */}
                <div
                  className="relative w-40 h-52 md:w-48 md:h-60 mb-8 overflow-hidden bg-[#3a3a3a]"
                  style={{ borderRadius: "50%" }}
                >
                  <Image
                    src={contact.photo}
                    alt={contact.name}
                    width={800}
                    height={800}
                    className="object-cover w-full h-full"
                    style={{ filter: contact.imgFilter }}
                    quality={95}
                    unoptimized
                  />
                </div>

                <h3 className="font-heading text-cream text-2xl md:text-3xl tracking-[-0.01em]">
                  {contact.name}
                </h3>
                <p className="text-cream/35 text-sm tracking-[0.15em] uppercase mt-2 font-body">
                  {contact.role}
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href={`mailto:${contact.email}`}
                    className="block text-cream/55 text-[15px] font-body hover:text-cream transition-colors duration-300"
                  >
                    {contact.email}
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-cream/55 text-[15px] font-body hover:text-cream transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  {contact.phone && (
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="block text-cream/55 text-[15px] font-body hover:text-cream transition-colors duration-300"
                    >
                      {contact.phone}
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Address + Company LinkedIn */}
        <ScrollReveal delay={2}>
          <div className="mt-20 md:mt-32 border-t border-cream/8 pt-10 flex flex-col md:flex-row md:justify-between gap-10">
            <div>
              <p className="text-cream/30 text-xs tracking-[0.35em] uppercase mb-4 font-body">
                Office
              </p>
              <p className="text-cream/55 text-[15px] font-body leading-relaxed">
                Moermanskkade 600
                <br />
                1013 BC Amsterdam
              </p>
              <p className="text-cream/30 text-[15px] font-body mt-3">
                Amsterdam, The Netherlands
              </p>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/company/lor-finance/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-cream/55 text-[15px] font-body hover:text-cream transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LOR Finance on LinkedIn
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
