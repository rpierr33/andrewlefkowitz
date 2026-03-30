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
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
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
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  }

  return (
    <section id="contact" className="relative py-28 lg:py-36 section-padding">
      {/* Cream/stone background instead of invisible dark overlay */}
      <div className="absolute inset-0 bg-stone" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
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
            <span className="text-gold-dark text-[11px] uppercase tracking-[0.4em] font-medium">
              Connect
            </span>
            <span className="block w-10 h-px bg-gold" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] text-navy mb-5 leading-tight">
            Get in Touch
          </h2>
          <p className="text-navy/50 max-w-md mx-auto text-sm leading-relaxed">
            Interested in connecting? Send a message using the form below.
          </p>
        </motion.div>

        {/* Two-column layout: info + form */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-navy rounded-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/10 to-transparent" />
              <h3 className="font-heading text-2xl text-gold mb-6 relative">
                Andrew Lefkowitz
              </h3>
              <div className="space-y-5 relative">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold/70 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <div>
                    <p className="text-white/90 text-sm font-medium">Location</p>
                    <p className="text-white/50 text-sm">University Heights, OH</p>
                  </div>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold/70 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  <div>
                    <p className="text-white/90 text-sm font-medium">Background</p>
                    <p className="text-white/50 text-sm">Legal &amp; Biotech Executive</p>
                  </div>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold/70 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                  <div>
                    <p className="text-white/90 text-sm font-medium">Education</p>
                    <p className="text-white/50 text-sm">Case Western Reserve &middot; Miami University</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-sm shadow-lg shadow-navy/5 p-8 sm:p-10 border border-stone-dark/20">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
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
                  <h3 className="font-heading text-2xl text-navy mb-3">
                    Message Sent
                  </h3>
                  <p className="text-navy/50 mb-8 text-sm">
                    Thank you for reaching out. Your message has been received.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-gold-dark text-[13px] uppercase tracking-[0.2em] hover:text-gold transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-navy/60 text-[11px] mb-2 uppercase tracking-[0.2em] font-medium"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-cream/50 border border-stone-dark/40 rounded-sm px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-navy/60 text-[11px] mb-2 uppercase tracking-[0.2em] font-medium"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-cream/50 border border-stone-dark/40 rounded-sm px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-navy/60 text-[11px] mb-2 uppercase tracking-[0.2em] font-medium"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-cream/50 border border-stone-dark/40 rounded-sm px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-200"
                      placeholder="Subject"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-navy/60 text-[11px] mb-2 uppercase tracking-[0.2em] font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-cream/50 border border-stone-dark/40 rounded-sm px-4 py-3 text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-200 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="text-red-700 text-sm bg-red-50 border border-red-200 rounded-sm p-4">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative overflow-hidden gold-gradient text-navy font-semibold px-10 py-3.5 rounded-sm text-[13px] uppercase tracking-[0.2em] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {status === "loading" ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
