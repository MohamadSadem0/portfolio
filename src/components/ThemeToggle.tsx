import React from 'react';
import { Moon, Sun } from 'lucide-react';

// ThemeToggle provides a simple light/dark mode switch.  The current
// preference is persisted to localStorage and applied by toggling the
// `dark` class on the html element.  Icons indicate the active mode.
export default function ThemeToggle() {
  const [isDark, setIsDark] = React.useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const persisted = localStorage.getItem('theme');
    if (persisted === 'light') return false;
    if (persisted === 'dark') return true;
    // default to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggle = () => setIsDark(!isDark);

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label="Toggle theme"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}