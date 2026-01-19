import Link from "next/link"
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">solutionsbyJAM</h3>
            <p className="text-primary-foreground/80 text-sm">
              Transforming workplaces and developing people for sustainable
              business growth.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/services/talent-acquisition" className="hover:text-primary-foreground">
                  Talent Acquisition
                </Link>
              </li>
              <li>
                <Link href="/services/hr-consulting" className="hover:text-primary-foreground">
                  HR Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/performance-management" className="hover:text-primary-foreground">
                  Performance Management
                </Link>
              </li>
              <li>
                <Link href="/services/leadership-development" className="hover:text-primary-foreground">
                  Leadership Development
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="#about" className="hover:text-primary-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-primary-foreground">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-primary-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/workplacewithjam/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary-foreground/80"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://x.com/workplacewitJAM"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-primary-foreground/80"
              >
                <Twitter size={20} />
              </a>

               <a
                href="https://www.instagram.com/workplacewithjam?igsh=MWhvaXQ1ZDFmbTN0bA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-primary-foreground/80"
              >
                <Instagram size={20} />
              </a>

              <a
                href="mailto:workplacewithjam@gmail.com"
                aria-label="Email"
                className="hover:text-primary-foreground/80"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-sm text-primary-foreground/80 text-center">
          <p>&copy; {new Date().getFullYear()} solutionsbyJAM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
