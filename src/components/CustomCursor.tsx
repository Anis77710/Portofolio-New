import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <>
      {/* Large glow spotlight - follows with lag */}
      <motion.div
        className="fixed pointer-events-none z-[9997] hidden lg:block"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, hsl(174 100% 42% / 0.08) 0%, hsl(174 100% 42% / 0.03) 30%, transparent 60%)",
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
          background: "radial-gradient(circle, hsl(174 100% 42% / 0.15) 0%, transparent 70%)",
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

      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden lg:block"
        style={{
          width: "40px",
          height: "40px",
          border: "1px solid hsl(174 100% 42% / 0.5)",
          borderRadius: "50%",
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.3 : 0.6,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.5,
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden lg:block"
        style={{
          width: "8px",
          height: "8px",
          background: "hsl(174 100% 42%)",
          borderRadius: "50%",
          boxShadow: "0 0 10px hsl(174 100% 42% / 0.8), 0 0 20px hsl(174 100% 42% / 0.4)",
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
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
