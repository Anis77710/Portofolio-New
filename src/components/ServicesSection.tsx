import { motion } from "framer-motion";
import { Layout, Palette, Smartphone, Zap, Code2, Layers } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "UI Development",
    file: "ui-development.jsx",
    func: "buildInterface()",
    description: "Creating beautiful, intuitive user interfaces with React components that are reusable and maintainable.",
    returnVal: "<Component />",
    tags: ["React", "JSX", "Components"],
  },
  {
    icon: Palette,
    title: "Responsive Styling",
    file: "styling.css",
    func: "applyStyles()",
    description: "Crafting pixel-perfect designs using Tailwind CSS with modern utilities and custom configurations.",
    returnVal: "styled ✓",
    tags: ["Tailwind", "CSS3", "Flexbox"],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    file: "responsive.jsx",
    func: "adaptLayout()",
    description: "Building websites that look stunning on every device, from mobile phones to large desktop screens.",
    returnVal: "responsive",
    tags: ["Mobile", "Tablet", "Desktop"],
  },
  {
    icon: Zap,
    title: "Performance",
    file: "optimize.js",
    func: "boost()",
    description: "Optimizing web applications for speed with lazy loading, code splitting, and best practices.",
    returnVal: "fast ⚡",
    tags: ["Optimization", "Speed", "UX"],
  },
  {
    icon: Code2,
    title: "Clean Code",
    file: "code.js",
    func: "writeClean()",
    description: "Writing maintainable, readable code following best practices and modern JavaScript standards.",
    returnVal: "readable",
    tags: ["ES6+", "Best Practices", "DRY"],
  },
  {
    icon: Layers,
    title: "Component Design",
    file: "components.jsx",
    func: "compose()",
    description: "Designing modular, reusable component systems that scale with your application needs.",
    returnVal: "modular",
    tags: ["Atomic Design", "Reusability", "Props"],
  },
  {
    icon: Code2,
    title: "API Development",
    file: "api.js",
    func: "buildAPI()",
    description: "Creating RESTful APIs with Node.js and Express to power web applications with robust backends.",
    returnVal: "endpoints",
    tags: ["REST", "Node.js", "Express"],
  },
  {
    icon: Layout,
    title: "Database Design",
    file: "database.js",
    func: "queryDB()",
    description: "Designing efficient database schemas and queries with MongoDB for scalable data management.",
    returnVal: "data ✓",
    tags: ["MongoDB", "NoSQL", "CRUD"],
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
          <p className="section-heading">{`const Services = () =>`}</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What I Build
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            // Turning designs into responsive, interactive experiences
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
                  <span className="text-muted-foreground">{`const `}</span>
                  <span className="text-code-yellow">{service.func}</span>
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
