import Head from 'next/head'
import { createClient } from 'next-sanity'
import Layout from '../components/layout'
import Button from '../components/Button'
import introStyles from '../styles/Intro.module.css'
import postListStyles from '../styles/PostList.module.css'
import cardStyles from '../styles/PostCard.module.css'
import PostCard from '../components/PostCard'
import { getSortedPostsData } from '../lib/posts'
import { getSettings } from '../lib/settings'
import { pageQuery } from '../src/sanity/lib/queries'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-05-05',
  useCdn: false,
})

export default function Home({ page, allPostsData, siteTitle }) {
  return (
    <div className="container">
      <Head>
        <title>{`Home - ${siteTitle}`}</title>
        <meta name="description" content="The personal site of Brian Gunzenhauser" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout siteTitle={siteTitle}>
        <div>
          <h1 className={introStyles.introHeading}>
            {page.introHeading} <span>{page.introSubheading}</span>
          </h1>



          <div className={postListStyles.postList}>
            <h2 className={postListStyles.eyebrow}>
              <span aria-hidden="true">// </span>Recent
            </h2>
            <div className={cardStyles.grid}>
              {allPostsData.slice(0, 3).map((post) => (
                <PostCard key={post.id} post={post} frameless />
              ))}
            </div>
          </div>

          {page.ctaLabel && page.ctaLink && (
            <Button href={page.ctaLink}>{page.ctaLabel}</Button>
          )}          
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const [page, allPostsData, settings] = await Promise.all([
    client.fetch(pageQuery, { slug: 'home' }),
    getSortedPostsData(),
    getSettings(),
  ])
  return {
    props: { page, allPostsData, siteTitle: settings?.siteTitle || '' },
  }
}
