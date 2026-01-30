'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-primary"
            onClick={closeMenu}
          >
            solutionsbyJAM
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/#services" className="nav-link">
              Services
            </Link>
            <Link href="/#about" className="nav-link">
              About
            </Link>
            <Link href="/#team" className="nav-link">
              Team
            </Link>
            <Link href="/#contact" className="nav-link">
              Contact
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>

            <Link
              href="/#contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/#services" onClick={closeMenu} className="nav-link">
                Services
              </Link>
              <Link href="/#about" onClick={closeMenu} className="nav-link">
                About
              </Link>
              <Link href="/#team" onClick={closeMenu} className="nav-link">
                Team
              </Link>
              <Link href="/#contact" onClick={closeMenu} className="nav-link">
                Contact
              </Link>
              <Link href="/blog" onClick={closeMenu} className="nav-link">
                Blog
              </Link>

              <Link
                href="/#contact"
                onClick={closeMenu}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-sm w-full text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
