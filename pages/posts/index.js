import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { createClient } from 'next-sanity'
import Layout from '../../components/layout'
import introStyles from '../../styles/Intro.module.css'
import postListStyles from '../../styles/PostList.module.css'
import { getSortedPostsData } from '../../lib/posts'
import { getSettings } from '../../lib/settings'
import { pageQuery } from '../../src/sanity/lib/queries'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-05-05',
  useCdn: false,
})

export default function Posts({ page, allPostsData, siteTitle }) {
  return (
    <div>
      <Head>
        <title>{`Posts - ${siteTitle}`}</title>
        <meta name="description" content="Posts by Brian Gunzenhauser" />
      </Head>

      <Layout siteTitle={siteTitle}>
        <h1 className={introStyles.introHeading}>
          {page.introHeading} <span>{page.introSubheading}</span>
        </h1>

        <div className={postListStyles.postList}>
          <h2>All Posts</h2>
          <ul>
            {allPostsData.map(({ id, title }) => (
              <li key={id} className={postListStyles.postListItem}>
                <Link href={`/posts/${id}`}>{title}<ArrowRight size={16} strokeWidth={2} className={postListStyles.arrow} /></Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const [page, allPostsData, settings] = await Promise.all([
    client.fetch(pageQuery, { slug: 'posts' }),
    getSortedPostsData(),
    getSettings(),
  ])
  return {
    props: { page, allPostsData, siteTitle: settings?.siteTitle || '' },
  }
}
