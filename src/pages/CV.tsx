import { motion } from "framer-motion";
import { Download, Mail, MapPin, Github, Linkedin, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const CV = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-lg font-bold text-primary font-mono">
            &lt;Anish/&gt;
          </Link>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-background border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Download size={16} />
            Download CV
          </button>
        </div>
      </header>

      {/* CV Content */}
      <main className="container mx-auto px-4 pt-24 pb-12 max-w-4xl print:pt-8 print:max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-8 print:shadow-none print:border-none"
        >
          {/* Header Section */}
          <div className="text-center mb-8 pb-8 border-b border-border">
            <h1 className="text-4xl font-bold text-foreground mb-2">Anish Guragain</h1>
            <p className="text-xl text-primary font-medium mb-4">Frontend Developer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                Nepal
              </span>
              <a href="mailto:anishguragain@example.com" className="flex items-center gap-1 hover:text-primary">
                <Mail size={14} />
                anishguragain@example.com
              </a>
              <a href="https://github.com/anishguragain" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary">
                <Github size={14} />
                github.com/anishguragain
              </a>
              <a href="https://linkedin.com/in/anish-guragain-52867a319" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary">
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-primary">//</span> Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Passionate Frontend Developer specializing in React.js and Tailwind CSS with a strong foundation in modern web technologies. 
              Dedicated to creating responsive, user-friendly interfaces with clean code and attention to detail. 
              Currently expanding skills into backend development with Node.js and MongoDB.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-primary">//</span> Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"].map((skill) => (
                    <span key={skill} className="badge-primary badge text-xs">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Backend & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "MongoDB", "REST APIs", "Backend", "Database", "Git", "GitHub"].map((skill) => (
                    <span key={skill} className="badge text-xs">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-primary">//</span> Projects
            </h2>
            <div className="space-y-4">
              <ProjectItem
                title="Coffee Shop Website"
                tech="React, Tailwind CSS, Framer Motion"
                description="A responsive coffee shop website featuring modern UI design, smooth animations, and mobile-first approach."
              />
              <ProjectItem
                title="Refokus.com Clone"
                tech="React, GSAP, Tailwind CSS"
                description="Pixel-perfect recreation of Refokus website with advanced scroll-based animations and creative layouts."
              />
              <ProjectItem
                title="Gym & Fitness Website"
                tech="React, CSS3"
                description="Dynamic fitness website with bold typography, energetic design, and responsive layouts."
              />
              <ProjectItem
                title="HooBank - Banking Website"
                tech="React, Tailwind CSS, Vite"
                description="Modern fintech landing page featuring glass morphism effects and professional design."
              />
              <ProjectItem
                title="Crowdfunding Platform"
                tech="React, Tailwind CSS"
                description="Interactive crowdfunding platform with campaign cards, progress trackers, and user-friendly navigation."
              />
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-primary">//</span> Education
            </h2>
            <div className="glass-card p-4 rounded-lg">
              <h3 className="font-semibold text-foreground">Self-Taught Developer</h3>
              <p className="text-sm text-muted-foreground">Online Courses, YouTube, Documentation</p>
              <p className="text-sm text-muted-foreground mt-2">
                Continuously learning through platforms like freeCodeCamp, Udemy, and official documentation.
              </p>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-primary">//</span> Languages
            </h2>
            <div className="flex gap-4">
              <span className="badge">English</span>
              <span className="badge">Nepali (Native)</span>
            </div>
          </section>
        </motion.div>

        {/* Back to Portfolio */}
        <div className="text-center mt-8 print:hidden">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline font-mono text-sm"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </main>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { background: white !important; }
          .glass-card { background: white !important; backdrop-filter: none !important; }
          .badge, .badge-primary { background: #f3f4f6 !important; color: #374151 !important; }
        }
      `}</style>
    </div>
  );
};

const ProjectItem = ({ title, tech, description }: { title: string; tech: string; description: string }) => (
  <div className="glass-card p-4 rounded-lg">
    <div className="flex justify-between items-start mb-1">
      <h3 className="font-semibold text-foreground">{title}</h3>
    </div>
    <p className="text-xs text-primary mb-2">{tech}</p>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default CV;
