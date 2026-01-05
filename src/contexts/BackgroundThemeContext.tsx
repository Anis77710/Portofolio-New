import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type BackgroundTheme = "midnight" | "aurora" | "sunset" | "ocean";

interface BackgroundThemeContextType {
  theme: BackgroundTheme;
  setTheme: (theme: BackgroundTheme) => void;
}

const themeColors: Record<BackgroundTheme, {
  primary: string;
  primaryForeground: string;
  codeGreen: string;
  codeYellow: string;
  codePurple: string;
  codeOrange: string;
  codePink: string;
  accent: string;
  ring: string;
  gradientPrimary: string;
  shadowGlow: string;
}> = {
  midnight: {
    primary: "174 100% 42%",
    primaryForeground: "0 0% 5%",
    codeGreen: "174 100% 50%",
    codeYellow: "180 80% 60%",
    codePurple: "190 80% 65%",
    codeOrange: "174 90% 55%",
    codePink: "185 80% 65%",
    accent: "174 80% 50%",
    ring: "174 100% 42%",
    gradientPrimary: "linear-gradient(135deg, hsl(174 100% 42%) 0%, hsl(190 100% 50%) 100%)",
    shadowGlow: "0 0 40px hsl(174 100% 42% / 0.3)",
  },
  aurora: {
    primary: "160 100% 45%",
    primaryForeground: "0 0% 5%",
    codeGreen: "160 100% 50%",
    codeYellow: "140 80% 60%",
    codePurple: "170 80% 65%",
    codeOrange: "150 90% 55%",
    codePink: "145 80% 65%",
    accent: "160 80% 50%",
    ring: "160 100% 45%",
    gradientPrimary: "linear-gradient(135deg, hsl(160 100% 45%) 0%, hsl(140 100% 50%) 100%)",
    shadowGlow: "0 0 40px hsl(160 100% 45% / 0.3)",
  },
  sunset: {
    primary: "25 100% 55%",
    primaryForeground: "0 0% 5%",
    codeGreen: "25 100% 55%",
    codeYellow: "45 100% 60%",
    codePurple: "15 80% 60%",
    codeOrange: "35 100% 55%",
    codePink: "350 80% 65%",
    accent: "25 90% 55%",
    ring: "25 100% 55%",
    gradientPrimary: "linear-gradient(135deg, hsl(25 100% 55%) 0%, hsl(45 100% 55%) 100%)",
    shadowGlow: "0 0 40px hsl(25 100% 55% / 0.3)",
  },
  ocean: {
    primary: "200 100% 50%",
    primaryForeground: "0 0% 5%",
    codeGreen: "200 100% 55%",
    codeYellow: "190 80% 60%",
    codePurple: "220 80% 65%",
    codeOrange: "210 90% 55%",
    codePink: "230 80% 65%",
    accent: "200 80% 50%",
    ring: "200 100% 50%",
    gradientPrimary: "linear-gradient(135deg, hsl(200 100% 50%) 0%, hsl(220 100% 60%) 100%)",
    shadowGlow: "0 0 40px hsl(200 100% 50% / 0.3)",
  },
};

const BackgroundThemeContext = createContext<BackgroundThemeContextType | undefined>(undefined);

export const BackgroundThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<BackgroundTheme>("midnight");

  useEffect(() => {
    const colors = themeColors[theme];
    const root = document.documentElement;
    
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--primary-foreground", colors.primaryForeground);
    root.style.setProperty("--code-green", colors.codeGreen);
    root.style.setProperty("--code-yellow", colors.codeYellow);
    root.style.setProperty("--code-purple", colors.codePurple);
    root.style.setProperty("--code-orange", colors.codeOrange);
    root.style.setProperty("--code-pink", colors.codePink);
    root.style.setProperty("--accent", colors.accent);
    root.style.setProperty("--ring", colors.ring);
    root.style.setProperty("--gradient-primary", colors.gradientPrimary);
    root.style.setProperty("--shadow-glow", colors.shadowGlow);
  }, [theme]);

  return (
    <BackgroundThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </BackgroundThemeContext.Provider>
  );
};

export const useBackgroundTheme = () => {
  const context = useContext(BackgroundThemeContext);
  if (!context) {
    throw new Error("useBackgroundTheme must be used within a BackgroundThemeProvider");
  }
  return context;
};
