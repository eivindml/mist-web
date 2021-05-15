import { NextPage } from "next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Sections from "../components/Sections";
import Values from "../components/Values";

const Home: NextPage = () => (
  <div>
    <div className="home__main bg-beige">
      <Layout>
        <div className="mx-4">
          <Hero />
        </div>
        <div className="home__section mx-4">
          <Sections />
        </div>
        <div className="mx-4">
          <Values />
        </div>
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
