export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto section-padding py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Name */}
          <a
            href="#home"
            className="font-heading text-xl text-white hover:text-gold transition-colors duration-300"
          >
            Andrew <span className="text-gold">Lefkowitz</span>
          </a>

          {/* Nav */}
          <nav className="flex items-center gap-10">
            {["Home", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/35 hover:text-gold transition-colors text-[13px] uppercase tracking-[0.15em]"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-white/20 text-sm">
            &copy; {new Date().getFullYear()} Andrew Lefkowitz
          </p>
        </div>
      </div>
    </footer>
  );
}
