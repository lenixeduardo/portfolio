import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: '404 - Not Found | Lenix Eduardo',
  description: 'Page not found',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          {/* 404 display */}
          <div className="mb-8">
            <div className="heading-display text-8xl md:text-9xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              404
            </div>
          </div>

          {/* Message */}
          <h1 className="heading-lg mb-3">Project not found</h1>
          <p className="text-muted mb-8">
            The project you're looking for doesn't exist or has been moved.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn btn-primary">
              Back to home
            </Link>
            <Link href="/#projects" className="btn btn-secondary">
              View all projects
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
