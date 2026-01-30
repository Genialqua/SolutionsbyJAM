"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Twitter, Instagram, X } from "lucide-react"
import { client } from "@/lib/sanity"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    try {
      await client.createIfNotExists({
        _type: "subscriber",
        _id: email.toLowerCase(),
        email: email.toLowerCase(),
        subscribedAt: new Date().toISOString(),
      })
      setStatus("success")
      setEmail("")
      setShowModal(true)
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">solutionsbyJAM</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Transforming workplaces and developing people for sustainable
              business growth.
            </p>
          </div>

          {/* Company */}
          <nav aria-label="Company">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/about-jam" className="hover:text-primary-foreground">
                  About JAM
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-primary-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-primary-foreground/80 mb-3">
              Get insights on careers, HR strategy & the future of work.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                name="EMAIL"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full rounded-md px-3 py-2 text-sm
                  bg-transparent text-primary-foreground
                  placeholder:text-primary-foreground/60
                  border border-primary-foreground
                  focus:outline-none focus:ring-2 focus:ring-primary-foreground/60
                "
              />
              <button
                type="submit"
                className="
                  bg-primary-foreground text-primary
                  px-4 py-2 rounded-md text-sm font-medium
                  hover:opacity-90 transition-opacity
                "
              >
                Join
              </button>
            </form>

            {status === "error" && (
              <p className="mt-2 text-red-400 text-sm">Something went wrong. Try again.</p>
            )}
          </div>

          {/* Mini Author Card */}
          <div>
            <h4 className="font-semibold mb-4">Meet JAM</h4>
            <div className="flex items-center gap-4">
              <Image
                src="/Dr JAM.jpg"
                alt="Dr Jumoke Aleoke-Malachi"
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">
                  Dr. Jumoke Aleoke-Malachi
                </p>
                <p className="text-xs text-primary-foreground/80">
                  HR Leader · Career Coach · Speaker
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/80">
          <p>© {new Date().getFullYear()} solutionsbyJAM. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/workplacewithjam/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/workplacewitJAM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.instagram.com/workplacewithjam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a href="mailto:workplacewithjam@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full relative text-center">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-2">Subscription Successful!</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Thank you for subscribing to our newsletter. You'll start receiving updates soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  )
}
