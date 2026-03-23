"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

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
        <div className="text-center max-w-lg">
          <h2 className="font-heading text-cream text-4xl md:text-5xl mb-6">
            Thank you.
          </h2>
          <p className="text-cream/50 text-lg font-body leading-relaxed">
            We have received your enquiry and will be in touch shortly.
          </p>
        </div>
      </div>
    );
  }

  const inputClasses =
    "bg-transparent border-b border-cream/15 text-cream text-lg font-body pb-3 outline-none focus:border-cream/50 transition-colors duration-500 placeholder:text-cream/15 w-full";

  return (
    <div className="bg-green-dark min-h-screen">
      <section className="pt-32 pb-20 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <p className="text-cream/30 text-xs tracking-[0.35em] uppercase mb-6 font-body">
            Start a Conversation
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h1 className="font-heading text-cream text-[2.8rem] md:text-6xl lg:text-[5.2rem] leading-[1.08] max-w-4xl tracking-[-0.01em]">
            Tell us about
            <br />
            <em className="italic text-cream/80">your deal.</em>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <form
            onSubmit={handleSubmit}
            className="mt-16 md:mt-24 max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
          >
            {/* Name */}
            <div className="flex flex-col gap-3">
              <label className="text-cream/30 text-[10px] tracking-[0.3em] uppercase font-body">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John van der Berg"
                className={inputClasses}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
              <label className="text-cream/30 text-[10px] tracking-[0.3em] uppercase font-body">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.nl"
                className={inputClasses}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-3">
              <label className="text-cream/30 text-[10px] tracking-[0.3em] uppercase font-body">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+31 6 1234 5678"
                className={inputClasses}
              />
            </div>

            {/* Property Type */}
            <div className="flex flex-col gap-3">
              <label className="text-cream/30 text-[10px] tracking-[0.3em] uppercase font-body">
                Type of Real Estate
              </label>
              <select
                name="propertyType"
                required
                value={formData.propertyType}
                onChange={handleChange}
                className={`${inputClasses} appearance-none cursor-pointer [&>option]:bg-green-dark [&>option]:text-cream`}
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
            </div>

            {/* Loan Amount */}
            <div className="flex flex-col gap-3 md:col-span-2">
              <label className="text-cream/30 text-[10px] tracking-[0.3em] uppercase font-body">
                Indicative Loan Amount
              </label>
              <input
                type="text"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                placeholder="e.g. €8M"
                className={inputClasses}
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-3 md:col-span-2">
              <label className="text-cream/30 text-[10px] tracking-[0.3em] uppercase font-body">
                Tell us about your project
              </label>
              <textarea
                name="description"
                required
                rows={5}
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the asset, the opportunity, and what you need funded..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="text-xs tracking-[0.25em] uppercase border border-cream/30 text-cream/80 px-10 py-4 hover:bg-cream hover:text-green-dark transition-all duration-500 font-body"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </ScrollReveal>
      </section>
    </div>
  );
}
