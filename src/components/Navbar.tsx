import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card border-b border-border/50 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-mono font-bold text-lg tracking-tight">
          <span className="glow-text">&lt;</span>
          <span className="text-foreground">AKP</span>
          <span className="glow-text"> /&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-foreground"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-border/50 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setDark(!dark)}
                  className="p-2 rounded-lg bg-secondary text-foreground"
                >
                  {dark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground"
                >
                  <Download size={14} />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
