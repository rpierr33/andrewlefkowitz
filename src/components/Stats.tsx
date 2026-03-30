"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    value: 60000,
    suffix: "+",
    label: "Stores Nationwide",
    description: "OTC product distribution",
  },
  {
    value: 800,
    suffix: "+",
    label: "Foods & Beverages",
    description: "Across 65 countries",
  },
  {
    value: 24,
    suffix: "+",
    label: "Patents Co-Invented",
    description: "Biotech innovations",
  },
  {
    prefix: "$",
    value: 100,
    suffix: "M+",
    label: "Equity Funds Raised",
    description: "Capital secured",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Patents Supervised",
    description: "Filed & managed",
  },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative -mt-16 z-20 section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative bg-white rounded-sm p-7 text-center shadow-lg shadow-navy/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Top gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="font-heading text-3xl lg:text-[2rem] text-navy mb-1 tabular-nums">
                {visible ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    delay={i * 0.15}
                    separator=","
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                ) : (
                  <span>0</span>
                )}
              </div>
              <div className="text-navy font-semibold text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-navy/40 text-xs">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
