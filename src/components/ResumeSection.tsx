import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import { Button } from "./ui/button";
import SectionParticles from "./SectionParticles";

const ResumeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const resumeUrl = "/assets/Abhishek_Kumar_Resume.pdf";
  const resumeName = "Abhishek_Kumar_Resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = resumeName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="relative py-20 bg-secondary/20">
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
              My Resume
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              View & Download My <span className="gradient-text">Resume</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out my professional background, experience, and skills.
            </p>
          </div>

          {/* Resume Display & Actions */}
          <div className="grid md:grid-cols-4 gap-8 items-start">
            {/* Resume Image Preview - LARGE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-3"
            >
              <div className="glass-card p-4 rounded-lg border border-border hover:shadow-xl transition-shadow flex flex-col items-center justify-center">
                <iframe
                  src={resumeUrl}
                  title="Resume Preview"
                  className="w-full max-w-2xl h-[500px] border-0 rounded-lg bg-white shadow-lg"
                  style={{ display: "block" }}
                />
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Click the buttons on the right to view or download my resume
                </p>
              </div>
            </motion.div>

            {/* Actions Sidebar - LARGE BUTTONS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
            >
              {/* View Resume Button */}
              <Button
                onClick={() => window.open(resumeUrl, '_blank')}
                className="w-full h-24 flex flex-col items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-bold rounded-xl"
              >
                <Eye size={32} />
                <span>View</span>
                <span className="text-xs font-normal opacity-90">
                  Resume
                </span>
              </Button>

              {/* Download Button */}
              <Button
                onClick={handleDownload}
                variant="outline"
                className="w-full h-24 flex flex-col items-center justify-center gap-3 text-base font-bold rounded-xl border-2"
              >
                <Download size={32} />
                <span>Download</span>
                <span className="text-xs font-normal opacity-90">
                  PDF
                </span>
              </Button>

              {/* Resume Info Card */}
              <div className="glass-card p-5 rounded-xl border border-border space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <FileText className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground truncate max-w-[180px]" title={resumeName}>
                      {resumeName}
                    </p>
                    <p className="text-xs text-muted-foreground">PDF Document</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-muted-foreground text-xs">
                      View online
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-muted-foreground text-xs">
                      Quick download
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-muted-foreground text-xs">
                      Professional format
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-4"
          >
            <div className="glass-card p-4 text-center rounded-lg border border-border">
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Fresher
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Open to Work
              </p>
            </div>
            <div className="glass-card p-4 text-center rounded-lg border border-border">
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                5+
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Certifications
              </p>
            </div>
            <div className="glass-card p-4 text-center rounded-lg border border-border">
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                10+
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Projects Completed
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
