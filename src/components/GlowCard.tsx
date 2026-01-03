import { useEffect, ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export const GlowCard = ({ children, className = "" }: GlowCardProps) => {
  useEffect(() => {
    const cards = document.querySelectorAll('.glass-card-glow');
    
    const handleMouseMove = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`glass-card-glow ${className}`}>
      {children}
    </div>
  );
};

// Global mouse tracker for all glow cards
export const initGlowCards = () => {
  const handleMouseMove = (e: MouseEvent) => {
    const cards = document.querySelectorAll('.glass-card-glow');
    cards.forEach((card) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    });
  };

  document.addEventListener('mousemove', handleMouseMove);
  return () => document.removeEventListener('mousemove', handleMouseMove);
};
