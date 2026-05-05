import { createClient } from 'next-sanity'
import { postsQuery, postSlugsQuery, postQuery } from '../src/sanity/lib/queries'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-05-05',
  useCdn: false,
})

export async function getSortedPostsData() {
  return client.fetch(postsQuery)
}

export async function getAllPostIds() {
  const posts = await client.fetch(postSlugsQuery)
  return posts.map(({ id }) => ({ params: { id } }))
}

export async function getPostData(slug) {
  return client.fetch(postQuery, { slug })
}
