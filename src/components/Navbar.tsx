import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { profile } from '../data/profile';

// Primary navigation component.  Renders a responsive header with a
// hamburger menu on small screens and a horizontal menu on larger
// devices.  Includes a theme toggle and links to external profiles.
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/experience', label: 'Experience' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            <span className="text-primary">&lt;/&gt;</span>
            <span>{profile.name}</span>
          </Link>
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6" aria-label="Primary">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-primary dark:text-primary'
                      : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            {/* External links */}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12a9.998 9.998 0 0 0 6.838 9.5c.5.092.682-.217.682-.483 0-.238-.008-.868-.013-1.703-2.782.604-3.369-1.343-3.369-1.343-.454-1.152-1.11-1.46-1.11-1.46-.909-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.254-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.378.202 2.396.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.944.359.309.679.92.679 1.852 0 1.336-.012 2.416-.012 2.743 0 .268.18.579.688.481A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5C1.11 6 0 4.881 0 3.5 0 2.119 1.11 1 2.5 1S4.98 2.119 4.98 3.5zM.22 8.457h4.9V24h-4.9V8.457zm7.851 0h4.703v2.12h.066c.653-1.242 2.254-2.548 4.64-2.548C21.36 8.03 24 10.723 24 15.345V24h-4.9v-7.985c0-1.903-.034-4.356-2.666-4.356-2.667 0-3.075 2.086-3.075 4.239V24h-4.901V8.457z"
                />
              </svg>
            </a>
            <ThemeToggle />
          </nav>
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile navigation panel */}
      {mobileOpen && (
        <nav id="mobile-menu" className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-4">
          <div className="max-w-6xl mx-auto px-4 space-y-2">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary'
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                aria-label="GitHub"
              >
                {/* GitHub icon reused */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12a9.998 9.998 0 0 0 6.838 9.5c.5.092.682-.217.682-.483 0-.238-.008-.868-.013-1.703-2.782.604-3.369-1.343-3.369-1.343-.454-1.152-1.11-1.46-1.11-1.46-.909-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.254-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.378.202 2.396.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.944.359.309.679.92.679 1.852 0 1.336-.012 2.416-.012 2.743 0 .268.18.579.688.481A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5C1.11 6 0 4.881 0 3.5 0 2.119 1.11 1 2.5 1S4.98 2.119 4.98 3.5zM.22 8.457h4.9V24h-4.9V8.457zm7.851 0h4.703v2.12h.066c.653-1.242 2.254-2.548 4.64-2.548C21.36 8.03 24 10.723 24 15.345V24h-4.9v-7.985c0-1.903-.034-4.356-2.666-4.356-2.667 0-3.075 2.086-3.075 4.239V24h-4.901V8.457z"
                  />
                </svg>
              </a>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}