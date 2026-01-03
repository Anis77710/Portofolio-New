import { motion } from "framer-motion";
import { Terminal, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">MD Kawsar</h3>
              <p className="text-xs text-muted-foreground font-mono">Python Developer</p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} kawsarlog. Built with{" "}
            <span className="text-primary">Python</span> &{" "}
            <span className="text-code-green">Coffee</span>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kawsarlog"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/kawsarlog"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="https://twitter.com/kawsarlog"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
            >
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
