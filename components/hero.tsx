"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-background -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
              Transform Your <span className="text-primary">Workforce</span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            We partner with organizations to build exceptional teams, streamline HR operations, and unlock human
            potential. Expert HR solutions tailored to your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium">
              Schedule Consultation <ArrowRight size={18} />
            </button>
            <button className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8 border-t border-border">
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Companies Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-96 md:h-full min-h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl"></div>
          <img
            src="/professional-hr-team-meeting-business-collaboratio.jpg"
            alt="HR Solutions"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
