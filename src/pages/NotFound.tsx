import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Not Found" description="The requested page could not be found." />
      <section className="py-32 bg-white dark:bg-gray-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
          <p className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8">
            Oops! The page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary.dark focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Go back home
          </Link>
        </div>
      </section>
    </>
  );
}