import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Form from '../components/form'
import introStyles from '../styles/Intro.module.css'


export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact - Brian Gunzenhauser</title>
                <meta name="description" content="about Brian" />
            </Head>

            <Layout>
                <h2 className={introStyles.introHeading}>Contact. A way to reach me.</h2>
                <p>Hey there. Drop me a line, I would enjoy hearing from you.</p>
                <br />
                <br />
                <Form />
            </Layout>
        </div>
    )
}

