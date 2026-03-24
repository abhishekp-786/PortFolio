import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Bot, Calculator, Cloud, BarChart3, Zap, Database } from "lucide-react";
import SectionParticles from "./SectionParticles";

const projects = [
  {
    title: "wanderLust",
    desc: "A travel planning app with destination discovery, itinerary creation, and booking assistance.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    category: "Web",
    icon: Cloud,
    github: "https://github.com/abhishekp-786/wanderLust",
    live: "#",
  },
  {
    title: "student-travel-planner aibot",
    desc: "AI chatbot that helps students plan travel itineraries, budget their trip, and find student-friendly accommodations.",
    tech: ["Python", "Flask", "OpenAI API"],
    category: "AI",
    icon: Bot,
    github: "https://github.com/abhishekp-786/Students-Travel-Planner-AiBot",
    live: "#",
  },
  {
    title: "Multi-Agent-Joke-Generator",
    desc: "Multi-agent AI system that generates and selects the best programming jokes using HuggingFace LLMs.",
    tech: ["Python", "HuggingFace", "LLMs", "Multi-Agent"],
    category: "AI",
    icon: Zap,
    github: "https://github.com/abhishekp-786/Multi-Agent-Joke-Generator",
    live: "#",
  },
  {
    title: "Heart Disease Prediction",
    desc: "Machine learning model to predict heart disease risk from patient data and health indicators.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
    category: "AI",
    icon: Calculator,
    github: "https://github.com/abhishekp-786/Heart-Disease-Prediction-Model",
    live: "#",
  },
  {
    title: "Live Face Detection System",
    desc: "Real-time face detection system with webcam input and detection overlay using computer vision.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    category: "AI",
    icon: Bot,
    github: "https://github.com/abhishekp-786/Live-Face-Detection-System",
    live: "#",
  },
  {
    title: "Hospital Emergency Room Analysis Dashboard",
    desc: "Interactive dashboard for emergency room metrics, patient flow analysis, and treatment outcomes.",
    tech: ["Power BI", "Data Analysis", "Excel"],
    category: "Data",
    icon: BarChart3,
    github: "https://github.com/abhishekp-786/Hospital-Emergency-Room-Analysis-Dashboard",
    live: "#",
  },
  {
    title: "Bean Class Prediction",
    desc: "Predicts bean disease class from leaf features using machine learning algorithms.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
    category: "AI",
    icon: Calculator,
    github: "https://github.com/abhishekp-786/Beans-Class-Prediction",
    live: "#",
  },
  {
    title: "EDA Python - Mobile Data Sales Analysis",
    desc: "Comprehensive exploratory data analysis project analyzing mobile data sales trends to help companies increase revenue.",
    tech: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    category: "Data",
    icon: BarChart3,
    github: "https://github.com/abhishekp-786/EDA_Python",
    live: "#",
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
      <SectionParticles count={15} />
      <div className="section-container relative z-10" ref={ref}>
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
