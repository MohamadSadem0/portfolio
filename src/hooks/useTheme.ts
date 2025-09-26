import { useThemeContext } from "../context/ThemeProvider";

export const useTheme = () => {
  return useThemeContext();
};
