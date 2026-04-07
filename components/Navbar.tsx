'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto w-full px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="heading-sm hover:opacity-80 transition-smooth">
             Eduardo Lenix
          </Link>

          {/* Center Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/#projects"
              className="text-sm font-medium text-muted hover:text-white transition-smooth"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted hover:text-white transition-smooth"
            >
              Contact
            </Link>
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-xs"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto w-full px-4 py-4 flex items-center justify-between">
          <Link href="/" className="heading-sm text-lg hover:opacity-80 transition-smooth">
            Lenix
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn-icon hover:bg-white/[0.05]"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-white/[0.05] bg-black/95 backdrop-blur">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/#projects"
                className="block text-sm font-medium text-muted hover:text-white transition-smooth py-2"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="block text-sm font-medium text-muted hover:text-white transition-smooth py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full justify-center text-xs"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  )
}
