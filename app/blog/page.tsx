import { client } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import { calculateReadingTime } from '@/lib/readingTime'

const postsQuery = `
*[_type == "post"] | order(publishedAt desc){
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage{
    asset->{
      url
    },
    alt
  },
  author->{
    name,
    image{
      asset->{
        url
      }
    }
  }
}
`

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery)

  return (
    <>
      

      <main className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12">Blog</h1>

        <div className="grid gap-12 md:grid-cols-2">
          {posts.map((post: any) => {
            const readingTime = calculateReadingTime([
              { children: [{ text: post.excerpt || '' }] },
            ])

            return (
              <Link
                key={post.slug.current}
                href={`/blog/${post.slug.current}`}
                className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-background"
              >
                {/* Preview Image */}
                {post.mainImage?.asset?.url && (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt || post.title}
                    width={800}
                    height={450}
                    className="w-full h-auto object-contain"
                  />
                )}

                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt || 'No excerpt available.'}
                  </p>

                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    {post.author?.image?.asset?.url && (
                      <Image
                        src={post.author.image.asset.url}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    )}

                    <div>
                      <p className="font-medium">{post.author?.name}</p>
                      <p>
                        {new Date(post.publishedAt).toDateString()} ·{' '}
                        {readingTime} min read
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </>
  )
}
