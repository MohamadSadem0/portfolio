import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
// Replace the desk/laptop GLB scene with a bespoke abstract 3D composition.
// Remove the hero 3D scene in favour of a separate models showcase section
// Remove the abstract models showcase in favour of a personal workspace section
import DeskLaptopScene from '../components/DeskLaptopScene';
// profile imported above; do not import again
import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
// Import a variety of icons from lucide-react.  These icons represent
// different skills and expertise areas.  If an icon name does not exist
// in lucide-react, it will be caught at build time.
import {
  Code,
  Database,
  Feather,
  Package,
  Server,
  Type,
  Atom as ReactIcon,
  Coffee,
  Leaf,
  LayoutGrid,
  Boxes,
  GitBranch,
  Gamepad2,
  Users,
} from 'lucide-react';

// Map of icon names from profile.skills to actual Lucide icon components.
// When adding new skills in profile.ts, ensure the corresponding icon is imported
// above and included in this map.  A default fallback (Code) is applied when
// no matching icon is found.
const skillIcons: Record<string, React.FC<any>> = {
  Coffee: Coffee,
  Leaf: Leaf,
  Package: Package,
  Atom: ReactIcon,
  Type: Type,
  Feather: Feather,
  LayoutGrid: LayoutGrid,
  Boxes: Boxes,
  Database: Database,
  GitBranch: GitBranch,
  Gamepad2: Gamepad2,
  Users: Users,
  Code: Code,
};

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Full‑stack developer and private programming tutor building secure back‑end services, elegant front‑end experiences, and empowering new developers through personalised mentorship."
      />
      {/* Hero Section: simplified without a 3D scene */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Hello, I'm {profile.name}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {profile.bio}
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              to="/projects"
              className="inline-block px-8 py-3 bg-white/90 text-indigo-700 font-semibold rounded-full shadow-lg hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm ring-1 ring-white/30 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
        {/* Decorative blurred circles – softened colours */}
        <div className="absolute -z-10 inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-pink-400/20 rounded-full blur-[120px] -top-32 -left-32"></div>
          <div className="absolute w-96 h-96 bg-purple-400/20 rounded-full blur-[120px] -bottom-24 -right-24"></div>
          <div className="absolute w-96 h-96 bg-indigo-400/20 rounded-full blur-[120px] top-1/3 left-1/2"></div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {profile.skills.map((skill, idx) => {
              const IconComponent = skillIcons[skill.icon] ?? Code;
              return (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <IconComponent className="h-8 w-8 text-indigo-700 dark:text-indigo-400" aria-hidden="true" />
                  <span className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Areas of Expertise</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Backend & Spring Boot */}
            <motion.div
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-indigo-100 dark:bg-indigo-900">
                <Server className="h-6 w-6 text-indigo-700 dark:text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Backend &amp; Spring&nbsp;Boot</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Expert in building scalable, secure REST APIs and microservices using Spring Boot and Java 21. Skilled in JWT authentication and realtime socket communication.
              </p>
            </motion.div>
            {/* Frontend & Next.js */}
            <motion.div
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-indigo-100 dark:bg-indigo-900">
                <Package className="h-6 w-6 text-indigo-700 dark:text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Frontend &amp; Next.js</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Crafting responsive, dynamic UIs with Next.js, React and modern CSS frameworks. Focused on performance, accessibility and user‑centric design.
              </p>
            </motion.div>
            {/* DevOps & Deployment */}
            <motion.div
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-indigo-100 dark:bg-indigo-900">
                <Boxes className="h-6 w-6 text-indigo-700 dark:text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">DevOps &amp; Deployment</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Proficient in Docker, containerization and cloud deployment on Heroku, Render and Oracle VM. Bridging frontend and backend for end‑to‑end solutions.
              </p>
            </motion.div>
            {/* Game Development */}
            <motion.div
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-indigo-100 dark:bg-indigo-900">
                <Gamepad2 className="h-6 w-6 text-indigo-700 dark:text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Game Development</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Developed interactive games with C++ and Unreal Engine, showcasing creativity and problem‑solving skills through participation in Epic Game Jam events.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workspace & Contact Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          {/* Left: interactive 3D workspace */}
          <div className="w-full md:w-1/2 flex justify-center">
            <DeskLaptopScene />
          </div>
          {/* Right: description and contact info */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Workspace &amp; Contact</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Step into my workspace and see where back‑end services, polished UIs and personalised lessons come to life.
              The interactive scene on the left represents the tools and environment I use daily — a blend of development rig and
              teaching studio.
            </p>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="hover:underline">
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <a href={profile.email} className="hover:underline">
                  mohamad.sadem@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tutoring & Coaching Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Tutoring &amp; Coaching
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I provide private programming lessons tailored to individuals and small groups — from first steps in coding to building full‑stack applications. Sessions cover programming fundamentals, web development with React and Next.js, and Java with Spring Boot, with a focus on hands‑on practice and personalised mentorship.
          </motion.p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Programming Fundamentals Card */}
            <motion.div
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-indigo-100 dark:bg-indigo-900">
                <Code className="h-6 w-6 text-indigo-700 dark:text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Programming Fundamentals</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Master core concepts like algorithms, data structures and problem‑solving — the foundation of every successful developer.
              </p>
            </motion.div>
            {/* Web Development Card */}
            <motion.div
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-indigo-100 dark:bg-indigo-900">
                <LayoutGrid className="h-6 w-6 text-indigo-700 dark:text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Web Development</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Build responsive, modern interfaces using React, Next.js and Tailwind CSS while learning best practices for accessibility and performance.
              </p>
            </motion.div>
            {/* Java & Spring Boot Card */}
            <motion.div
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-indigo-100 dark:bg-indigo-900">
                <Coffee className="h-6 w-6 text-indigo-700 dark:text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Java &amp; Spring Boot</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Dive into Java programming and Spring Boot to design robust back‑end services, APIs and microservices with JWT security.
              </p>
            </motion.div>
            {/* Personalised Mentorship Card */}
            <motion.div
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-indigo-100 dark:bg-indigo-900">
                <Users className="h-6 w-6 text-indigo-700 dark:text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Personalised Mentorship</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Receive customised guidance and feedback tailored to your goals, with projects and assignments that reflect real‑world scenarios.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            >
              Book a Lesson
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Featured Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-8">
            <h2 className="text-3xl font-bold">Recent Projects</h2>
            <Link to="/projects" className="text-primary hover:underline font-medium">
              View all
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}