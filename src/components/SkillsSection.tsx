import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 70 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    title: "Technologies",
    skills: [
      { name: "React", level: 70 },
      { name: "HTML/CSS", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Machine Learning", level: 40 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Flask", level: 60 },
      { name: "Excel Analytics", level: 70 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative bg-surface/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">
            My <span className="gradient-text">Tech Stack</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.15 }}
                className="glass-card p-6"
              >
                <h3 className="font-mono text-primary text-sm font-semibold mb-6 uppercase tracking-wider">
                  {cat.title}
                </h3>
                <div className="space-y-5">
                  {cat.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: ci * 0.15 + si * 0.1 }}
                        />
                      </div>
                    </div>
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

export default SkillsSection;
