import { motion } from "framer-motion";

const projects = [
  {
    file: "project_1.py",
    stat: "50K+ listings",
    category: "API Development",
    title: "Real Estate API Platform",
    command: "api.get('/properties')",
    description: "Complete REST API for property listings, agent management, and automated valuation models with ML-powered price predictions.",
    tags: ["FastAPI", "PostgreSQL", "Redis"],
  },
  {
    file: "project_2.py",
    stat: "1M+ posts analyzed",
    category: "Data Analytics",
    title: "Social Media Analytics Dashboard",
    command: "analyze_sentiment(posts)",
    description: "Real-time sentiment analysis and engagement tracking across Twitter, Instagram, and LinkedIn with automated reporting.",
    tags: ["Python", "Plotly", "NLP"],
  },
  {
    file: "project_3.py",
    stat: "2M products tracked",
    category: "Web Scraping",
    title: "E-commerce Price Intelligence",
    command: "scraper.crawl(urls)",
    description: "Automated competitor price monitoring across 500+ retailers with dynamic pricing recommendations.",
    tags: ["Scrapy", "MongoDB", "Celery"],
  },
  {
    file: "project_4.py",
    stat: "10K+ hires facilitated",
    category: "Automation",
    title: "HR Recruitment Automation",
    command: "match_candidates(job)",
    description: "AI-powered resume screening, candidate matching, and interview scheduling system with LinkedIn integration.",
    tags: ["Django", "OpenAI", "Selenium"],
  },
  {
    file: "project_5.py",
    stat: "5M records/day",
    category: "Data Engineering",
    title: "Healthcare Data Pipeline",
    command: "pipeline.run(batch)",
    description: "HIPAA-compliant ETL system processing patient records, lab results, and insurance claims for analytics.",
    tags: ["Airflow", "Spark", "AWS"],
  },
  {
    file: "project_6.py",
    stat: "100+ providers",
    category: "API Development",
    title: "Travel Booking Aggregator",
    command: "await fetch_prices()",
    description: "Multi-source flight and hotel comparison API aggregating prices from 100+ travel providers in real-time.",
    tags: ["FastAPI", "AsyncIO", "GraphQL"],
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
          <p className="section-heading">`from portfolio import *`</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            # A collection of projects spanning automation, data engineering, and AI
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
                  <span className="text-code-green">&gt;&gt;&gt; </span>
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
            <span className="text-code-green"># </span>
            More projects coming soon...
            <span className="typing-cursor ml-1">█</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
