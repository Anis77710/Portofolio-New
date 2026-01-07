import { motion } from "framer-motion";

interface SkillCardProps {
  skill: {
    name: string;
    value: number;
    command: string;
    category: string;
    icon?: string;
  };
  index: number;
}

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card-glow p-6 rounded-xl hover-lift group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          {skill.icon && (
            <span className="text-xl" style={{ filter: "drop-shadow(0 0 4px hsl(var(--primary) / 0.5))" }}>
              {skill.icon}
            </span>
          )}
          <h3 className="font-semibold text-foreground">{skill.name}</h3>
        </div>
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
  );
};
