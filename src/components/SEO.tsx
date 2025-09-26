import React from 'react';
import { Helmet } from 'react-helmet-async';

// SEO component for setting document metadata.  This component is
// optional; it simply wraps Helmet calls with sensible defaults.
interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function SEO({ title, description, image }: SEOProps) {
  // The base title for the site, displayed on all pages unless overridden.  Includes
  // your full name to improve searchability and personal branding.
  const siteTitle = 'Mohamad Sadem Serhal — Portfolio';
  // Compose the page title from the specific title and the site title.  If no
  // title is provided, the site title alone is used.
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  // Default description used when no custom description is provided.  Summarises
  // your expertise across backend, frontend and creative development.
  const desc =
    description ??
    'Portfolio of Mohamad Sadem Serhal — backend & full‑stack developer specialising in Spring Boot, Java and modern UI frameworks.';
  // Fallback image used for Open Graph and Twitter cards; update this path
  // if you have a custom social preview image.
  const img = image ?? '/portfolio/og.png';
  // Canonical URL of the site; update to your deployed portfolio URL.
  const url = 'https://mohamadsadem0.github.io/portfolio/';
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}