import Head from "next/head";
import Image from "next/image";
import fractionalStyles from "../styles/FractionalWebTechnologyServices.module.css";
import Layout from "../components/layout";

export default function FractionalWebTechnologyServices() {
  return (
    <div>
      <Head>
        <title>Fractional Technology Director - Brian Gunzenhauser</title>
        <meta name="description" content="about Brian" />
      </Head>

      <Layout>
        <div className={fractionalStyles.fractionalContent}>
          <h1>Fractional Web Technology Services</h1>
          <h3>
            Web technology moves fast and constantly changes. You need a
            trusted, integrated partner that can seamlessly provide various
            levels of support to meet and exceed your goals.
          </h3>

          <h3>
            <span className={fractionalStyles.fractionalHighlight}>
              <em>That&apos;s me. Here&apos;s how I can help.</em>
            </span>
          </h3>

          <div className={fractionalStyles.fractionalGrid}>
            <div>
              <h4>Fractional Technology Director</h4>
              <p>
                Helping to ensure your technology stack, processes, teams, and
                budget are fine tuned and prepared for what&apos;s next.
              </p>
              <ul>
                <li>Technology strategy and goals assessment</li>
                <li>
                  Build consensus on priorities and processes involved in
                  project execution.
                </li>
                <li>Team and resource growth and development</li>
                <li>
                  Capital allocation assessment Develop long-term goals and KPIs
                </li>
              </ul>
            </div>

            <div>
              <h4>Technology Consultant</h4>
              <p>
                Assessing the big picture and jumping in the trench during key
                projects.
              </p>
              <ul>
                <li>Project roadmap definition and management</li>
                <li>Engineering and development</li>
                <li>Team development and training strategies</li>
                <li>Systems and services assessment</li>
              </ul>
            </div>

            <div>
              <h4>Technology Educator</h4>
              <p>
                Providing tailored technology training to boost production,
                increase morale, and take your team to the next level.
              </p>
              <ul>
                <li>Discovery, goals, and skills assessments</li>
                <li>Success through well-defined learning objectives</li>
                <li>Customizable delivery frequencies</li>
                <li>On-site or remote session delivery</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="fractional-who-am-i">
          <h2>Who Am I?</h2>
          <p>
            A web technologist with 20 years experience working in nearly all
            aspects of web application development and project lifecycles.
            I&apos;ve worked in design, development, information architecture,
            marketing, and management.
          </p>
          <p>
            An educator with over 10 years experience of teaching, training, and
            mentoring in both higher education and for the Fortune 500.
            I&apos;ve created and taught curricula, led the development of a
            BFA, and deliver workshops to global multinational corporations.
          </p>

          <p>I&apos;m your technology lynchpin. Let&apos;s get started.</p>

          <button className={fractionalStyles.fractionalCTA}>
            Book a Call
          </button>
        </div>
      </Layout>
    </div>
  );
}
