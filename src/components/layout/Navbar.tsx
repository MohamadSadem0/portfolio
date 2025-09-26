import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Github, Linkedin, Sun, Moon } from "lucide-react";
import { Container } from "../Container";
import { profile } from "../../data/profile";
import { useTheme } from "../../hooks/useTheme";

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="font-bold text-xl tracking-tight">
          {profile.name}
        </Link>
        <nav className="flex gap-6">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `transition-colors hover:text-primary ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 hover:text-primary transition-colors" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-md hover:bg-muted transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </Container>
    </header>
  );
};
