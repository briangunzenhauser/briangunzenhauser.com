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
            <p>
              Hey, I&apos;m Brian. I design learning experiences and facilitate workshops that help organizations understand emerging technologies.
            </p>
            <p>For the past 7 years, I&apos;ve facilitated workshops on AI, Data Science, and digital innovation for Fortune 500 companies like Mastercard, HSBC, and IBM. I translate complex technical concepts into engaging, actionable learning.</p>
            <p>Before that, I spent 10 years as an assistant professor at Pennsylvania College of Art &amp; Design, where I developed curriculum and taught web technology to design students. I also led the development of a new BFA program from concept to launch.</p>
            <p>With 20+ years of building web applications, I understand technology at a fundamental level. When I facilitate, I can separate signal from noise and focus on what people actually need to know.</p>
            <p>Whether I&apos;m designing curriculum, facilitating a workshop, or developing a program, I&apos;m driven by making complexity clear and watching people connect the dots.</p> 
          </div>
        </div>
      </Layout>
    </div>
  );
}
