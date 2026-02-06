import Head from "next/head";
import Image from "next/image";
import BrianGunzenhauser from "../public/brian-gunzenhauser.png";
import introStyles from "../styles/Intro.module.css";
import aboutStyles from "../styles/About.module.css";
import Layout from "../components/layout";

export default function About() {
  return (
    <div>
      <Head>
        <title>About - Brian Gunzenhauser</title>
        <meta name="description" content="about Brian" />
      </Head>

      <Layout>
        <h1 className={introStyles.introHeading}>
          About. <span>A few words about me.</span>
        </h1>

        <div className={aboutStyles.aboutContent}>
          <div>
            <Image
              src={BrianGunzenhauser}
              alt="Picture of Brian Gunzenhauser"
              width={200}
              height={200}
              // width={500} automatically provided
              // height={500} automatically provided
              // blurDataURL="data:..." automatically provided
              placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <div>
            <p>Hey, I&rsquo;m Brian. I do two things: build digital solutions and help organizations understand complex technology. I&rsquo;m most effective when I&rsquo;m doing both.</p>

            <p>For the past 20+ years, I&rsquo;ve run parallel careers that feed each other.</p>

            <p>Through Box &amp; Pixel, I help clients think through digital strategy&mdash;SEO implications, UX considerations, technical architecture&mdash;then build the solution with WordPress, custom development, and AI-accelerated workflows. I lead technical discovery, develop proofs of concept, respond to RFPs, and architect solutions from pre-sale through delivery. My WordPress expertise runs deep: enterprise patterns, complex migrations, performance optimization for high-traffic sites, managed hosting environments.</p>

            <p>Through Decoded, I facilitate workshops on emerging tech (AI, Data Science, Blockchain) for Fortune 500 leadership teams at companies like Mastercard, HSBC, and IBM.</p>

            <p>Before that, I taught web technology at Pennsylvania College of Art &amp; Design for over a decade, developed a new BFA program from concept to launch, and served on their Board of Trustees.</p>

            <p>Here&rsquo;s my edge: I maintain active, parallel practices in both development and education, and have for 18+ years. I&rsquo;m hands-on with code and hands-on with people, continuously. I teach AI implementation because I&rsquo;m using AI tools in client projects daily. I can facilitate strategic conversations with executives because I understand what&rsquo;s actually hard about execution. Each practice makes me better at the other.</p>

            <p>Too much facilitation and I need to build something. Too much building and I need to work with people. I can architect technical solutions and explain them to non-technical stakeholders. I understand learning because I&rsquo;ve struggled through the same technical problems I&rsquo;m teaching.</p>

            <p>I&rsquo;m drawn to work where strategic thinking and technical execution overlap&mdash;whether that&rsquo;s solutions engineering, technical consulting, developer relations, or building and teaching.</p>

            <h2>What I Bring</h2>
            <ul>
            <li>20+ years WordPress development (enterprise architecture, migrations, performance optimization)</li>
            <li>18+ years technical education and workshop facilitation</li>
            <li>Fortune 500 stakeholder communication</li>
            <li>End-to-end project perspective from pre-sale through delivery</li>
            </ul>

            <p>Let&rsquo;s connect if you need someone who builds web solutions and translates between technical and human.</p>
          </div>
        </div>
      </Layout>
    </div>
  );
}
