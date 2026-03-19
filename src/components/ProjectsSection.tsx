import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Bot, Calculator, Cloud, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "Travel Safety Advisor Chatbot",
    desc: "AI-powered chatbot providing real-time travel safety insights using OpenAI and weather data to help travelers make informed decisions.",
    tech: ["Python", "Flask", "OpenAI API", "Weather API"],
    category: "AI",
    icon: Bot,
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Travel Budget Calculator",
    desc: "Smart chatbot that helps travelers plan and manage their trip budgets with intelligent cost estimation and recommendations.",
    tech: ["Python", "Flask", "NLP"],
    category: "AI",
    icon: Calculator,
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Weather Prediction Website",
    desc: "Full-stack weather forecasting application with beautiful visualizations and accurate predictions using meteorological data.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    category: "Web",
    icon: Cloud,
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Hospital Data Analysis Dashboard",
    desc: "Comprehensive analytics dashboard analyzing hospital data to derive insights about patient demographics, treatments, and outcomes.",
    tech: ["Excel", "Data Analysis", "Visualization"],
    category: "Data",
    icon: BarChart3,
    github: "https://github.com",
    live: null,
  },
];

const filters = ["All", "AI", "Web", "Data"];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">
            Things I've <span className="gradient-text">Built</span>
          </h2>

          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  active === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <project.icon size={24} />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
