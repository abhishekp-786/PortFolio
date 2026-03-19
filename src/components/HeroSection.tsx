import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "Aspiring Software Developer",
  "Data Science Enthusiast",
  "Problem Solver",
  "Web Developer",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />
      
      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-widest uppercase">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Abhishek Kumar</span>
            <br />
            <span className="gradient-text">Prajapati</span>
          </h1>
          <div className="h-10 flex items-center justify-center mb-8">
            <span className="font-mono text-lg sm:text-xl text-muted-foreground">
              {text}
            </span>
            <span className="ml-1 w-0.5 h-6 bg-primary animate-blink inline-block" />
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            BTech Computer Science student passionate about building elegant solutions
            through code. Specializing in Data Science & full-stack development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center gap-5">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground">
              <Linkedin size={20} />
            </a>
            <a href="mailto:abhishek@example.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
