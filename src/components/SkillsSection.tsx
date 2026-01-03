import { motion } from "framer-motion";

const skills = [
  { name: "Python", value: 95, command: "import automation as magic", category: "Language" },
  { name: "Scrapy", value: 93, command: "scrapy crawl infinite_data", category: "Scraping" },
  { name: "Selenium", value: 90, command: "driver.execute('dreams')", category: "Automation" },
  { name: "Pandas", value: 92, command: "df.transform(chaos, order)", category: "Data" },
  { name: "Django", value: 88, command: "views.deploy(production)", category: "Backend" },
  { name: "TensorFlow", value: 85, command: "model.predict(future)", category: "ML/AI" },
  { name: "PostgreSQL", value: 87, command: "SELECT * FROM success", category: "Database" },
  { name: "APIs", value: 91, command: "REST.connect(everything)", category: "Integration" },
];

const stats = [
  { value: "5+", label: "Languages" },
  { value: "8+", label: "Frameworks" },
  { value: "1500+", label: "Projects" },
  { value: "5+ yrs", label: "Experience" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-heading">&lt;Tech Arsenal/&gt;</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The tools and technologies I use to transform ideas into powerful automations
          </h2>
          <p className="font-mono text-sm text-muted-foreground">skills.py — kawsarlog</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card-glow p-6 rounded-xl hover-lift group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
                <span className="text-xl font-bold text-primary">{skill.value}%</span>
              </div>
              
              <p className="font-mono text-xs text-muted-foreground mb-4">
                <span className="text-code-green">$ </span>
                {skill.command}
              </p>

              <div className="skill-bar mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="skill-bar-fill"
                />
              </div>

              <span className="badge-primary badge">{skill.category}</span>
            </motion.div>
          ))}
        </div>

        {/* Terminal Output */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-4 rounded-xl font-mono text-sm mb-12"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-code-green">$</span>
            <span>npm run skill-check</span>
          </div>
          <p className="text-code-green mt-2">✓ All 8 skills loaded successfully</p>
          <p className="text-muted-foreground">→ Ready to automate the impossible</p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl text-center"
            >
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
