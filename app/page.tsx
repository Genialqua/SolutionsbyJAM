"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Team from "@/components/team"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header>
        <Navigation />
      </header>

      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
