// lib/queries.ts
export const postsQuery = `
*[_type == "post" && defined(slug.current)]
| order(publishedAt desc) {
  _id,
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
