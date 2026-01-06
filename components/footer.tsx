"use client"

import Link from "next/link"
import { Mail, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">solutionsbyJAM</h3>
            <p className="text-primary-foreground/80 text-sm">
              Transforming workplaces and developing people for sustainable business growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Talent Acquisition
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  HR Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Performance Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Leadership Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-sm text-primary-foreground/80 text-center">
          <p>&copy; 2026 solutionsbyJAM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
