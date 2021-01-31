import { NextPage } from "next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Sections from "../components/Sections";
import Values from "../components/Values";

const Home: NextPage = () => (
  <div>
    <div className="home__main bg-beige">
      <Layout>
        <Hero />
        <div className="home__section">
          <Sections />
        </div>
        <Values />
      </Layout>
    </div>

    <style jsx>{`
      .home__section {
        margin-bottom: calc(var(--line-height) * 8);
      }
    `}</style>
  </div>
);

export default Home;
