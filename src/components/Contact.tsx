"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  const inputClasses =
    "w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all duration-300";

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-36 section-padding overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-navy/92" />
      </div>

      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="block w-10 h-px bg-gold" />
            <span className="text-gold text-[11px] uppercase tracking-[0.4em] font-medium">
              Connect
            </span>
            <span className="block w-10 h-px bg-gold" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] text-white mb-5 leading-tight">
            Get in Touch
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-sm leading-relaxed">
            Interested in connecting? Send a message using the form below.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-sm p-8 sm:p-12"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-7 h-7 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-2xl text-white mb-3">
                Message Sent
              </h3>
              <p className="text-white/40 mb-8 text-sm">
                Thank you for reaching out. Your message has been received.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-gold text-[13px] uppercase tracking-[0.2em] hover:text-gold-light transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/50 text-[11px] mb-2.5 uppercase tracking-[0.2em]">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-[11px] mb-2.5 uppercase tracking-[0.2em]">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={inputClasses}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/50 text-[11px] mb-2.5 uppercase tracking-[0.2em]">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className={inputClasses}
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-white/50 text-[11px] mb-2.5 uppercase tracking-[0.2em]">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`${inputClasses} resize-none`}
                  placeholder="Your message..."
                />
              </div>

              {status === "error" && (
                <div className="text-red-400 text-sm bg-red-400/5 border border-red-400/15 rounded-sm p-4">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative overflow-hidden gold-gradient text-navy font-semibold px-12 py-4 rounded-sm text-[13px] uppercase tracking-[0.2em] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
