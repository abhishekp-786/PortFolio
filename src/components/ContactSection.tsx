import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, Github, Linkedin, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  console.log("Sending email...");

  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then((response) => {
    console.log("SUCCESS:", response);
    setSent(true);
    setLoading(false);
    setForm({ name: "", email: "", message: "" });
  })
  .catch((error) => {
    console.log("FAILED:", error);
    setLoading(false);
  });
};

  return (
    <section id="contact" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
          </p>

          <div className="grid md:grid-cols-2 gap-12">

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                {loading ? "Sending..." : sent ? "Message Sent! ✓" : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* CONTACT INFO */}
            <div className="space-y-6">
              <div className="glass-card p-6 space-y-5">

                {/* EMAIL (GMAIL DIRECT OPEN) */}
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=prajapatiabhishekkumar15@gmail.com&su=Let's%20Connect&body=Hi%20Abhishek,%20I%20visited%20your%20portfolio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      prajapatiabhishekkumar15@gmail.com
                    </p>
                  </div>
                </a>

                {/* GITHUB */}
                <a 
                  href="https://github.com/abhishekp-786" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">GitHub</p>
                  </div>
                </a>

                {/* LINKEDIN */}
                <a 
                  href="https://www.linkedin.com/in/abhishek-kumar-prajapati-10979724b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">LinkedIn</p>
                  </div>
                </a>

                {/* LOCATION */}
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-sm">Kushinagar, India</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;