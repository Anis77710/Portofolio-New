import { motion } from "framer-motion";
import { Download, Github, Linkedin, Twitter } from "lucide-react";
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
                <span className="text-code-purple">def</span>
                <span className="text-code-yellow"> about_me</span>
                <span className="text-muted-foreground">():</span>
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Python Developer & Data Enthusiast
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono mb-4">developer.py</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  From building custom web scrapers that collect millions of data points to creating 
                  automated workflows that save hundreds of hours, I turn complex data challenges 
                  into elegant solutions.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="border-border hover:bg-secondary gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                </div>

                <div className="flex gap-4 pt-4">
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
              </div>

              <p className="mt-8 text-sm">
                <span className="text-code-purple">return</span>
                <span className="text-code-green ml-2">"Let's build something amazing!"</span>
              </p>
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
              <p className="text-sm text-muted-foreground font-mono mb-4">skills.py</p>
              <p className="text-muted-foreground mb-6">
                <span className="text-code-purple">class</span>
                <span className="text-code-yellow"> TechnicalSkills</span>
                <span className="text-muted-foreground">:</span>
              </p>

              <div className="space-y-5">
                {[
                  { name: "Python & Automation", var: "python_skills", value: 95 },
                  { name: "Web Scraping (Scrapy, Selenium)", var: "scraping_exp", value: 93 },
                  { name: "Data Science & Analytics", var: "data_science", value: 88 },
                  { name: "Machine Learning", var: "ml_expertise", value: 82 },
                  { name: "Django & Flask", var: "web_frameworks", value: 85 },
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
                        <span className="text-foreground">self.</span>
                        <span className="text-code-orange">{skill.var}</span>
                        <span className="text-muted-foreground"> = </span>
                        <span className="text-primary">{skill.value}%</span>
                      </code>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2 font-mono"># {skill.name}</p>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
