import { motion } from "framer-motion";

const projects = [
  {
    file: "coffee-website.jsx",
    stat: "Responsive",
    category: "Website",
    title: "Coffee Shop Website",
    command: "npm run brew",
    description: "A beautifully designed coffee shop website with modern UI, smooth animations, and a cozy aesthetic that captures the essence of a premium coffee experience.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    file: "refokus-clone.jsx",
    stat: "Pixel Perfect",
    category: "Clone",
    title: "Refokus.com Clone",
    command: "npm run focus",
    description: "A detailed recreation of the Refokus website showcasing advanced animations, scroll-based effects, and creative layout techniques.",
    tags: ["React", "GSAP", "Tailwind"],
  },
  {
    file: "gym-website.jsx",
    stat: "Dynamic",
    category: "Fitness",
    title: "Gym & Fitness Website",
    command: "npm run train",
    description: "An energetic gym website featuring bold typography, dynamic layouts, and motivational design elements to inspire fitness enthusiasts.",
    tags: ["React", "CSS3", "Responsive"],
  },
  {
    file: "hoobank.jsx",
    stat: "Modern UI",
    category: "Fintech",
    title: "HooBank - Banking Website",
    command: "npm run bank",
    description: "A modern banking landing page with sleek gradients, glass morphism effects, and professional design suitable for fintech applications.",
    tags: ["React", "Tailwind CSS", "Vite"],
  },
  {
    file: "crowdfunding.jsx",
    stat: "Interactive",
    category: "Platform",
    title: "Crowdfunding Platform",
    command: "npm run fund",
    description: "A crowdfunding platform interface with campaign cards, progress trackers, and user-friendly navigation for backers and creators.",
    tags: ["React", "Tailwind", "Components"],
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-heading">{`import { Projects } from './portfolio'`}</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            // A showcase of my frontend development work
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card-glow rounded-2xl overflow-hidden hover-lift group cursor-pointer"
            >
              <div className="p-6">
                {/* File Name */}
                <p className="font-mono text-xs text-muted-foreground mb-4">
                  {project.file}
                </p>

                {/* Stat Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="badge-primary badge">{project.stat}</span>
                  <span className="text-xs text-muted-foreground">{project.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Command */}
                <p className="font-mono text-sm text-muted-foreground mb-4">
                  <span className="text-code-green">&gt; </span>
                  <span className="text-foreground">{project.command}</span>
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Coming Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-mono text-muted-foreground text-sm">
            <span className="text-code-green">// </span>
            More projects coming soon...
            <span className="typing-cursor ml-1">█</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
