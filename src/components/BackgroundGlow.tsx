import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useBackgroundTheme, BackgroundTheme } from "@/contexts/BackgroundThemeContext";

const themeConfigs: Record<BackgroundTheme, {
  primary: string;
  secondary: string;
  accent: string;
  particleCount: number;
}> = {
  midnight: {
    primary: "174 100% 42%",
    secondary: "280 80% 60%",
    accent: "220 90% 50%",
    particleCount: 30,
  },
  aurora: {
    primary: "160 100% 50%",
    secondary: "280 100% 70%",
    accent: "200 100% 60%",
    particleCount: 50,
  },
  sunset: {
    primary: "25 100% 55%",
    secondary: "340 100% 60%",
    accent: "45 100% 50%",
    particleCount: 40,
  },
  ocean: {
    primary: "200 100% 50%",
    secondary: "180 100% 40%",
    accent: "240 80% 60%",
    particleCount: 35,
  },
};

const FloatingParticle = ({ 
  delay, 
  theme,
  index 
}: { 
  delay: number; 
  theme: BackgroundTheme;
  index: number;
}) => {
  const config = themeConfigs[theme];
  const size = Math.random() * 4 + 2;
  const duration = Math.random() * 20 + 15;
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${startX}%`,
        top: `${startY}%`,
        background: `hsl(${index % 3 === 0 ? config.primary : index % 3 === 1 ? config.secondary : config.accent} / 0.6)`,
        boxShadow: `0 0 ${size * 3}px hsl(${config.primary} / 0.4)`,
      }}
      animate={{
        y: [0, -30, 0, 30, 0],
        x: [0, 20, 0, -20, 0],
        opacity: [0.3, 0.7, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

export const BackgroundGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const { theme } = useBackgroundTheme();
  const config = themeConfigs[theme];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsActive(true);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient mesh background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(ellipse 80% 50% at 20% 40%, hsl(${config.primary} / 0.15) 0%, transparent 50%),
             radial-gradient(ellipse 60% 80% at 80% 20%, hsl(${config.secondary} / 0.1) 0%, transparent 50%),
             radial-gradient(ellipse 50% 50% at 50% 80%, hsl(${config.accent} / 0.08) 0%, transparent 50%)`,
            `radial-gradient(ellipse 80% 50% at 30% 60%, hsl(${config.primary} / 0.15) 0%, transparent 50%),
             radial-gradient(ellipse 60% 80% at 70% 30%, hsl(${config.secondary} / 0.1) 0%, transparent 50%),
             radial-gradient(ellipse 50% 50% at 40% 70%, hsl(${config.accent} / 0.08) 0%, transparent 50%)`,
            `radial-gradient(ellipse 80% 50% at 20% 40%, hsl(${config.primary} / 0.15) 0%, transparent 50%),
             radial-gradient(ellipse 60% 80% at 80% 20%, hsl(${config.secondary} / 0.1) 0%, transparent 50%),
             radial-gradient(ellipse 50% 50% at 50% 80%, hsl(${config.accent} / 0.08) 0%, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(${config.primary} / 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(${config.primary} / 0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 hidden lg:block">
        {Array.from({ length: config.particleCount }).map((_, i) => (
          <FloatingParticle 
            key={`${theme}-${i}`} 
            delay={i * 0.3} 
            theme={theme}
            index={i}
          />
        ))}
      </div>

      {/* Main large cursor follower glow */}
      <motion.div
        className="absolute hidden lg:block"
        style={{
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
          opacity: isActive ? 1 : 0,
          background: `radial-gradient(circle, hsl(${config.primary} / 0.12) 0%, hsl(${config.primary} / 0.05) 30%, transparent 60%)`,
        }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 30,
          mass: 2,
        }}
      />

      {/* Secondary accent glow */}
      <motion.div
        className="absolute hidden lg:block"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
        animate={{
          x: mousePosition.x - 250 + 150,
          y: mousePosition.y - 250 - 150,
          opacity: isActive ? 1 : 0,
          background: `radial-gradient(circle, hsl(${config.secondary} / 0.08) 0%, transparent 60%)`,
        }}
        transition={{
          type: "spring",
          stiffness: 20,
          damping: 25,
          mass: 2.5,
        }}
      />

      {/* Animated wave lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
        <motion.path
          d="M0,50 Q250,0 500,50 T1000,50 T1500,50 T2000,50"
          fill="none"
          stroke={`hsl(${config.primary})`}
          strokeWidth="1"
          animate={{
            d: [
              "M0,50 Q250,0 500,50 T1000,50 T1500,50 T2000,50",
              "M0,50 Q250,100 500,50 T1000,50 T1500,50 T2000,50",
              "M0,50 Q250,0 500,50 T1000,50 T1500,50 T2000,50",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Static ambient glows for depth */}
      <motion.div 
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full"
        animate={{
          opacity: [0.2, 0.35, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `radial-gradient(circle, hsl(${config.primary} / 0.1) 0%, transparent 60%)`,
          filter: "blur(100px)",
        }}
      />
      <motion.div 
        className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full"
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          background: `radial-gradient(circle, hsl(${config.secondary} / 0.08) 0%, transparent 60%)`,
          filter: "blur(100px)",
        }}
      />
    </div>
  );
};
