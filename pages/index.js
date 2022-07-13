import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import introStyles from '../styles/Intro.module.css'
import buttonStyles from '../styles/Button.module.css'
import postListStyles from '../styles/PostList.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <Head>
        <title>Home - Brian Gunzenhauser</title>
        <meta name="description" content="The personal site of Brian Gunzenhauser" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>
          <h1 className={introStyles.introHeading}>Hey, I'm Brian. <span>I work at the intersection of web technology, business, and education. I also like to run, read, write, and cook pasta on Fridays.</span></h1>


          <Link href="/about">
            <a className={buttonStyles.buttonLink}>More about me &raquo;</a>
          </Link>

          <div className={postListStyles.postList}>
            <h2>Recent Posts</h2>
            <ul>
              {allPostsData.map(({ id, title }) => (
                <li key={id} className={postListStyles.postListItem}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
