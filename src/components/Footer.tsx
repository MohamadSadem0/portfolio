import React from 'react';

// Footer with copyright and tagline.  Renders at the bottom of every page.
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Mohamad Serhal. All rights reserved.</p>
        <p>Built with React &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}