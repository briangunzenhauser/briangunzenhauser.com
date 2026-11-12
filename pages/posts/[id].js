import Head from 'next/head'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import Layout from '../../components/layout'
import Date from '../../components/date'
import PostCover from '../../components/PostCover'
import PostCard from '../../components/PostCard'
import ReadingProgress from '../../components/ReadingProgress'
import { portableTextComponents } from '../../components/portableTextComponents'
import postStyles from '../../styles/Post.module.css'
import cardStyles from '../../styles/PostCard.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { getSettings } from '../../lib/settings'

export async function getStaticProps({ params }) {
  const [postData, settings] = await Promise.all([
    getPostData(params.id),
    getSettings(),
  ])
  return {
    props: { postData, siteTitle: settings?.siteTitle || '' },
  }
}

export async function getStaticPaths() {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}


// Migrated posts open their body with an H1 repeating the title, which the
// page header already shows. Drop that first block only when it matches.
function withoutRepeatedTitle(body = [], title = '') {
  const [first, ...rest] = body
  const text = first?.style === 'h1' && first.children?.map((c) => c.text).join('')
  const normalize = (str) => str.trim().toLowerCase()
  return text && normalize(text) === normalize(title) ? rest : body
}

export default function Post({ postData, siteTitle }) {
  const { id, title, date, excerpt, coverImage, readTime, body, newer, older } = postData

  return (
    <Layout siteTitle={siteTitle}>
      <Head>
        <title>{`${title} - ${siteTitle}`}</title>
        {excerpt && <meta name="description" content={excerpt} />}
      </Head>
      <ReadingProgress />

      <article className={postStyles.post}>
        <nav className={postStyles.breadcrumb}>
          <Link href="/posts">Posts</Link>
          <span className={postStyles.separator}>&gt;</span>
          <span className={postStyles.current}>{title}</span>
        </nav>

        <header className={postStyles.hero}>
          <PostCover id={id} coverImage={coverImage} variant="hero" priority />
          <h1>{title}</h1>
          <p className={postStyles.meta}>
            <Date dateString={date} />
            <span aria-hidden="true">·</span>
            <span>{Math.max(1, readTime || 0)} min read</span>
          </p>
        </header>

        <div className={postStyles.body}>
          <PortableText value={withoutRepeatedTitle(body, title)} components={portableTextComponents} />
        </div>
      </article>

      {(newer || older) && (
        <nav className={postStyles.adjacent} aria-label="More posts">
          <div className={cardStyles.grid}>
            {newer && <PostCard post={newer} label="Newer" />}
            {older && <PostCard post={older} label="Older" />}
          </div>
        </nav>
      )}
    </Layout>
  )
}
