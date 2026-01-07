import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const techQuotes = [
  "Code is poetry written in logic",
  "First, solve the problem. Then, write the code",
  "Simplicity is the soul of efficiency",
  "Make it work, make it right, make it fast",
  "Clean code always looks like it was written by someone who cares",
  "The best error message is the one that never shows up",
  "Code never lies, comments sometimes do",
  "Programming is thinking, not typing",
  "Debugging is like being a detective in a crime movie",
  "Every great developer you know got there by solving problems",
];

const routes = ["Home", "About", "Services", "Portfolio", "Contact"];

export const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState("");

  useEffect(() => {
    const randomQuote = techQuotes[Math.floor(Math.random() * techQuotes.length)];
    setCurrentQuote(randomQuote);
  }, []);

  const scrollToSection = (route: string) => {
    const sectionId = route.toLowerCase();
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-16 border-t border-border/50 relative overflow-hidden">
      {/* Background code effect */}
      <div className="absolute inset-0 opacity-5 font-mono text-xs overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="text-primary whitespace-nowrap">
            footer(): return "© 2026" # line {i + 1}
          </p>
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Developer Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">⟩_ __init__.jsx</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <p className="text-code-purple">class <span className="text-code-yellow">Developer</span>:</p>
              <p className="ml-4 text-muted-foreground">name = <span className="text-code-green">"Anish Guragain"</span></p>
              <p className="ml-4 text-muted-foreground">role = <span className="text-code-green">"Frontend Developer"</span></p>
              <p className="ml-4 text-muted-foreground">status = <span className="text-code-green">"Available"</span></p>
            </div>
            <div className="px-4 pb-4">
              <p className="text-muted-foreground font-mono text-sm">
                <span className="text-code-yellow">#</span> Building modern web experiences
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">{"</>"} navigation.jsx</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <p className="text-code-purple">routes = [</p>
              {routes.map((route, index) => (
                <p key={route} className="ml-4">
                  <span className="text-muted-foreground">{index + 1}. </span>
                  <button
                    onClick={() => scrollToSection(route)}
                    className="text-code-green hover:text-primary transition-colors cursor-pointer"
                  >
                    "{route}"
                  </button>
                  <span className="text-muted-foreground">,</span>
                </p>
              ))}
              <p className="text-code-purple">]</p>
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">⟩_ connect.jsx</span>
            </div>
            <div className="p-4">
              <p className="text-muted-foreground font-mono text-sm mb-4">
                <span className="text-code-yellow">#</span> Run to connect
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/anishguragain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
                >
                  <Github className="w-5 h-5 text-muted-foreground" />
                </a>
                <a
                  href="https://linkedin.com/in/anish-guragain-52867a319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-muted-foreground" />
                </a>
                <a
                  href="mailto:anish@example.com"
                  className="w-12 h-12 rounded-xl bg-secondary border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
                >
                  <Mail className="w-5 h-5 text-muted-foreground" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/30"
        >
          <p className="text-sm text-muted-foreground font-mono flex items-center gap-2">
            <span className="text-primary">→</span>
            ~/anish © {new Date().getFullYear()}
          </p>
          <p className="text-sm text-code-yellow font-mono">
            <span className="text-muted-foreground">$ echo</span> "{currentQuote}"
            <span className="animate-pulse">▌</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
