import { motion } from "framer-motion";
import { SkillCard } from "@/components/SkillCard";

const frontendSkills = [
  { name: "React.js", value: 90, command: "npx create-react-app awesome", category: "Frontend" },
  { name: "Tailwind CSS", value: 92, command: "className='flex items-center'", category: "Frontend" },
  { name: "JavaScript", value: 88, command: "const future = await build()", category: "Language" },
  { name: "TypeScript", value: 80, command: "type Props = { magic: true }", category: "Language" },
];

const backendSkills = [
  { name: "Node.js", value: 75, command: "node server.js --production", category: "Backend" },
  { name: "Express.js", value: 72, command: "app.listen(3000)", category: "Backend" },
  { name: "MongoDB", value: 70, command: "db.collection.find({})", category: "Database" },
  { name: "REST APIs", value: 78, command: "GET /api/users/:id", category: "Backend" },
];

const otherSkills = [
  { name: "Git & GitHub", value: 85, command: "git push origin main", category: "Tools" },
  { name: "Responsive Design", value: 95, command: "@media (min-width: 768px)", category: "Design" },
  { name: "HTML5 & CSS3", value: 93, command: "<section>semantic</section>", category: "Markup" },
  { name: "Figma", value: 65, command: "Design → Code", category: "Design" },
];

const stats = [
  { value: "5+", label: "Projects" },
  { value: "6+", label: "Technologies" },
  { value: "React", label: "Specialist" },
  { value: "100%", label: "Dedication" },
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
          <p className="section-heading">&lt;Tech Stack/&gt;</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The tools and technologies I use to build modern web experiences
          </h2>
          <p className="font-mono text-sm text-muted-foreground">skills.jsx — anish.dev</p>
        </motion.div>

        {/* Frontend Skills */}
        <h3 className="text-xl font-semibold text-foreground mb-4 font-mono">
          <span className="text-primary">&lt;</span>Frontend<span className="text-primary">/&gt;</span>
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {frontendSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Backend Skills */}
        <h3 className="text-xl font-semibold text-foreground mb-4 font-mono">
          <span className="text-primary">&lt;</span>Backend<span className="text-primary">/&gt;</span>
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {backendSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Other Skills */}
        <h3 className="text-xl font-semibold text-foreground mb-4 font-mono">
          <span className="text-primary">&lt;</span>Tools & Design<span className="text-primary">/&gt;</span>
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {otherSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
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
          <p className="text-code-green mt-2">✓ All 12 skills loaded successfully</p>
          <p className="text-muted-foreground">→ Full-stack ready: Frontend + Backend</p>
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
