import { client, previewClient } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/components/PortableTextComponents'
import { draftMode } from 'next/headers'
import Image from 'next/image'

const postQuery = `
*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
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

export default async function BlogPost(props: any) {
  // Unwrap params safely for Next.js 16 App Router
  const params = await props.params
  const { slug } = params

  if (!slug) return <div>Missing slug</div>

  // Use draft mode if enabled
  const { isEnabled } = await draftMode()
  const sanityClient = isEnabled ? previewClient : client

  const post = await sanityClient.fetch(postQuery, { slug })

  if (!post) return <div>Post not found</div>

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>

      {/* Published Date */}
      {post.publishedAt && (
        <p className="text-gray-500 mb-4">
          {new Date(post.publishedAt).toDateString()}
        </p>
      )}

      {/* Author */}
      {post.author && (
        <div className="flex items-center mb-6">
          {post.author.image?.asset?.url && (
            <Image
              src={post.author.image.asset.url}
              alt={post.author.name}
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
          )}
          <span className="text-gray-700 text-sm">
            By {post.author.name}
          </span>
        </div>
      )}

      {/* Featured Image */}
      {post.mainImage?.asset?.url && (
        <Image
          src={post.mainImage.asset.url}
          alt={post.mainImage.alt || post.title}
          width={800}
          height={450}
          className="my-6 rounded-lg"
        />
      )}

      {/* Body */}
      <PortableText value={post.body} components={portableTextComponents} />
    </article>
  )
}
