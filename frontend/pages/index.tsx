import { NextPage } from "next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Sections from "../components/Sections";
import Values from "../components/Values";

const Home: NextPage = () => (
  <div>
    <div className="bg-beige">
      <Layout noTopPadding>
        <div className="">
          <Hero />
        </div>
        <div className="mb-32 md:mb-48 lg:mb-64">
          <Sections />
        </div>
        <div className="">
          <Values />
        </div>
      </Layout>
    </div>
  </div>
);

export default Home;
