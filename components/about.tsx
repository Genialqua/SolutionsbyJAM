"use client"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl"></div>
            <img
              src="/professional-hr-team-office-environment.jpg"
              alt="About solutionsbyJAM"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are WorkplacewithJAM a solutionsbyJAM company and a premier HR consulting firm dedicated to transforming workplaces and developing
                people. For over 15 years, we've partnered with organizations of all sizes to unlock their human
                potential and drive sustainable business growth.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Expert-Driven Approach</h3>
                  <p className="text-muted-foreground">
                    Our team brings decades of collective HR expertise and industry best practices to every engagement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Customized Solutions</h3>
                  <p className="text-muted-foreground">
                    We don't believe in one-size-fits-all. Every solution is tailored to your unique business needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                  <p className="text-muted-foreground">
                    Our clients see measurable improvements in retention, performance, and organizational health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
