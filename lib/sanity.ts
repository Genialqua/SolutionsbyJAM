import { createClient } from 'next-sanity'

// --------------------
// Published client
// --------------------
export const client = createClient({
  projectId: 'bn5dw0y8',
  dataset: 'production',
  apiVersion: '2026-01-29', // use current API version
  useCdn: true, // fetch cached content, fast
})

// --------------------
// Preview client (includes drafts)
// --------------------
export const previewClient = createClient({
  projectId: 'bn5dw0y8',
  dataset: 'production',
  apiVersion: '2026-01-29',
  useCdn: false, // always fetch latest content including drafts
  token: process.env.SANITY_API_TOKEN, // required for drafts
})


