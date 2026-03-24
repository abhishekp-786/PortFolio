import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Medal, Star, Award, Zap, Target, Code2 } from "lucide-react";
import SectionParticles from "./SectionParticles";

const achievements = [
  {
    title: "Gold Medal in Scouting",
    organization: "MG Inter College",
    year: "2024",
    description: "Achieved gold medal recognition in scouting activities for outstanding service and leadership",
    icon: Trophy,
    category: "Sports",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Top 10 Team - Agentic Bug Hunter",
    organization: "Infineon Hackathon",
    year: "2024",
    description: "Ranked in top 10 teams in the Agentic Bug Hunter hackathon competition hosted by Infineon",
    icon: Medal,
    category: "Hackathon",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "100 Days Badge",
    organization: "LeetCode",
    year: "2024",
    description: "Consistent problem-solving streak of 100 consecutive days on LeetCode platform",
    icon: Star,
    category: "Consistency",
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Current CGPA: 8.61",
    organization: "Academic Excellence",
    year: "2024",
    description: "Maintaining strong academic performance with consistent higher grades across semesters",
    icon: Award,
    category: "Academic",
    color: "from-green-400 to-green-600",
  },
];

const currentProjects = [
  {
    title: "Capstone Data Science Project",
    description: "Building end-to-end data science solution with Power BI dashboards and ML models",
    icon: Code2,
    color: "from-purple-400 to-pink-400",
  },
  {
    title: "Continuous Learning",
    description: "Regularly learning new technologies, frameworks, and staying updated with industry trends",
    icon: Zap,
    color: "from-cyan-400 to-blue-400",
  },
  {
    title: "Core Revision",
    description: "Strengthening fundamentals in DSA, DBMS, OS, and system design concepts",
    icon: Target,
    color: "from-rose-400 to-pink-400",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="relative py-20 bg-background">
      <SectionParticles count={15} />
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Milestones & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key achievements, awards, and ongoing projects that showcase my dedication
            to excellence, continuous learning, and technical growth.
          </p>
        </motion.div>

        {/* Main Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-xl border border-purple-400/20 hover:border-pink-400/50 transition-all duration-300`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Card Content */}
              <div className="relative p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${achievement.color} text-white shadow-lg`}>
                    <achievement.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white mb-1">{achievement.title}</h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      {achievement.organization}
                    </p>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white whitespace-nowrap`}>
                    {achievement.category}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-2">{achievement.description}</p>
                <p className="text-xs text-purple-400 font-medium">{achievement.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Projects/Activities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-purple-400/20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Current Focus Areas</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-purple-400/20 hover:border-pink-400/50 transition-all duration-300 p-6 bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm hover:shadow-xl"
              >
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
                
                <div className="relative">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} text-white mb-4 w-fit`}>
                    <project.icon size={24} />
                  </div>
                  <h4 className="font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 p-8 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"><a href="https://codolio.com/profile/abhi-abhishek">Codolio</a></p>
              <p className="text-sm text-gray-300 mt-2">Current CGPA</p>
            </div>
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent"><a href="https://leetcode.com/u/Abhishek-Kumar-Prajapati/">100+</a></p>
              <p className="text-sm text-gray-300 mt-2">LeetCode Days Streak</p>
            </div>
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Always</p>
              <p className="text-sm text-gray-300 mt-2">Continuous Learning</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;