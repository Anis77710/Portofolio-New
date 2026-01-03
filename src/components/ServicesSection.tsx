import { motion } from "framer-motion";
import { Bot, Database, BarChart3, Brain, Server, GitBranch } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Web Automation",
    file: "web_automation.py",
    func: "automate_task()",
    description: "Automate repetitive tasks, form submissions, and data entry with Python scripts that run 24/7.",
    returnVal: 'success=True',
    tags: ["Selenium", "Puppeteer", "Playwright"],
  },
  {
    icon: Database,
    title: "Data Scraping",
    file: "data_scraping.py",
    func: "scrape_data()",
    description: "Extract valuable data from any website at scale. From e-commerce to social media, I handle it all.",
    returnVal: '1M+ records',
    tags: ["Scrapy", "BeautifulSoup", "APIs"],
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    file: "data_analysis.py",
    func: "analyze()",
    description: "Transform raw data into actionable insights with advanced analytics and visualization.",
    returnVal: 'insights[]',
    tags: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    file: "machine_learning.py",
    func: "train_model()",
    description: "Build predictive models and AI solutions to automate decision-making and find patterns.",
    returnVal: 'accuracy=99%',
    tags: ["TensorFlow", "Scikit-learn", "PyTorch"],
  },
  {
    icon: Server,
    title: "API Development",
    file: "api_development.py",
    func: "create_api()",
    description: "Create robust REST APIs and backend services to power your applications.",
    returnVal: 'status=200',
    tags: ["Django", "Flask", "FastAPI"],
  },
  {
    icon: GitBranch,
    title: "ETL Pipelines",
    file: "etl_pipelines.py",
    func: "run_pipeline()",
    description: "Design and implement data pipelines that extract, transform, and load data efficiently.",
    returnVal: 'complete ✓',
    tags: ["Airflow", "Luigi", "dbt"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-heading">`class Services:`</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What I Build
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            # Turning complex problems into elegant solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card-glow rounded-2xl overflow-hidden hover-lift group"
            >
              <div className="p-6">
                {/* File Name */}
                <p className="font-mono text-xs text-muted-foreground mb-4">
                  {service.file}
                </p>

                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>

                {/* Function */}
                <p className="font-mono text-sm text-code-purple mb-4">
                  <span className="text-muted-foreground">`def </span>
                  <span className="text-code-yellow">{service.func}</span>
                  <span className="text-muted-foreground">`</span>
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Return Value */}
                <p className="font-mono text-xs mb-4">
                  <span className="text-code-purple">return</span>
                  <span className="text-code-green ml-2">"{service.returnVal}"</span>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
