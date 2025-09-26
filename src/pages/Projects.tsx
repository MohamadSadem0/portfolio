import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  // Search query and selected tag state
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState<string | null>(null);

  // Collect all unique tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, []);

  // Filter projects based on search and tag
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return projects.filter((p) => {
      const matchesQuery = !q || `${p.name} ${p.description} ${p.tags.join(' ')}`.toLowerCase().includes(q);
      const matchesTag = !tag || p.tags.includes(tag);
      return matchesQuery && matchesTag;
    });
  }, [query, tag]);

  return (
    <>
      <SEO
        title="Projects"
        description="Explore ShopiiShop, game development prototypes and Spring Boot mini‑projects crafted by Mohamad Sadem Serhal."
      />
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-8 text-center">Projects</h1>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">
                Search projects
              </label>
              <input
                id="search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setTag(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium border ${
                  tag === null
                    ? 'bg-primary text-white border-primary'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                All
              </button>
              {allTags.map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(t)}
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    tag === t
                      ? 'bg-primary text-white border-primary'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          {filtered.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 text-center">No projects match your search.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}