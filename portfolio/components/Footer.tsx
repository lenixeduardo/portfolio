'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.05] py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="heading-sm mb-2">Lenix Eduardo</h3>
            <p className="text-sm text-muted">
              Full Stack Developer focused on building high-performance systems.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2">
              <Link href="/#projects" className="text-sm text-muted hover:text-white transition-smooth block">
                Projects
              </Link>
              <Link href="#contact" className="text-sm text-muted hover:text-white transition-smooth block">
                Contact
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-white transition-smooth block"
              >
                Resume
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/lenixeduardo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-smooth"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/lenixeduardo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-smooth"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/xambinho"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-smooth"
                title="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:hello@lenix.dev"
                className="text-muted hover:text-white transition-smooth"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-subtle">
            <p>© {currentYear} Lenix Eduardo. Built with Obsidian Architecture.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-smooth">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-smooth">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
