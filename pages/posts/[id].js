import { PortableText } from '@portabletext/react'
import Layout from '../../components/layout'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import Date from '../../components/date'
import postStyles from '../../styles/Post.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { getSettings } from '../../lib/settings'

const portableTextComponents = {
  types: {
    youtube: YoutubeEmbed,
  },
}

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

export default function Post({ postData, siteTitle }) {
  return (
    <Layout siteTitle={siteTitle}>
      <div className={postStyles.post}>
        <Date dateString={postData.date} />
        <br />
        <PortableText value={postData.body} components={portableTextComponents} />
      </div>
    </Layout>
  )
}
