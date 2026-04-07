'use client'

import Link from 'next/link'
import { Star } from 'lucide-react'
import { RepositoryWithSlug } from '@/lib/github'
import { useState } from 'react'

interface ProjectCardProps {
  project: RepositoryWithSlug
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [hasImage, setHasImage] = useState(!!project.imageUrl)

  // Generate gradient based on language
  const gradientMap: Record<string, string> = {
    Python: 'from-blue-600/20 via-blue-700/20 to-blue-800/20',
    JavaScript: 'from-yellow-600/20 via-yellow-700/20 to-yellow-800/20',
    TypeScript: 'from-blue-600/20 via-blue-700/20 to-blue-800/20',
    Rust: 'from-orange-600/20 via-orange-700/20 to-orange-800/20',
    Go: 'from-cyan-600/20 via-cyan-700/20 to-cyan-800/20',
  }

  const gradient = gradientMap[project.language || ''] || 'from-white/10 via-white/5 to-white/10'

  return (
    <Link href={`/projects/${project.slug}`}>
      <div
        className="relative group rounded-xl overflow-hidden cursor-pointer transition-smooth"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background image or gradient with animation */}
        {hasImage && project.imageUrl ? (
          <div
            className={`absolute inset-0 transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-75'
            }`}
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            onError={() => setHasImage(false)}
          ></div>
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-75'
            }`}
          ></div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        {/* Glass border */}
        <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/20 transition-smooth"></div>

        {/* Content */}
        <div className="relative h-64 md:h-80 p-6 md:p-8 flex flex-col justify-between">
          {/* Top - Language tag */}
          {project.language && (
            <div className="flex items-center gap-2 w-fit">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/60 glass rounded-full">
                {project.language}
              </span>
              {project.stargazers_count > 0 && (
                <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/60 glass rounded-full">
                  <Star size={12} className="fill-yellow-400 text-yellow-400" />
                  {project.stargazers_count}
                </span>
              )}
            </div>
          )}

          {/* Bottom - Title and description */}
          <div>
            <h3 className="heading-md mb-2 group-hover:translate-x-1 transition-smooth">
              {project.name}
            </h3>
            {(project.readmeDescription || project.description) && (
              <p className="text-muted line-clamp-2 text-sm md:text-base">
                {project.readmeDescription || project.description}
              </p>
            )}
          </div>
        </div>

        {/* Hover effect - subtle scale */}
        <div
          className={`absolute inset-0 rounded-xl bg-white/[0.02] transition-all duration-300 ${
            isHovered ? 'scale-100 opacity-100' : 'scale-98 opacity-0'
          }`}
        ></div>
      </div>
    </Link>
  )
}
