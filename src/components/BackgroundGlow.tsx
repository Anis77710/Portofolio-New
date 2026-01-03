import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const BackgroundGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main cursor follower glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(174 100% 42% / 0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 30,
          mass: 1,
        }}
      />

      {/* Secondary accent glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(280 80% 60% / 0.1) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x - 200 + 100,
          y: mousePosition.y - 200 - 100,
        }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 25,
          mass: 1.5,
        }}
      />

      {/* Static ambient glows */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
    </div>
  );
};
