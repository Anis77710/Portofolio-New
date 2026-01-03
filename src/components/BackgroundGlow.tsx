import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const BackgroundGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

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
      {/* Main large cursor follower glow */}
      <motion.div
        className="absolute hidden lg:block"
        style={{
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, hsl(174 100% 42% / 0.12) 0%, hsl(174 100% 42% / 0.05) 30%, transparent 60%)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
          opacity: isActive ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 30,
          mass: 2,
        }}
      />

      {/* Secondary accent glow - purple tint */}
      <motion.div
        className="absolute hidden lg:block"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, hsl(280 80% 60% / 0.08) 0%, transparent 60%)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
        animate={{
          x: mousePosition.x - 250 + 150,
          y: mousePosition.y - 250 - 150,
          opacity: isActive ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 20,
          damping: 25,
          mass: 2.5,
        }}
      />

      {/* Static ambient glows for depth */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(174 100% 42% / 0.1) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />
      <div 
        className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(280 80% 60% / 0.08) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />
    </div>
  );
};
