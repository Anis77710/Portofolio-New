import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Code Display */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="code-block">
              <p className="text-muted-foreground mb-4">
                <span className="text-code-purple">const</span>
                <span className="text-code-yellow"> aboutMe</span>
                <span className="text-muted-foreground"> = () =&gt; {"{"}</span>
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Frontend Developer & UI Enthusiast
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono mb-4">about.jsx</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about creating beautiful, responsive, and user-friendly 
                  web applications. I love turning designs into pixel-perfect interfaces 
                  using React and modern CSS frameworks like Tailwind.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="border-border hover:bg-secondary gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href="https://github.com/anishguragain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a
                    href="https://linkedin.com/in/anish-guragain-52867a319"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </div>

              <p className="mt-8 text-sm">
                <span className="text-code-purple">return</span>
                <span className="text-code-green ml-2">"Let's build something amazing!"</span>
              </p>
              <p className="text-muted-foreground">{"}"}</p>
            </div>
          </motion.div>

          {/* Right - Skills Progress */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-xl">
              <p className="text-sm text-muted-foreground font-mono mb-4">skills.js</p>
              <p className="text-muted-foreground mb-6">
                <span className="text-code-purple">const</span>
                <span className="text-code-yellow"> technicalSkills</span>
                <span className="text-muted-foreground"> = {"{"}</span>
              </p>

              <div className="space-y-5">
                {[
                  { name: "React.js & Component Design", var: "react", value: 90 },
                  { name: "Tailwind CSS & Styling", var: "tailwind", value: 92 },
                  { name: "JavaScript (ES6+)", var: "javascript", value: 88 },
                  { name: "Responsive Design", var: "responsive", value: 95 },
                  { name: "HTML5 & CSS3", var: "htmlCss", value: 93 },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <code className="text-sm">
                        <span className="text-code-orange">{skill.var}</span>
                        <span className="text-muted-foreground">: </span>
                        <span className="text-primary">{skill.value}%</span>
                      </code>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2 font-mono">// {skill.name}</p>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="skill-bar-fill"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-muted-foreground mt-4">{"}"}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
