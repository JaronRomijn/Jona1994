"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

const propertyTypes = [
  "Residential",
  "Logistics",
  "Hotels",
  "Offices",
  "Light Industrial",
  "Retail",
  "Mixed-Use",
  "Other",
];

export default function Enquire() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    loanAmount: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-dark min-h-screen flex items-center justify-center px-6">
        <motion.div
          className="text-center max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-heading text-cream text-4xl md:text-5xl mb-6 font-light">
            Thank you.
          </h2>
          <p className="text-cream/40 text-lg font-body leading-relaxed font-light">
            We have received your enquiry and will be in touch shortly.
          </p>
          <motion.div
            className="h-px bg-cream/15 mx-auto mt-10"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </div>
    );
  }

  const inputClasses =
    "bg-transparent border-b border-cream/10 text-cream text-lg font-body pb-4 pt-2 outline-none focus:border-cream/40 transition-all duration-600 placeholder:text-cream/10 w-full font-light";

  return (
    <div className="bg-green-dark min-h-screen">
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <FadeIn>
          <p className="text-cream/25 text-[10px] tracking-[0.4em] uppercase mb-8 font-body">
            Start a Conversation
          </p>
        </FadeIn>
        <TextReveal
          as="h1"
          className="font-heading text-cream text-[2.8rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.06] max-w-4xl tracking-[-0.02em]"
        >
          Tell us about your deal.
        </TextReveal>

        <FadeIn delay={0.3}>
          <form
            onSubmit={handleSubmit}
            className="mt-20 md:mt-28 max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12"
          >
            {/* Name */}
            <motion.div
              className="flex flex-col gap-3"
              animate={{ y: focusedField === "name" ? -2 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <label className="text-cream/25 text-[10px] tracking-[0.35em] uppercase font-body transition-colors duration-500" style={{ color: focusedField === "name" ? "rgba(245,242,235,0.5)" : undefined }}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                placeholder="John van der Berg"
                className={inputClasses}
              />
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex flex-col gap-3"
              animate={{ y: focusedField === "email" ? -2 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <label className="text-cream/25 text-[10px] tracking-[0.35em] uppercase font-body transition-colors duration-500" style={{ color: focusedField === "email" ? "rgba(245,242,235,0.5)" : undefined }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                placeholder="john@company.nl"
                className={inputClasses}
              />
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex flex-col gap-3"
              animate={{ y: focusedField === "phone" ? -2 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <label className="text-cream/25 text-[10px] tracking-[0.35em] uppercase font-body transition-colors duration-500" style={{ color: focusedField === "phone" ? "rgba(245,242,235,0.5)" : undefined }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                placeholder="+31 6 1234 5678"
                className={inputClasses}
              />
            </motion.div>

            {/* Property Type */}
            <motion.div
              className="flex flex-col gap-3"
              animate={{ y: focusedField === "propertyType" ? -2 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <label className="text-cream/25 text-[10px] tracking-[0.35em] uppercase font-body transition-colors duration-500" style={{ color: focusedField === "propertyType" ? "rgba(245,242,235,0.5)" : undefined }}>
                Type of Real Estate
              </label>
              <select
                name="propertyType"
                required
                value={formData.propertyType}
                onChange={handleChange}
                onFocus={() => setFocusedField("propertyType")}
                onBlur={() => setFocusedField(null)}
                className={`${inputClasses} appearance-none [&>option]:bg-green-dark [&>option]:text-cream`}
                style={{ cursor: "none" }}
              >
                <option value="" disabled>
                  Select asset class
                </option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Loan Amount */}
            <motion.div
              className="flex flex-col gap-3 md:col-span-2"
              animate={{ y: focusedField === "loanAmount" ? -2 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <label className="text-cream/25 text-[10px] tracking-[0.35em] uppercase font-body transition-colors duration-500" style={{ color: focusedField === "loanAmount" ? "rgba(245,242,235,0.5)" : undefined }}>
                Indicative Loan Amount
              </label>
              <input
                type="text"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                onFocus={() => setFocusedField("loanAmount")}
                onBlur={() => setFocusedField(null)}
                placeholder="e.g. €8M"
                className={inputClasses}
              />
            </motion.div>

            {/* Description */}
            <motion.div
              className="flex flex-col gap-3 md:col-span-2"
              animate={{ y: focusedField === "description" ? -2 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <label className="text-cream/25 text-[10px] tracking-[0.35em] uppercase font-body transition-colors duration-500" style={{ color: focusedField === "description" ? "rgba(245,242,235,0.5)" : undefined }}>
                Tell us about your project
              </label>
              <textarea
                name="description"
                required
                rows={5}
                value={formData.description}
                onChange={handleChange}
                onFocus={() => setFocusedField("description")}
                onBlur={() => setFocusedField(null)}
                placeholder="Describe the asset, the opportunity, and what you need funded..."
                className={`${inputClasses} resize-none`}
              />
            </motion.div>

            {/* Submit */}
            <div className="md:col-span-2 mt-6">
              <MagneticButton
                className="text-[10px] tracking-[0.3em] uppercase border border-cream/20 text-cream/70 px-12 py-5 hover:bg-cream hover:text-green-dark transition-all duration-600 font-body btn-glow"
                strength={0.25}
              >
                Submit Enquiry
              </MagneticButton>
            </div>
          </form>
        </FadeIn>
      </section>
    </div>
  );
}
