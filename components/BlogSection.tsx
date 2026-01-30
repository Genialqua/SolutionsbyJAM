'use client'

import Link from 'next/link'

type BlogSectionProps = {
  posts: any[]
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>

      <ul className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <li
            key={post._id}
            className="border rounded-lg p-5 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {post.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/${post.slug.current}`}
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
