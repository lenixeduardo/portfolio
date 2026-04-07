'use client'

import { RepositoryWithSlug } from '@/lib/github'
import { ProjectCard } from './ProjectCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState } from 'react'

interface ProjectsProps {
  projects: RepositoryWithSlug[]
}

export function Projects({ projects }: ProjectsProps) {
  const scrollContainer = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 400
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="projects" className="relative py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <h2 className="heading-lg mb-3">Selected Projects</h2>
          <p className="text-muted max-w-2xl">
            Detailed case studies of technical solutions built from the ground up.
          </p>
        </div>

        {/* Projects carousel - Desktop */}
        <div className="hidden md:block relative group">
          {/* Scroll container */}
          <div
            ref={scrollContainer}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="animate-fade-in-up">
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 btn-icon bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 btn-icon bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Projects grid - Mobile */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {projects.map((project, idx) => (
            <div key={project.id} style={{ animationDelay: `${idx * 0.1}s` }} className="animate-fade-in-up">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
