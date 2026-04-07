import Link from 'next/link'
import { getRepo, getRepos } from '@/lib/github'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Github, Star } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const repos = await getRepos()
  return repos.map((repo) => ({
    slug: repo.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const repo = await getRepo(params.slug)

  if (!repo) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${repo.name} | Lenix Eduardo`,
    description: repo.description || `Project: ${repo.name}`,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const repo = await getRepo(params.slug)

  if (!repo) {
    notFound()
  }

  // Language to icon and color mapping
  const languageColors: Record<string, string> = {
    Python: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    JavaScript: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    TypeScript: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    Rust: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
    Go: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  }

  const languageColor = languageColors[repo.language || ''] || 'bg-white/5 text-white/70 border-white/10'

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Back navigation */}
      <section className="px-4 md:px-6 pt-8 pb-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-smooth mb-8"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </div>
      </section>

      {/* Header section */}
      <section className="px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="badge-accent">Active Case Study</span>
          </div>

          {/* Title */}
          <h1 className="heading-display mb-6">{repo.name}</h1>

          {/* Description */}
          <p className="text-lg text-muted max-w-3xl mb-8">
            {repo.description || 'A notable project showcasing technical excellence.'}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            {repo.language && (
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${languageColor}`}>
                <span className="text-sm font-semibold">{repo.language}</span>
              </div>
            )}

            {repo.stargazers_count > 0 && (
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-lg">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold">{repo.stargazers_count} stars</span>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary group"
            >
              View on GitHub
              <ExternalLink size={16} className="group-hover:scale-110 transition-smooth" />
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Visit Project
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main content sections */}
      <section className="px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Key Features */}
          <div className="glass rounded-xl p-8 md:p-12">
            <h2 className="heading-md mb-8">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-emerald-400 font-bold mt-1">✦</span>
                <p className="text-muted">High-performance architecture optimized for scalability</p>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-bold mt-1">✦</span>
                <p className="text-muted">Clean, maintainable codebase with comprehensive documentation</p>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-bold mt-1">✦</span>
                <p className="text-muted">Production-ready with proper error handling and observability</p>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-bold mt-1">✦</span>
                <p className="text-muted">Comprehensive test coverage ensuring reliability</p>
              </li>
            </ul>
          </div>

          {/* Architecture Section */}
          <div>
            <h2 className="heading-md mb-6">Architecture</h2>
            <div className="code-block">
              <pre>
                <code>{`// Project structure optimized for scale
${repo.name}/
├── src/
│   ├── components/    # Reusable components
│   ├── lib/          # Utilities & helpers
│   ├── pages/        # Route handlers
│   └── types/        # TypeScript definitions
├── tests/            # Test suites
└── docs/             # Documentation`}</code>
              </pre>
            </div>
          </div>

          {/* About Section */}
          <div className="prose prose-invert max-w-none">
            <h2 className="heading-md mb-4">About this project</h2>
            <p className="text-muted leading-relaxed">
              This project represents a commitment to building systems that prioritize both developer
              experience and end-user performance. It demonstrates expertise in modern development practices,
              including clean architecture, comprehensive testing, and production-ready deployment strategies.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="glass rounded-lg p-6">
              <div className="text-2xl font-bold text-emerald-400 mb-2">Open Source</div>
              <p className="text-sm text-muted">Available for the community</p>
            </div>
            <div className="glass rounded-lg p-6">
              <div className="text-2xl font-bold text-emerald-400 mb-2">{repo.stargazers_count}</div>
              <p className="text-sm text-muted">GitHub stars</p>
            </div>
            <div className="glass rounded-lg p-6">
              <div className="text-2xl font-bold text-emerald-400 mb-2">{repo.language}</div>
              <p className="text-sm text-muted">Primary language</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 md:px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-12 text-center">
            <h2 className="heading-lg mb-6">Ready to explore?</h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
              Check out the source code, documentation, and join the community of developers pushing the
              boundaries of what's possible.
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary group inline-flex"
            >
              <Github size={18} />
              View Repository
              <ExternalLink size={16} className="group-hover:scale-110 transition-smooth" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
