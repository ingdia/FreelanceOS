import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {

  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeSwitcher must be used inside ThemeProvider");

  const { theme, toggleTheme } = context;

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-full transition-all hover:scale-110 bg-gray-100 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <Moon size={20} className="text-gray-700 dark:text-gray-300" />
      ) : (
        <Sun size={20} className="text-yellow-500" />
      )}
    </button>
  );
}
