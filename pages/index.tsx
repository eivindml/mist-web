import { NextPage } from "next";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Sections from "../components/Sections";
import Values from "../components/Values";
// import Mist from "@eivindml/mist-animation";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <div>
    <div className="home__main">
      <Layout>
        <Hero />
        <div className="home__section">
          <Sections />
        </div>
        <Values />
      </Layout>
    </div>

    <div className="home__footer">
      <Footer />
    </div>
    <style jsx>{`
      .home__main {
        background-color: #fffefa;
        min-height: 100vh;
        box-shadow: 0px 10px 75px black;
        z-index: 2;
        position: relative;
        padding-bottom: calc(var(--line-height) * 10);
      }

      .home__section {
        margin-bottom: calc(var(--line-height) * 8);
      }

      .home__footer {
        position: sticky;
        bottom: 0;
        left: 0;
        right: 0;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;
