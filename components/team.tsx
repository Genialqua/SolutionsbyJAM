"use client"

import { Card } from "@/components/ui/card"

export default function Team() {
  const team = [
    {
      name: "Dr. Jumoke Aleoke-Malachi",
      role: "Chief Executive Officer",
      bio: "Strategic HR leader with 15+ years driving organizational transformation.",
      image: "/Dr JAM.jpg",
    },
    {
      name: "Nkem Emenike",
      role: "Talent Acquisition",
      bio: "Recruitment specialist focused on building high-performing teams.",
      image: "/Nkem Emenike.png",
    },
    {
      name: "Blessing Ofoga",
      role: "Senior HR Consultant",
      bio: "Expert in organizational development and leadership coaching.",
      image: "/Blessing Ofoga.png",
    },
   
  ]

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced HR professionals dedicated to your organization's success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
