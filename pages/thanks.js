import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import introStyles from "../styles/Intro.module.css";

export default function Thanks() {
  return (
    <div>
      <Head>
        <title>Thank You - Brian Gunzenhauser</title>
        <meta name="description" content="about Brian" />
      </Head>

      <Layout>
        <h1 className={introStyles.introHeading}>
          Thank You. <span>I&apos;ll be in touch soon.</span>
        </h1>
      </Layout>
    </div>
  );
}
