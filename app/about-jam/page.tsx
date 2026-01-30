import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About JAM",
  description:
    "Learn more about Dr. Jumoke Aleoke-Malachi, founder of SolutionsbyJAM and a leading HR, talent, and organisational culture expert in Africa.",
}

export default function AboutJAMPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      {/* Page Title */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">About JAM</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          The woman behind WorkplacewithJAM
        </p>
      </header>

      {/* Profile Section */}
      <section className="grid gap-12 md:grid-cols-2 items-start">
        {/* Image */}
        <div className="w-full">
          <Image
            src="/Dr JAM.jpg" // ⬅️ replace with actual image
            alt="Dr. Jumoke Aleoke-Malachi"
            width={600}
            height={750}
            className="w-full h-auto rounded-2xl object-cover shadow-lg"
            priority
          />
        </div>

        {/* Bio */}
        <div className="prose dark:prose-invert max-w-none text-lg leading-8">
          <p>
            <strong>Dr. Jumoke Aleoke-Malachi</strong> is a distinguished People
            practitioner with nearly two decades of experience shaping HR
            strategy, talent management, diversity and inclusion, and
            organisational culture. She is the Head of Talent Acquisition at
            Wema Bank.
          </p>

          <p>
            Passionate about career development, she actively mentors job
            seekers and experienced professionals, equipping them with the
            skills to land dream roles and thrive in the evolving workplace. A
            sought-after speaker and thought leader, she champions employee
            engagement, emotional intelligence, and agile work environments,
            helping organisations foster toxic-free, high-performing cultures.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">
          Recognition & Impact
        </h2>

        <div className="prose dark:prose-invert max-w-none text-lg leading-8">
          <p>
            Her expertise and impact have earned her numerous accolades,
            including recognition as one of <strong>Africa’s Most Talented HR
            Leaders</strong>, a <strong>Top 50 Career Influencer in Africa</strong>,
            and one of <strong>LinkedIn’s Top Voices in Career</strong>.
          </p>

          <p>
            She has been named among the <strong>Top 100 Career Women in Africa</strong>,
            <strong> 50 Leaders in Agile</strong>, and <strong>10 Influential Female
            HR Talent Management Professionals in Nigeria</strong>.
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">
          Credentials & Leadership
        </h2>

        <div className="prose dark:prose-invert max-w-none text-lg leading-8">
          <p>
            A certified <strong>Agile Coach</strong>, <strong>Emotional Intelligence
            Specialist</strong>, and <strong>Career Development Coach</strong>,
            Dr. Jumoke holds an MBA from <strong>Business School Netherlands</strong>
            and an <strong>Honorary Doctorate in Leadership and Management</strong>.
          </p>

          <p>
            As the convener of the <strong>Africa Employability Summit</strong>,
            she is dedicated to driving the future of work across the continent.
            Her leadership and advocacy continue to break barriers in HR,
            shaping workplaces where employees thrive, businesses grow, and
            careers flourish.
          </p>
        </div>
      </section>
    </main>
  )
}
