"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="block w-10 h-px bg-gold" />
            <span className="text-gold text-[11px] uppercase tracking-[0.4em] font-medium">
              Background
            </span>
            <span className="block w-10 h-px bg-gold" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] text-navy leading-tight">
            About Andrew
          </h2>
        </motion.div>

        {/* Bio Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left decorative column */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="lg:col-span-1 hidden lg:flex flex-col items-center pt-2"
          >
            <div className="w-px h-full bg-gradient-to-b from-gold via-gold/20 to-transparent" />
          </motion.div>

          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-7">
            {[
              "Based in University Heights, Ohio, Andrew Lefkowitz began his legal career as an associate at Jones Day in Los Angeles. After five years in securities law, he joined Miami\u2019s Broad and Cassel as a partner, emphasizing business law. Andrew Lefkowitz then served as a partner at Shea and Gould, also in Miami, before spending nearly two decades as the chief executive officer of Ganeden Biotech in Cleveland. In this leadership role, he oversaw an over-the-counter product that appeared in more than 60,000 stores nationwide and the inclusion of its probiotic in over 800 foods and beverages in 65 countries.",
              "Andrew Lefkowitz was a founder, CEO and the co-inventor of over 2 dozen patents while driving operations at Ganeden Biotech ultimately resulting in the sale of its OTC business to TPG and then the entire company to Kerry Group at an unusually high multiple of revenue and EBITDA. More recently, he spent seven years as the chief executive officer of Locus Fermentation Solutions. He supervised the filing of more than 1,000 patents and raised over $100 million in equity funds for the company.",
              "Before graduating with his law degree, he wrote for the Law Review at Case Western Reserve University in Cleveland. He received a degree in accounting as an undergraduate at Miami University.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                custom={i + 1}
                className="text-navy/70 text-[17px] leading-[1.85] font-light"
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Right sidebar highlights */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="bg-navy p-8 rounded-sm relative overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/10 to-transparent" />

              <h3 className="font-heading text-xl text-gold mb-5 relative">
                Leadership Highlights
              </h3>
              <ul className="space-y-3.5 relative">
                {[
                  "Co-founder & CEO of Ganeden Biotech (~20 years)",
                  "CEO of Locus Fermentation Solutions (7 years)",
                  "Sold Ganeden to Kerry Group at a premium multiple",
                  "Co-inventor of 24+ patents",
                  "Raised $100M+ in equity funds",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-white/75 text-sm leading-relaxed"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-gold mt-1 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
              className="bg-white p-8 rounded-sm border border-stone-dark/30 shadow-sm"
            >
              <h3 className="font-heading text-xl text-navy mb-5">
                Education
              </h3>
              <div className="space-y-5">
                <div>
                  <div className="font-semibold text-navy text-sm">
                    Case Western Reserve University
                  </div>
                  <div className="text-navy/50 text-sm mt-0.5">
                    Law Degree &middot; Law Review Contributor
                  </div>
                </div>
                <div className="w-full h-px bg-navy/8" />
                <div>
                  <div className="font-semibold text-navy text-sm">
                    Miami University
                  </div>
                  <div className="text-navy/50 text-sm mt-0.5">
                    B.S. Accounting
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
