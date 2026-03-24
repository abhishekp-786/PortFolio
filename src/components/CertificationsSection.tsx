import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Award, Download } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import SectionParticles from "./SectionParticles";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  fileName: string;
}

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const certifications: Certification[] = [
    {
      id: "data-science",
      title: "Data Science",
      issuer: "Coursera",
      date: "2024",
      fileName: "DataScienceCert.pdf",
    },
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      issuer: "Online Course",
      date: "2024",
      fileName: "DSACert.pdf",
    },
    {
      id: "ml",
      title: "Introduction to Machine Learning",
      issuer: "Coursera",
      date: "2023",
      fileName: "introToMl.pdf",
    },
    {
      id: "power-bi",
      title: "Power BI",
      issuer: "Microsoft",
      date: "2024",
      fileName: "PowerBIcert.pdf",
    },
    {
      id: "sql",
      title: "SQL Fundamentals",
      issuer: "DataCamp",
      date: "2023",
      fileName: "SQLCert.pdf",
    },
  ];

  const handleDownload = (fileName: string, title: string) => {
    const link = document.createElement("a");
    link.href = `/assets/certificates/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certifications" className="relative py-20 bg-background">
      <SectionParticles count={12} />
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <p className="font-mono text-primary text-sm tracking-widest uppercase">
              My Credentials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Professional <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Certifications and credentials from industry-leading organizations.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Award className="text-primary" size={24} />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  {cert.date}
                </p>

                {/* View and Download Buttons */}
                <div className="space-y-2">
                  <Button
                    onClick={() => window.open(`/assets/certificates/${cert.fileName}`, '_blank')}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg py-2"
                  >
                    <Eye size={18} />
                    View Certificate
                  </Button>

                  <Button
                    onClick={() => handleDownload(cert.fileName, cert.title)}
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 font-bold rounded-lg py-2 border-2"
                  >
                    <Download size={18} />
                    Download
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
