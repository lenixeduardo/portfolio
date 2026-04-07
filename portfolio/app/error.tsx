'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Error icon */}
        <div className="mb-8">
          <div className="text-6xl md:text-7xl font-bold text-red-500 mb-4">⚠️</div>
        </div>

        {/* Error message */}
        <h1 className="heading-lg mb-3">Something went wrong</h1>
        <p className="text-muted mb-8">
          An unexpected error occurred. Please try again or go back to the home page.
        </p>

        {/* Debug info in development */}
        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-xs text-red-300 font-mono break-words">{error.message}</p>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="btn btn-primary">
            Try again
          </button>
          <Link href="/" className="btn btn-secondary">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}
