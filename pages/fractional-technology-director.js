import Head from "next/head";
import Image from "next/image";
import fractionalStyles from "../styles/FractionalTechnologyDirector.module.css";
import Layout from "../components/layout";

export default function FractionalTechnologyDirector() {
  return (
    <div>
      <Head>
        <title>Fractional Technology Director - Brian Gunzenhauser</title>
        <meta name="description" content="about Brian" />
      </Head>

      <Layout>
        <div className={fractionalStyles.fractionalContent}>
          <div>Test test</div>
        </div>
      </Layout>
    </div>
  );
}
