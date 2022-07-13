import Head from 'next/head'
import Image from 'next/image'
import BrianGunzenhauser from '../public/brian-gunzenhauser.webp'
import introStyles from '../styles/Intro.module.css'
import aboutStyles from '../styles/About.module.css'
import Layout from '../components/layout'


export default function About() {
    return (
        <div>
            <Head>
                <title>About - Brian Gunzenhauser</title>
                <meta name="description" content="about Brian" />
            </Head>

            <Layout>
                <h1 className={introStyles.introHeading}>About. <span>A few words about me.</span></h1>

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
                        <p>Hey, I'm Brian. I've been developing websites since 2002, and I facilitate sessions on web and technology.</p>
                        <p>I work at the intersection of technology, business, and education. For nearly 20 years, I've helped businesses by building, managing, or overseeing their online properties. I used that experience to develop a curriculum of website design and development courses at the Pennsylvania College of Art &amp; Design, and then taught those courses for nearly 10 years. I've also facilitated sessions on technology to fortune 500 companies to help upskill their staff to be more productive in their day-to-day roles.</p>

                        <p>I build things and enable others to do their best, and I work with calculated efficiency. I've developed in-person and online courses, created a BFA, managed a team, owned projects, and developed more websites than I can count. I love to learn, and to push myself to understand what's new and what's next.</p>
                    </div>
                </div>
            </Layout>
        </div>
    )
}