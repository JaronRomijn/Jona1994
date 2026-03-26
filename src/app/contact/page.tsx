"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/FadeIn";
import TextReveal from "@/components/TextReveal";
import Marquee from "@/components/Marquee";

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

function ContactCard({ contact, index }: { contact: typeof contacts[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className="border-t border-cream/[0.06] pt-10"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Photo */}
      <div className="relative w-36 h-48 md:w-44 md:h-56 mb-8 overflow-hidden" style={{ borderRadius: "50%" }}>
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
        </motion.div>
      </div>

      <h3 className="font-heading text-cream text-2xl md:text-3xl tracking-[-0.01em] font-light">
        {contact.name}
      </h3>
      <p className="text-cream/30 text-[11px] tracking-[0.2em] uppercase mt-2 font-body">
        {contact.role}
      </p>

      <div className="mt-8 space-y-3">
        <a
          href={`mailto:${contact.email}`}
          className="block text-cream/45 text-[15px] font-body hover:text-cream transition-colors duration-500 hover-line w-fit"
        >
          {contact.email}
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 text-cream/45 text-[15px] font-body hover:text-cream transition-colors duration-500"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
        {contact.phone && (
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="block text-cream/45 text-[15px] font-body hover:text-cream transition-colors duration-500 hover-line w-fit"
          >
            {contact.phone}
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <div className="bg-green-dark min-h-screen">
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <FadeIn>
          <p className="text-cream/25 text-[10px] tracking-[0.4em] uppercase mb-8 font-body">
            Get In Touch
          </p>
        </FadeIn>
        <TextReveal
          as="h1"
          className="font-heading text-cream text-[2.8rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.06] max-w-3xl tracking-[-0.02em]"
        >
          Let&apos;s talk.
        </TextReveal>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 mt-20 md:mt-28 max-w-3xl">
          {contacts.map((contact, i) => (
            <ContactCard key={contact.name} contact={contact} index={i} />
          ))}
        </div>

        {/* Address + Company LinkedIn */}
        <FadeIn delay={0.2}>
          <div className="mt-24 md:mt-36 border-t border-cream/[0.06] pt-12 flex flex-col md:flex-row md:justify-between gap-12">
            <div>
              <p className="text-cream/25 text-[10px] tracking-[0.4em] uppercase mb-5 font-body">
                Office
              </p>
              <p className="text-cream/45 text-[15px] font-body leading-relaxed">
                Moermanskkade 600
                <br />
                1013 BC Amsterdam
              </p>
              <p className="text-cream/20 text-[15px] font-body mt-3">
                Amsterdam, The Netherlands
              </p>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/company/lor-finance/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-cream/45 text-[15px] font-body hover:text-cream transition-colors duration-500"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LOR Finance on LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Marquee */}
      <div className="py-6 border-y border-cream/[0.04]">
        <Marquee speed={40} direction="right" pauseOnHover>
          <span className="font-heading text-cream/[0.05] text-[4rem] md:text-[7rem] tracking-[0.05em] mx-8 select-none italic">
            Amsterdam
          </span>
          <span className="text-cream/[0.1] text-lg mx-4 select-none">&bull;</span>
          <span className="font-heading text-cream/[0.05] text-[4rem] md:text-[7rem] tracking-[0.05em] mx-8 select-none italic">
            London
          </span>
          <span className="text-cream/[0.1] text-lg mx-4 select-none">&bull;</span>
        </Marquee>
      </div>
    </div>
  );
}
