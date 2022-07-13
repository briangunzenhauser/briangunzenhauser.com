import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Date from '../../components/date'
import Layout from '../../components/layout'
import introStyles from '../../styles/Intro.module.css'
import postListStyles from '../../styles/PostList.module.css'
import { getSortedPostsData } from '../../lib/posts'


export default function Posts({ allPostsData }) {
    return (
        <div>
            <Head>
                <title>Posts - Brian Gunzenhauser</title>
                <meta name="description" content="about Brian" />
            </Head>

            <Layout>
                <h1 className={introStyles.introHeading}>Posts. <span>Thoughts on the web, technology, facilitation, and life.</span></h1>

                <div className={postListStyles.postList}>
                    <h2>All Posts</h2>
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
