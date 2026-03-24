import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight, Code2, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import SectionParticles from "./SectionParticles";

const internships = [
  {
    title: "AI/ML Internship",
    company: "AICTE - Adenet Foundation in collaboration with IBM SkillsBuild",
    duration: "10 Dec 2025 - 11 Jan 2026",
    location: "Remote",
    description:
      "Implemented ETL pipelines, optimized SQL queries, and built dashboard data ingestion workflows.",
    imageUrl: "/assets/internships/aimlCert.png",
    highlights: ["ETL Pipelines", "SQL Optimization", "Data Dashboards"],
  },
];

const InternshipsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="internships" className="relative py-20 bg-gradient-to-b from-surface/50 to-transparent">
      <SectionParticles count={12} />
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/60"></div>
            <p className="font-mono text-primary text-sm tracking-widest uppercase">Experience</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            <span className="gradient-text">Internships</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Hands-on experience working on real-world projects and building practical skills
            in data engineering, analytics, and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {internships.map((intern, index) => (
            <motion.div
              key={intern.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Image Section */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="lg:col-span-1"
                >
                  <div className="relative overflow-hidden rounded-xl border border-border bg-card p-4 h-48 flex items-center justify-center group">
                    <img
                      src={intern.imageUrl}
                      alt={`${intern.title} badge`}
                      className="h-40 w-40 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="lg:col-span-2">
                  <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-primary/50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase size={20} className="text-primary" />
                          <h3 className="text-2xl font-bold text-foreground">{intern.title}</h3>
                        </div>
                        <p className="text-lg text-primary font-semibold">{intern.company}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={16} className="text-primary" />
                        <span>{intern.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={16} className="text-primary" />
                        <span>{intern.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {intern.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {intern.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                        >
                          <Code2 size={12} />
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* View Certificate Button */}
                    <div className="mb-4">
                      <Button
                        onClick={() => window.open(intern.imageUrl, '_blank')}
                        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg py-2"
                      >
                        <Eye size={18} />
                        View Certificate
                      </Button>
                    </div>

                    {/* <div className="flex items-center gap-2 text-primary hover:gap-3 transition-all cursor-pointer group">
                      <span className="font-medium">View Details</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Timeline connector - hidden on mobile */}
              {index < internships.length - 1 && (
                <div className="hidden lg:flex absolute -bottom-12 left-1/3 w-1 h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
