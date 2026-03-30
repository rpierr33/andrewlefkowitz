"use client";

import { motion } from "framer-motion";

const careerSteps = [
  {
    company: "Jones Day",
    location: "Los Angeles",
    role: "Associate, Securities Law",
    description:
      "Began legal career at one of the world\u2019s largest law firms, specializing in securities law for five years.",
  },
  {
    company: "Broad and Cassel",
    location: "Miami",
    role: "Partner, Business Law",
    description:
      "Joined as a partner with an emphasis on business law, expanding expertise beyond securities.",
  },
  {
    company: "Shea and Gould",
    location: "Miami",
    role: "Partner",
    description:
      "Served as partner at this prominent firm, further building a foundation in corporate and business law.",
  },
  {
    company: "Ganeden Biotech",
    location: "Cleveland",
    role: "Co-founder & CEO",
    duration: "~20 years",
    description:
      "Led the company as co-founder and CEO for nearly two decades. Oversaw products in 60,000+ stores, probiotics in 800+ foods across 65 countries, co-invented 24+ patents, and drove the sale to Kerry Group at a premium multiple.",
    highlight: true,
  },
  {
    company: "Locus Fermentation Solutions",
    location: "",
    role: "CEO",
    duration: "7 years",
    description:
      "Supervised the filing of 1,000+ patents and raised over $100 million in equity funds for the company.",
    highlight: true,
  },
];

export default function Timeline() {
  return (
    <section className="py-28 lg:py-36 section-padding bg-navy relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="block w-10 h-px bg-gold" />
            <span className="text-gold text-[11px] uppercase tracking-[0.4em] font-medium">
              Career
            </span>
            <span className="block w-10 h-px bg-gold" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-tight">
            Professional Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gold/15" />
          <motion.div
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 w-px bg-gradient-to-b from-gold to-gold/0 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ height: "100%" }}
          />

          <div className="space-y-10">
            {careerSteps.map((step, i) => (
              <motion.div
                key={step.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`relative flex flex-col md:flex-row items-start ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 mt-7">
                  <div className={`w-3 h-3 rounded-full border-2 border-navy ${step.highlight ? "bg-gold" : "bg-gold/60"}`} />
                </div>

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    i % 2 === 0 ? "md:pr-0 md:text-right" : "md:pl-0"
                  }`}
                >
                  <div
                    className={`group p-7 rounded-sm transition-all duration-500 hover:-translate-y-1 ${
                      step.highlight
                        ? "bg-navy-lighter border border-gold/15 hover:border-gold/30"
                        : "bg-navy-light border border-white/5 hover:border-white/10"
                    }`}
                  >
                    <div className={`flex items-center gap-2.5 mb-1.5 flex-wrap ${i % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                      <h3 className="font-heading text-xl text-white group-hover:text-gold transition-colors duration-300">
                        {step.company}
                      </h3>
                      {step.duration && (
                        <span className="text-[11px] text-gold bg-gold/10 px-2.5 py-0.5 rounded-full font-medium tracking-wide">
                          {step.duration}
                        </span>
                      )}
                    </div>
                    <div className="text-gold/80 text-sm font-medium mb-1">
                      {step.role}
                    </div>
                    {step.location && (
                      <div className="text-white/30 text-xs mb-3 tracking-wide">
                        {step.location}
                      </div>
                    )}
                    <p className="text-white/50 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Empty spacer for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
