import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/components/PortableTextComponents'
import { calculateReadingTime } from '@/lib/readingTime'

type BlogPostProps = {
  post: any
}

export default function BlogPost({ post }: BlogPostProps) {
  const readingTime = calculateReadingTime(post.body)

  return (
    <article className="max-w-3xl mx-auto px-4 py-10 text-gray-900 dark:text-gray-100">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {/* Author + Meta */}
      <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
        {post.author?.image?.asset?.url && (
          <Image
            src={post.author.image.asset.url}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}

        <div>
          <p className="font-medium text-gray-800 dark:text-gray-200">
            {post.author?.name}
          </p>
          <p>
            {new Date(post.publishedAt).toDateString()} · {readingTime} min read
          </p>
        </div>
      </div>

      {/* Featured/Main Image (Responsive) */}
      {post.mainImage?.asset?.url && (
  <Image
    src={post.mainImage.asset.url}
    alt={post.mainImage.alt || post.title}
    width={1200}           // natural width
    height={675}           // natural height
    className="my-6 rounded-lg w-full h-auto object-contain"
    priority
  />
)}

      {/* Body Content */}
      <div className="prose dark:prose-invert max-w-none">
        <PortableText
          value={post.body}
          components={portableTextComponents}
        />
      </div>
    </article>
  )
}
