import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Database,
  Cpu,
  Code2,
  LayoutGrid,
  Server,
  Box,
  Layers,
  Terminal,
  Sparkles,
  Users,
  Wrench,
  GitBranch,
} from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./ui/tooltip";
import SectionParticles from "./SectionParticles";

const categories = [
  {
    title: "Languages",
    skills: [
      {
        name: "C",
        icon: Cpu,
        description:
          "Low-level procedural programming with manual memory/pointer management and cross-platform efficiency.",
      },
      {
        name: "C++",
        icon: Code2,
        description:
          "Object-oriented and generic programming using STL, RAII, and performance-oriented patterns.",
      },
      {
        name: "Python",
        icon: LayoutGrid,
        description:
          "Versatile scripting for data analysis, automation, and machine learning with rich library ecosystem.",
      },
      {
        name: "Java",
        icon: Cpu,
        description:
          "Platform-independent OOP language for enterprise systems, concurrent logic, and backend services.",
      },
      {
        name: "DBMS",
        icon: Database,
        description:
          "Relational database design, SQL querying, indexing, and transaction management best practices.",
      },
      {
        name: "MongoDB",
        icon: Database,
        description:
          "NoSQL document storage for flexible schema design, aggregation pipelines, and scalability.",
      },
    ],
  },
  {
    title: "Frontend / Backend",
    skills: [
      {
        name: "HTML",
        icon: Code2,
        description:
          "Markup structure for web pages, semantic content tagging, and accessible layouts.",
      },
      {
        name: "CSS",
        icon: Code2,
        description:
          "Styling, responsive design, layout control, animations, theming, and utility-first approaches.",
      },
      {
        name: "JavaScript",
        icon: Sparkles,
        description:
          "Dynamic DOM manipulation, event handling, async programming, and modern ES syntax.",
      },
      {
        name: "Node.js",
        icon: Server,
        description:
          "Server-side JavaScript runtime for APIs, I/O-bound services, and full-stack architectures.",
      },
      {
        name: "Express.js",
        icon: Terminal,
        description:
          "Fast REST routes, middleware pipelines, and routing systems for backend applications.",
      },
      {
        name: "React.js",
        icon: LayoutGrid,
        description:
          "Component-driven front-end library with hooks, state management, and high-performance UI rendering.",
      },
      {
        name: "Mongoose",
        icon: Database,
        description:
          "ODM for MongoDB used for schema modeling, validation and easy database queries in Node.js.",
      },
      {
        name: "Bootstrap",
        icon: Box,
        description:
          "UI toolkit with responsive grid, components and utilities for fast design MVPs.",
      },
      {
        name: "Express Router",
        icon: GitBranch,
        description:
          "Route modularization strategy for better separation of API endpoints.",
      },
      {
        name: "Material UI",
        icon: Layers,
        description:
          "Component library with material design, theming system, and accessibility support.",
      },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      {
        name: "Machine Learning Algorithms",
        icon: Sparkles,
        description:
          "Foundational algorithms like regression, classification, clustering and model evaluation.",
      },
      {
        name: "Scikit-Learn",
        icon: Sparkles,
        description:
          "Python ML library for preprocessing, model selection and pipeline creation.",
      },
      {
        name: "NumPy",
        icon: Cpu,
        description:
          "Core numeric arrays, vectorized operations and linear algebra support for high-performance calculations.",
      },
      {
        name: "Pandas",
        icon: Database,
        description:
          "Dataframes and series operations for cleaning, transforming, and aggregating tabular data.",
      },
      {
        name: "Matplotlib",
        icon: LayoutGrid,
        description:
          "Plotting library for 2D charts, custom graphs, and visual data storytelling.",
      },
      {
        name: "Seaborn",
        icon: LayoutGrid,
        description:
          "Statistical visualization library built on Matplotlib for attractive, data-rich plots.",
      },
    ],
  },
  {
    title: "Tools / Platforms",
    skills: [
      {
        name: "Microsoft Fabric",
        icon: Wrench,
        description:
          "Integrated analytics platform for data engineering, warehousing, and business intelligence.",
      },
      {
        name: "PostgreSQL",
        icon: Database,
        description:
          "ACID-compliant relational database engine with advanced SQL and analytics support.",
      },
      {
        name: "MySQL",
        icon: Database,
        description:
          "High-performance RDBMS for typical web applications and scale.",
      },
      {
        name: "MS Excel",
        icon: Box,
        description:
          "Spreadsheet analysis, pivot tables and formula-based data insights.",
      },
      {
        name: "Power BI",
        icon: Box,
        description:
          "Business intelligence visualization and dashboards for reporting key metrics.",
      },
      {
        name: "Git",
        icon: GitBranch,
        description:
          "Distributed version control for source history, branching and merging workflows.",
      },
      {
        name: "GitHub",
        icon: GitBranch,
        description:
          "Collaborative code hosting for issues, PR reviews and CI/CD automation.",
      },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      {
        name: "Problem-Solving",
        icon: Users,
        description:
          "Analyze complex issues to produce structured, efficient and reliable solutions.",
      },
      {
        name: "Communication",
        icon: Users,
        description:
          "Clear technical and non-technical communication for team alignment and stakeholder updates.",
      },
      {
        name: "Team Collaboration",
        icon: Users,
        description:
          "Coordinating closely in agile teams to deliver features and resolve blockers.",
      },
      {
        name: "Time Management",
        icon: Users,
        description:
          "Balance multiple tasks, meet deadlines and plan sprints for high productivity.",
      },
      {
        name: "Adaptable",
        icon: Users,
        description:
          "Learn and adjust quickly to new tools, processes and business requirements.",
      },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative bg-surface/50">
      <SectionParticles count={12} />
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">
            <span className="gradient-text">Skill Set</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.15 }}
                className="glass-card p-6"
              >
                <h3 className="font-mono text-primary text-sm font-semibold mb-4 uppercase tracking-wider">
                  {cat.title}
                </h3>
                <TooltipProvider>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <Tooltip key={skill.name}>
                          <TooltipTrigger asChild>
                            <span
                              className="inline-flex cursor-help items-center gap-1 rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
                            >
                              <Icon size={12} className="text-primary" />
                              {skill.name}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs whitespace-normal text-left">
                            {skill.description}
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                </TooltipProvider>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
