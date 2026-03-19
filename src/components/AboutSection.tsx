import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, BookOpen, Target, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "100+ DSA Problems", desc: "Solved across platforms" },
  { icon: Target, label: "Data Science", desc: "ML & analytics focus" },
  { icon: BookOpen, label: "BTech CSE", desc: "Computer Science student" },
  { icon: Zap, label: "Full Stack", desc: "React & Python projects" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">
            Passionate about <span className="gradient-text">solving problems</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Abhishek Kumar Prajapati, a BTech Computer Science student with a
                specialization in Data Science. My coding journey started with curiosity
                about how technology shapes our world, and it has grown into a deep
                passion for building real-world applications.
              </p>
              <p>
                I've solved over <span className="text-primary font-semibold">100+ Data Structures & Algorithms</span> problems,
                strengthening my problem-solving foundation. I love exploring the
                intersection of data science and web development to create impactful solutions.
              </p>
              <p>
                Currently diving deeper into Machine Learning and modern web technologies,
                I'm always looking for opportunities to learn, collaborate, and build
                projects that matter.
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
                  <item.icon className="mx-auto mb-3 text-primary" size={24} />
                  <p className="font-semibold text-foreground text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
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
