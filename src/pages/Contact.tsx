import React from 'react';
import SEO from '../components/SEO';
import { profile } from '../data/profile';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Reach out to Mohamad Sadem Serhal for collaborations, job opportunities, mentorship or just to say hello."
      />
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-6">Let’s Connect</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I’m open to backend roles, full‑stack development projects, teaching engagements and
            collaborative opportunities. Whether you have a question, an idea or simply want to
            connect, I’d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mt-6">
            {/* Call button */}
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              <Phone className="h-5 w-5" />
              {profile.phone}
            </a>
            {/* Email button */}
            <a
              href={profile.email}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-700 border border-indigo-600 rounded-full font-medium hover:bg-indigo-50 dark:bg-gray-800 dark:text-indigo-300 dark:border-indigo-700 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              <Mail className="h-5 w-5" />
              Email Me
            </a>
            {/* LinkedIn button */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-700 border border-indigo-600 rounded-full font-medium hover:bg-indigo-50 dark:bg-gray-800 dark:text-indigo-300 dark:border-indigo-700 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              {/* Use plain text for the label instead of an imported icon to avoid missing icon errors */}
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}