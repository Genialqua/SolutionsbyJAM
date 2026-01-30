import { client } from '@/lib/sanity'
import BlogPost from '@/components/BlogPost'

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

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: PageProps) {
  // ✅ Unwrap params (Next.js 16 requirement)
  const { slug } = await params

  if (!slug) return <div>Missing slug</div>

  const post = await client.fetch(postQuery, { slug })

  if (!post) return <div>Post not found</div>

  return <BlogPost post={post} />
}
