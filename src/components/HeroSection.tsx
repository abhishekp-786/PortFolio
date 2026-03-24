import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const roles = [
  "Aspiring Data Engineer",
  "Aspiring Data Scientist",
  "AI/ML Enthusiast",
  "Aspiring Software Developer",
  "Problem Solver",
  "Data Analyst",
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
            <span className="ml-1 w-0.5 h-6 bg-gradient-to-b from-pink-400 to-purple-400 animate-blink inline-block" />
          </div>
          <p className="text-lg sm:text-2xl mb-8 text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text font-semibold">
            Data Science  |  AI/ML  |  Full Stack Development
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            BTech Computer Science student specializing in Data Science. 
            Passionate about building data-driven applications, solving complex problems
            and staying at the intersection of AI/ML and web development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-pink-500/50 transition-all transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download="Abhishek_Kumar_Prajapati_Resume.pdf"
              className="px-8 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-medium hover:bg-cyan-400/10 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border-2 border-purple-400 text-purple-400 font-medium hover:bg-purple-400/10 transition-all transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center gap-5">
            <a href="https://github.com/abhishekp-786" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-kumar-prajapati-10979724b/" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground">
              <Linkedin size={20} />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prajapatiabhishekkumar15@gmail.com&su=Let's%20Connect&body=Hi%20Abhishek,%20I%20visited%20your%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
            >
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
