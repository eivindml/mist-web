import { NextPage } from "next";
import Grid, { Column, Row } from "../components/Grid";
import Footer from "../components/Footer";
// import Mist from "@eivindml/mist-animation";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <div>
    <Grid>
      <Column span={3}>Hello 3</Column>
      <Column span={3}>Hello 3</Column>
      <Column span={3}>Hello 3</Column>
      <Column span={3}>Hello 3</Column>

      <Column span={4}>Hello 4</Column>
      <Column span={4}>Hello 4</Column>
      <Column span={4}>Hello 4</Column>

      <Column span={6}>Hello 6</Column>
      <Column span={6}>Hello 6</Column>

      <Column span={8}>Hello 8</Column>
      <Column span={4}>Hello 4</Column>

      <Column span={12}>Hello 12</Column>

      <Row>
        <Column span={4}>Hello 4 - row</Column>
      </Row>

      <Row>
        <Column span={4}>Hello 4 - row</Column>
      </Row>

      <h1 className="hero__title">
        <span>Mist is a one-man studio</span>
        <span>handcrafting apps</span>
        <span>and websites.</span>
      </h1>
    </Grid>
    <Footer />
    <style jsx>{`
      .hero__title {
        font-weight: 900;
        font-size: 52px;
        line-height: 65px;
        grid-column: 2 / 10;
      }
      .hero__title :global(span) {
        display: inline-block;
        white-space: nowrap;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;
