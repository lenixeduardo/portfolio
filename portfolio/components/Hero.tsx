'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-20">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="animate-fade-in-up mb-8">
          <div className="inline-flex items-center gap-2 glass px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="badge-accent">Available for hire</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1
          className="heading-display animate-fade-in-up mb-6"
          style={{ animationDelay: '0.1s' }}
        >
          I build systems that solve{' '}
          <span className="relative">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
              real-world problems.
            </span>
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Full Stack Developer focused on performance, scalability, and clean architecture.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Link href="/#projects" className="btn btn-primary group">
            View My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-smooth" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white/20 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
