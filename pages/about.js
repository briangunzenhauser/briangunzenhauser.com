import Head from 'next/head'
import Image from 'next/image'
import { createClient } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import Layout from '../components/layout'
import introStyles from '../styles/Intro.module.css'
import aboutStyles from '../styles/About.module.css'
import { urlFor } from '../src/sanity/lib/image'
import { getSettings } from '../lib/settings'
import { pageQuery } from '../src/sanity/lib/queries'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-05-05',
  useCdn: false,
})

export default function About({ page, siteTitle }) {
  return (
    <div>
      <Head>
        <title>{`About - ${siteTitle}`}</title>
        <meta name="description" content="about Brian" />
      </Head>

      <Layout siteTitle={siteTitle}>
        <h1 className={introStyles.introHeading}>
          {page.introHeading} <span>{page.introSubheading}</span>
        </h1>

        <div className={aboutStyles.aboutContent}>
          {page.image && (
            <div>
              <Image
                src={urlFor(page.image).width(200).height(200).url()}
                alt={page.image.alt || ''}
                width={200}
                height={200}
                placeholder="blur"
                blurDataURL={urlFor(page.image).width(20).height(20).blur(10).url()}
              />
            </div>
          )}
          <div>
            {page.body && <PortableText value={page.body} />}
          </div>
        
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const [page, settings] = await Promise.all([
    client.fetch(pageQuery, { slug: 'about' }),
    getSettings(),
  ])
  return {
    props: { page, siteTitle: settings?.siteTitle || '' },
  }
}
