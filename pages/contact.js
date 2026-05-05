import Head from 'next/head'
import { createClient } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import Layout from '../components/layout'
import Form from '../components/form'
import introStyles from '../styles/Intro.module.css'
import { getSettings } from '../lib/settings'
import { pageQuery } from '../src/sanity/lib/queries'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-05-05',
  useCdn: false,
})

export default function Contact({ page, siteTitle }) {
  return (
    <div>
      <Head>
        <title>Contact - {siteTitle}</title>
        <meta name="description" content="Contact Brian Gunzenhauser" />
      </Head>

      <Layout siteTitle={siteTitle}>
        <h1 className={introStyles.introHeading}>
          {page.introHeading} <span>{page.introSubheading}</span>
        </h1>
        {page.body && <PortableText value={page.body} />}
        <br />
        <Form />
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const [page, settings] = await Promise.all([
    client.fetch(pageQuery, { slug: 'contact' }),
    getSettings(),
  ])
  return {
    props: { page, siteTitle: settings?.siteTitle || '' },
  }
}
