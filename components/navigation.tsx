"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">solutionsbyJAM</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary transition-colors">
              Team
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#team" className="text-sm font-medium hover:text-primary transition-colors">
                Team
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-sm w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
