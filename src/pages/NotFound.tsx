import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFoundPage() {
  return (
    <main className="container py-16 text-center">
      <h2 className="text-xl font-semibold">Page not found</h2>
      <p className="text-sm text-gray-500 mt-1">The page you are looking for doesn’t exist.</p>
      <Link className="btn btn-primary mt-4" to="/">Back to Home</Link>
    </main>
  )
}