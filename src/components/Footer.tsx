import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="fixed bottom-0 left-0 right-0 border-t border-border bg-card/95 backdrop-blur-md z-40">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Built with</span>
          <Heart size={14} className="text-primary" />
          <span>by</span>
          <span className="font-mono text-foreground">Abhishek Kumar Prajapati</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/abhishekp-786" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-kumar-prajapati-10979724b/" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=prajapatiabhishekkumar15@gmail.com&su=Let's%20Connect&body=Hi%20Abhishek,%20I%20visited%20your%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
          >
            <Mail size={20} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
