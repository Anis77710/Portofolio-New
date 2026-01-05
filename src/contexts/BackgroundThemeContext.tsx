import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type BackgroundTheme = "midnight" | "aurora" | "sunset" | "ocean";

interface BackgroundThemeContextType {
  theme: BackgroundTheme;
  setTheme: (theme: BackgroundTheme) => void;
}

const themeColors: Record<BackgroundTheme, {
  primary: string;
  primaryForeground: string;
}> = {
  midnight: {
    primary: "174 100% 42%",
    primaryForeground: "0 0% 5%",
  },
  aurora: {
    primary: "160 100% 45%",
    primaryForeground: "0 0% 5%",
  },
  sunset: {
    primary: "25 100% 55%",
    primaryForeground: "0 0% 5%",
  },
  ocean: {
    primary: "200 100% 50%",
    primaryForeground: "0 0% 5%",
  },
};

const BackgroundThemeContext = createContext<BackgroundThemeContextType | undefined>(undefined);

export const BackgroundThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<BackgroundTheme>("midnight");

  useEffect(() => {
    const colors = themeColors[theme];
    document.documentElement.style.setProperty("--primary", colors.primary);
    document.documentElement.style.setProperty("--primary-foreground", colors.primaryForeground);
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
