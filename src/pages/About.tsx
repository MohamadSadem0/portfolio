import React from 'react';
import SEO from '../components/SEO';
import { profile } from '../data/profile';

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Discover the journey of Mohamad Sadem Serhal — from game development and full‑stack engineering to teaching and mentoring."
      />
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-6">About Me</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I’m {profile.name}, a backend and full‑stack developer with a strong foundation in
            Spring Boot, Java and modern JavaScript frameworks. I love turning complex problems
            into elegant, user‑friendly experiences.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            My journey spans game development, full‑stack engineering and teaching. I built
            independent game projects using C++ and Unreal Engine, participated in the Epic Game Jam
            and discovered a passion for combining creativity with code. More recently I’ve been
            designing multi‑vendor e‑commerce platforms and scalable APIs using Next.js, React,
            Spring Boot and JWT security.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Beyond building software, I actively teach and mentor others. As a Java lecturer and
            private tutor, I help aspiring developers master object‑oriented principles, data
            structures and modern web development. I’m pursuing a BSc in Computer Science and
            continuously seeking opportunities to learn and collaborate.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            My ethos is to write maintainable, accessible code and design interfaces that put
            users first. Whether collaborating with cross‑functional teams or mentoring individuals,
            I strive to deliver high‑quality solutions and inspire others along the way. As a native
            Arabic speaker fluent in English with intermediate French, I enjoy connecting with
            diverse communities worldwide.
          </p>
        </div>
      </section>
    </>
  );
}