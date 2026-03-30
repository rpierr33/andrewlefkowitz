"use client";

import { useState, useEffect, FormEvent } from "react";

interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

const ADMIN_PASSWORD = "lefkowitz2025";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError("");
      fetchMessages();
    } else {
      setError("Invalid password");
    }
  }

  async function fetchMessages() {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/messages?password=${ADMIN_PASSWORD}`);
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages || []);
      }
    } catch {
      setError("Failed to load messages");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (authenticated) fetchMessages();
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="font-heading text-3xl text-white mb-2">Admin Access</h1>
            <p className="text-white/40 text-sm">Enter password to view messages</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="admin-password" className="block text-white/50 text-[11px] mb-2 uppercase tracking-[0.2em]">
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-navy-light border border-white/15 rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="Enter admin password"
                autoFocus
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}
            <button
              type="submit"
              className="w-full gold-gradient text-navy font-semibold py-3 rounded-sm text-[13px] uppercase tracking-[0.15em] cursor-pointer hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-navy py-4 section-padding">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-heading text-xl text-white">
              Admin <span className="text-gold">Dashboard</span>
            </h1>
            <p className="text-white/40 text-xs mt-0.5">
              {messages.length} message{messages.length !== 1 ? "s" : ""} received
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={fetchMessages}
              className="text-white/60 hover:text-gold transition-colors text-sm cursor-pointer"
            >
              Refresh
            </button>
            <a
              href="/"
              className="text-white/40 hover:text-white transition-colors text-sm cursor-pointer"
            >
              View Site
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto section-padding py-8">
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin h-8 w-8 border-2 border-gold border-t-transparent rounded-full mx-auto" />
            <p className="text-navy/40 text-sm mt-4">Loading messages...</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-16 h-16 text-navy/15 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p className="text-navy/40 text-sm">No messages yet</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Message List */}
            <div className="lg:col-span-1 space-y-3">
              {messages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => setSelectedMessage(msg)}
                  className={`w-full text-left p-4 rounded-sm border transition-all duration-200 cursor-pointer ${
                    selectedMessage?.id === msg.id
                      ? "bg-white border-gold/30 shadow-md"
                      : "bg-white/60 border-stone-dark/20 hover:bg-white hover:border-stone-dark/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-semibold text-navy text-sm truncate">
                      {msg.name}
                    </p>
                    <span className="text-navy/30 text-[10px] whitespace-nowrap">
                      {new Date(msg.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-navy/70 text-xs font-medium truncate">
                    {msg.subject}
                  </p>
                  <p className="text-navy/40 text-xs mt-1 truncate">
                    {msg.message}
                  </p>
                </button>
              ))}
            </div>

            {/* Message Detail */}
            <div className="lg:col-span-2">
              {selectedMessage ? (
                <div className="bg-white rounded-sm border border-stone-dark/20 shadow-sm p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="font-heading text-2xl text-navy mb-1">
                        {selectedMessage.subject}
                      </h2>
                      <p className="text-navy/50 text-sm">
                        From <span className="text-navy/80 font-medium">{selectedMessage.name}</span>{" "}
                        &middot;{" "}
                        <a
                          href={`mailto:${selectedMessage.email}`}
                          className="text-gold-dark hover:text-gold transition-colors cursor-pointer"
                        >
                          {selectedMessage.email}
                        </a>
                      </p>
                    </div>
                    <span className="text-navy/30 text-xs">
                      {new Date(selectedMessage.created_at).toLocaleString()}
                    </span>
                  </div>
                  <div className="h-px bg-stone-dark/20 mb-6" />
                  <p className="text-navy/70 leading-relaxed whitespace-pre-wrap">
                    {selectedMessage.message}
                  </p>
                  <div className="mt-8">
                    <a
                      href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                      className="gold-gradient text-navy font-semibold px-6 py-2.5 rounded-sm text-[13px] uppercase tracking-[0.15em] cursor-pointer inline-block hover:opacity-90 transition-opacity"
                    >
                      Reply via Email
                    </a>
                  </div>
                </div>
              ) : (
                <div className="bg-white/50 rounded-sm border border-dashed border-stone-dark/30 p-16 text-center">
                  <p className="text-navy/30 text-sm">
                    Select a message to view details
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
