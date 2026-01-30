import HomeClient from '@/components/HomeClient'
import { client } from '@/lib/sanity'
import { postsQuery } from '@/lib/queries'

export default async function HomePage() {
  const posts = await client.fetch(postsQuery)

  return <HomeClient posts={posts} />
}
