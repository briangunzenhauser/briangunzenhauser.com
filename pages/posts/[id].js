import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import postStyles from '../../styles/Post.module.css'

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
    return (
        <Layout>
            <div className={postStyles.post}>
                <Date dateString={postData.date} />
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>
        </Layout>
    );
}