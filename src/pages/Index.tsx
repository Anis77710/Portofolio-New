// Main portfolio page
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { BackgroundGlow } from "@/components/BackgroundGlow";
import { initGlowCards } from "@/components/GlowCard";
import { BackgroundThemeProvider } from "@/contexts/BackgroundThemeContext";

const Index = () => {
  useEffect(() => {
    const cleanup = initGlowCards();
    return cleanup;
  }, []);

  return (
    <BackgroundThemeProvider>
      <div className="min-h-screen bg-background relative cursor-none lg:cursor-none">
        <CustomCursor />
        <BackgroundGlow />
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ServicesSection />
          <PortfolioSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </BackgroundThemeProvider>
  );
};

export default Index;
