"use client"

import { Users, Briefcase, TrendingUp, Target, Search, BookOpen } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Talent Acquisition",
      description:
        "Find and recruit the right talent for your organization with our comprehensive sourcing and screening process.",
    },
    {
      icon: Briefcase,
      title: "HR Consulting",
      description:
        "Strategic HR planning and organizational development to align your people strategy with business goals.",
    },
    {
      icon: TrendingUp,
      title: "Performance Management",
      description: "Build high-performing teams with our proven performance evaluation and development frameworks.",
    },
    {
      icon: Target,
      title: "Leadership Development",
      description: "Cultivate future leaders through targeted coaching, mentoring, and executive development programs.",
    },
    {
      icon: Search,
      title: "Compliance & Legal",
      description: "Stay compliant with labor laws and regulations with our expert HR legal and compliance guidance.",
    },
    {
      icon: BookOpen,
      title: "Training & Development",
      description: "Enhance employee skills and engagement with customized training and development initiatives.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive HR solutions designed to drive organizational excellence and employee success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow group">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
