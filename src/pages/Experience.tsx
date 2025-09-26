import React from 'react';
import SEO from '../components/SEO';

// A simple timeline of professional experience.  Each entry includes
// a role, company, period and description.  You can customise these
// entries to reflect your actual experience.
interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

// Timeline of professional experience and training.  Entries are ordered from
// most recent to oldest.  Each object captures the role, organisation, dates
// and a short description of responsibilities.
const experience: ExperienceItem[] = [
  {
    role: 'Private Programming Instructor',
    company: 'Self‑employed',
    period: 'Sep 2023 – Present',
    description:
      'Provide one‑on‑one and small group tutoring covering programming fundamentals, web development with React and Next.js, and Java/Spring Boot. Mentor students on algorithms, object‑oriented principles and project deployment, tailoring lessons to individual goals and skill levels.',
  },
  {
    role: 'Full‑Stack Developer',
    company: 'Dahboul Computer',
    period: 'Oct 2023 – Mar 2024',
    description:
      'Designed and developed full‑stack applications using React and Spring Boot. Built secure JWT‑based authentication, implemented REST APIs, containerised services with Docker and collaborated with cross‑functional teams in an agile environment.',
  },
  {
    role: 'Freelance Web Development Tutor',
    company: 'Self‑employed',
    period: 'Apr 2024 – Present',
    description:
      'Provide one‑on‑one coaching and mentorship covering programming fundamentals, web development and Java. Teach React, Next.js, REST API integration and backend basics while mentoring students on building responsive applications and sharing insights on deployment workflows and best practices.',
  },
  {
    role: 'Game Developer',
    company: 'Independent',
    period: 'Jun 2021 – Sep 2023',
    description:
      'Developed interactive game experiences using C++ and Unreal Engine. Participated in Epic Game Jam events, demonstrating creativity, rapid prototyping abilities and strong problem‑solving skills.',
  },
  {
    role: 'Web Development Bootcamp',
    company: 'LIU Bootcamp',
    period: 'Feb 2024 – Apr 2024',
    description:
      'Completed an intensive 8‑week programme covering modern web development frameworks including React, Next.js and Spring Boot. Gained hands‑on experience with REST API integration, deployment and best practices.',
  },
];

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience"
        description="Timeline of teaching, development and training experiences of Mohamad Sadem Serhal."
      />
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-10 text-center">Experience</h1>
          <div className="relative border-l border-gray-300 dark:border-gray-700">
            {experience.map((item, idx) => (
              <div key={idx} className="mb-10 ml-6">
                <div className="absolute -left-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                  {experience.length - idx}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {item.role}
                </h3>
                <p className="text-sm text-primary dark:text-primary mb-1">{item.company}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.period}</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}