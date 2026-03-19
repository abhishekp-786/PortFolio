import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Built with</span>
          <Heart size={14} className="text-primary" />
          <span>by</span>
          <span className="font-mono text-foreground">Abhishek Kumar Prajapati</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:abhishek@example.com"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
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
