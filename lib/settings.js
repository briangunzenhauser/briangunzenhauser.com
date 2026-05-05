import { createClient } from 'next-sanity'
import { settingsQuery } from '../src/sanity/lib/queries'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-05-05',
  useCdn: false,
})

export async function getSettings() {
  return client.fetch(settingsQuery)
}
