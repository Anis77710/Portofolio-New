import { motion } from "framer-motion";
import { ArrowRight, MapPin, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalWindow } from "./TerminalWindow";

const skills = ["Python", "Scrapy", "Pandas", "Selenium", "Django", "TensorFlow"];

const stats = [
  { icon: Code2, value: "1500+", label: "Projects" },
  { icon: Zap, value: "950+", label: "Clients" },
];

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border/50 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-code-green animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Available for <span className="text-primary font-medium">freelance</span> work
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              I'm MD Kawsar
              <br />
              <span className="text-gradient glow-text">Python</span> Developer
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0"
            >
              I transform complex data challenges into{" "}
              <span className="text-foreground font-medium">elegant automation solutions</span>{" "}
              that scale your business.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground mb-8"
            >
              <MapPin className="w-4 h-4 text-code-green" />
              <span>Based in Dhaka, Bangladesh</span>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
            >
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="badge"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-medium group"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary font-medium"
              >
                View Projects
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary border border-border/50 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <TerminalWindow />

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 -right-4 glass-card px-4 py-3 rounded-lg"
            >
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-xs text-muted-foreground">Automations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-card px-4 py-3 rounded-lg"
            >
              <p className="text-2xl font-bold text-code-green">99.9%</p>
              <p className="text-xs text-muted-foreground">Success Rate</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
