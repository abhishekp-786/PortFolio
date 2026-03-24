import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, BookOpen, Target, Zap, BarChart3, Brain, Lightbulb } from "lucide-react";
import SectionParticles from "./SectionParticles";

const highlights = [
  { icon: Code2, label: "100+ DSA Problems", desc: "Solved across platforms" },
  { icon: Target, label: "Data Science", desc: "ML & analytics focus" },
  { icon: BookOpen, label: "CGPA: 8.61", desc: "Consistent excellence" },
  { icon: Zap, label: "Full Stack Dev", desc: "React & Python projects" },
];

const strengths = [
  { icon: BarChart3, label: "Power BI & Visualization", desc: "Dashboard creation & data insights" },
  { icon: Brain, label: "Machine Learning", desc: "Algorithms & predictive modeling" },
  { icon: Lightbulb, label: "Continuous Learner", desc: "Always upgrading skills" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative">
      <SectionParticles count={12} />
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">
            Passionate about <span className="gradient-text">solving problems</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Abhishek Kumar Prajapati, a BTech Computer Science student with a
                specialization in Data Science. My coding journey started with curiosity
                about how technology shapes our world, and it has grown into a deep
                passion for building real-world applications.
              </p>              
              <p>
                Currently working on a <span className="text-pink-400 font-semibold">capstone data science project</span> that integrates
                Power BI dashboards and machine learning models. I'm dedicated to continuous learning,
                core concept revision, and building solutions that create real impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="glass-card glow-border p-5 text-center group hover:border-primary/30 transition-colors"
                >
                  <item.icon className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" size={24} />
                  <p className="font-semibold text-foreground text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Current Focus Areas */}
          <div className="mt-12 p-8 rounded-xl border border-purple-400/30 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 text-center">
              <span className="gradient-text">Current Focus & Expertise</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {strengths.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-primary mb-3 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <p className="font-semibold text-foreground mb-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
