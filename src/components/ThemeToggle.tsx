import { motion } from "framer-motion";
import { Moon, Sun, Waves, Flame } from "lucide-react";
import { useBackgroundTheme, BackgroundTheme } from "@/contexts/BackgroundThemeContext";

const themes: { id: BackgroundTheme; icon: React.ElementType; color: string; label: string }[] = [
  { id: "midnight", icon: Moon, color: "hsl(174 100% 42%)", label: "Midnight (Cyan)" },
  { id: "aurora", icon: Sun, color: "hsl(160 100% 45%)", label: "Aurora (Green)" },
  { id: "sunset", icon: Flame, color: "hsl(25 100% 55%)", label: "Sunset (Orange)" },
  { id: "ocean", icon: Waves, color: "hsl(270 100% 60%)", label: "Ocean (Purple)" },
];

export const ThemeToggle = () => {
  const { theme, setTheme } = useBackgroundTheme();

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-secondary/50 border border-border/50">
      {themes.map((t) => {
        const Icon = t.icon;
        const isActive = theme === t.id;
        
        return (
          <motion.button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`relative p-2 rounded-full transition-colors ${
              isActive ? "text-white" : "text-muted-foreground hover:text-foreground"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={t.label}
          >
            {isActive && (
              <motion.div
                layoutId="activeTheme"
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: t.color }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Icon className="w-4 h-4 relative z-10" />
          </motion.button>
        );
      })}
    </div>
  );
};
