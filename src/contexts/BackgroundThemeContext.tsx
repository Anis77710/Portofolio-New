import { createContext, useContext, useState, ReactNode } from "react";

export type BackgroundTheme = "midnight" | "aurora" | "sunset" | "ocean";

interface BackgroundThemeContextType {
  theme: BackgroundTheme;
  setTheme: (theme: BackgroundTheme) => void;
}

const BackgroundThemeContext = createContext<BackgroundThemeContextType | undefined>(undefined);

export const BackgroundThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<BackgroundTheme>("midnight");

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
