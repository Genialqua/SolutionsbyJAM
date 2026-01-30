'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const closeMenu = () => setIsOpen(false)

  // Handle transparent → solid on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active link helper
  const linkClass = (href: string) =>
    `nav-link transition-colors ${
      pathname === href
        ? 'text-primary font-semibold'
        : 'text-foreground/80 hover:text-primary'
    }`

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur border-b border-border'
          : 'bg-transparent'
      }`}
    >
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
            <Link href="/about-jam" className={linkClass('/about-jam')}>
              About JAM
            </Link>

            <Link href="/#services" className="nav-link">
              Services
            </Link>

            <Link href="/#about" className="nav-link">
              WorkplacewithJAM
            </Link>

            <Link href="/#team" className="nav-link">
              Team
            </Link>

            <Link href="/#contact" className="nav-link">
              Contact
            </Link>

            <Link href="/blog" className={linkClass('/blog')}>
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
          <div className="md:hidden pb-4 border-t border-border bg-background">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="/about-jam"
                onClick={closeMenu}
                className={linkClass('/about-jam')}
              >
                About JAM
              </Link>

              <Link href="/#services" onClick={closeMenu} className="nav-link">
                Services
              </Link>

              <Link href="/#about" onClick={closeMenu} className="nav-link">
                WorkplacewithJAM
              </Link>

              <Link href="/#team" onClick={closeMenu} className="nav-link">
                Team
              </Link>

              <Link href="/#contact" onClick={closeMenu} className="nav-link">
                Contact
              </Link>

              <Link
                href="/blog"
                onClick={closeMenu}
                className={linkClass('/blog')}
              >
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
