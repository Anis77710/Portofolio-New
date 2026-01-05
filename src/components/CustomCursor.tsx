import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const OrbitingParticle = ({ 
  delay, 
  duration, 
  radius, 
  size,
  mousePosition 
}: { 
  delay: number; 
  duration: number; 
  radius: number; 
  size: number;
  mousePosition: { x: number; y: number };
}) => {
  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] hidden lg:block bg-primary"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        boxShadow: `0 0 ${size * 2}px hsl(var(--primary) / 0.8), 0 0 ${size * 4}px hsl(var(--primary) / 0.4)`,
      }}
      animate={{
        x: [
          mousePosition.x + radius,
          mousePosition.x,
          mousePosition.x - radius,
          mousePosition.x,
          mousePosition.x + radius,
        ],
        y: [
          mousePosition.y,
          mousePosition.y - radius,
          mousePosition.y,
          mousePosition.y + radius,
          mousePosition.y,
        ],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
    />
  );
};

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth follow for orbiting particles
  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    let animationId: number;
    const animate = () => {
      setSmoothPosition(prev => ({
        x: lerp(prev.x, mousePosition.x, 0.12),
        y: lerp(prev.y, mousePosition.y, 0.12),
      }));
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [mousePosition]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("hover-target")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  // Orbiting particles configuration
  const particles = [
    { delay: 0, duration: 2.5, radius: 25, size: 4 },
    { delay: 0.8, duration: 3, radius: 35, size: 3 },
    { delay: 1.6, duration: 2, radius: 20, size: 5 },
  ];

  return (
    <>
      {/* Large glow spotlight - follows with lag */}
      <motion.div
        className="fixed pointer-events-none z-[9997] hidden lg:block"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, hsl(var(--primary) / 0.03) 30%, transparent 60%)",
          borderRadius: "50%",
        }}
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 30,
          mass: 1,
        }}
      />

      {/* Medium glow ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden lg:block"
        style={{
          width: "120px",
          height: "120px",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
        animate={{
          x: mousePosition.x - 60,
          y: mousePosition.y - 60,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.5,
        }}
      />

      {/* Orbital ring path (visual) */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden lg:block"
        style={{
          width: "60px",
          height: "60px",
          border: "1px solid hsl(var(--primary) / 0.2)",
          borderRadius: "50%",
        }}
        animate={{
          x: smoothPosition.x - 30,
          y: smoothPosition.y - 30,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.1 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.5,
        }}
      />

      {/* Orbiting particles (atoms) */}
      {particles.map((particle, index) => (
        <OrbitingParticle
          key={index}
          delay={particle.delay}
          duration={particle.duration}
          radius={particle.radius * (isHovering ? 1.5 : 1)}
          size={particle.size}
          mousePosition={{
            x: smoothPosition.x - particle.size / 2,
            y: smoothPosition.y - particle.size / 2,
          }}
        />
      ))}

      {/* Inner nucleus dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden lg:block bg-primary"
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          boxShadow: "0 0 15px hsl(var(--primary) / 0.9), 0 0 30px hsl(var(--primary) / 0.5), 0 0 45px hsl(var(--primary) / 0.3)",
        }}
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.3,
        }}
      />
    </>
  );
};
