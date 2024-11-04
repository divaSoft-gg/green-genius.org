// hooks/useTheme.ts

import { useContext } from "react";
import { ThemeContextType } from "../common/types";
import { ThemeContext } from "../context/themeContext";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
