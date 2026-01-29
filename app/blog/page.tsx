import { client } from '@/lib/sanity'
import { postsQuery } from '@/lib/queries'
import Link from 'next/link'
import Image from 'next/image'

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery)

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>

      <ul className="grid gap-10">
        {posts.map((post: any) => (
          <li key={post._id} className="border-b pb-8">
            <Link href={`/blog/${post.slug.current}`}>

              {/* Featured image */}
              {post.mainImage?.asset?.url && (
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  width={800}
                  height={450}
                  className="rounded-lg mb-4"
                />
              )}

              {/* Title */}
              <h2 className="text-2xl font-semibold mb-2">
                {post.title}
              </h2>

              {/* Published date */}
              {post.publishedAt && (
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.publishedAt).toDateString()}
                </p>
              )}

              {/* Author */}
              {post.author && (
                <div className="flex items-center mb-4">
                  {post.author.image?.asset?.url && (
                    <Image
                      src={post.author.image.asset.url}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-2"
                    />
                  )}
                  <span className="text-gray-700 text-sm">
                    By {post.author.name}
                  </span>
                </div>
              )}

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-gray-700 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
