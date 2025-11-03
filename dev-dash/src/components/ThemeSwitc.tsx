import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {

  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeSwitcher must be used inside ThemeProvider");

  const { theme, toggleTheme } = context;

  return (
    <div className="flex gap-2">
      <button
        aria-label="Toggle Dark Mode"
        className="p-2 rounded-full transition-colors bg-gray-200 dark:bg-gray-700 px-6"
        onClick={toggleTheme}
      >
        {theme === "light" ? <Moon size={20}  /> : <Sun size={20} />}
      </button>
    </div>
  );
}
