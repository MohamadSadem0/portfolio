import React from 'react';
import { Project } from '../data/profile';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

// A card component used to showcase a single project.  Displays
// screenshot, name, description and tags.  If a link is provided
// clicking the card will open it in a new tab; otherwise it
// gracefully degrades to a non‑clickable card.
export default function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 shadow hover:shadow-lg transition-shadow duration-200">
      <div className="relative">
        <img
          src={project.image}
          alt={project.name}
          className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-100">{project.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 leading-relaxed">
          {project.description}
        </p>
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-xs font-medium px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return project.link ? (
    <a href={project.link} target="_blank" rel="noreferrer" className="block h-full">
      {content}
    </a>
  ) : (
    content
  );
}