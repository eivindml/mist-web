import { NextPage } from "next";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
// import Mist from "@eivindml/mist-animation";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <div>
    <Layout>
      <Hero />
    </Layout>

    <Footer />
    <style jsx>{``}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;
