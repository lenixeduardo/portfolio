'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 glass rounded-2xl p-8 md:p-12 text-center">
          <h2 className="heading-lg mb-4 animate-fade-in-up">Interested in a project?</h2>

          {/* Email CTA */}
          <a
            href="mailto:lenix.camargo@gmail.com"
            className="inline-block mb-12 animate-fade-in-up group"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="text-2xl md:text-4xl font-bold font-space-grotesk group-hover:text-emerald-400 transition-smooth">
              lenix.camargo@gmail.com
            </div>
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="https://github.com/lenixeduardo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon glass group hover:bg-white/10"
              title="GitHub"
            >
              <Github size={20} className="group-hover:scale-110 transition-smooth" />
            </a>
            <a
              href="https://linkedin.com/in/lenixeduardo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon glass group hover:bg-white/10"
              title="LinkedIn"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-smooth" />
            </a>
            
            <a
              href="mailto:lenix.camargo@gmail.com"
              className="btn-icon glass group hover:bg-white/10"
              title="Email"
            >
              <Mail size={20} className="group-hover:scale-110 transition-smooth" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
