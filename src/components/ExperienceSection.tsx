import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Brain, Globe } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "BTech Computer Science",
    subtitle: "Specialization in Data Science",
    desc: "Building strong fundamentals in CS theory, mathematics, and data analysis.",
    status: "Ongoing",
  },
  {
    icon: Code,
    title: "DSA Problem Solving",
    subtitle: "100+ Problems Solved",
    desc: "Practicing on LeetCode, GeeksforGeeks, and HackerRank to master algorithms and data structures.",
    status: "Active",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    subtitle: "Beginner → Intermediate",
    desc: "Learning supervised & unsupervised learning, data preprocessing, and model evaluation techniques.",
    status: "Learning",
  },
  {
    icon: Globe,
    title: "Web Development",
    subtitle: "React & Modern Stack",
    desc: "Building full-stack web applications using React, Tailwind CSS, and Python Flask.",
    status: "Building",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative bg-surface/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">
            Experience & <span className="gradient-text">Learning</span>
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex gap-6 items-start"
                >
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div className="glass-card p-5 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary w-fit">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-primary/80 font-medium mb-2">{item.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
