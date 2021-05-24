import { NextPage } from "next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Sections from "../components/Sections";
import Values from "../components/Values";
import { NextSeo } from "next-seo";

const Home: NextPage = () => (
  <div>
    <NextSeo
      title="Mist"
      description="Mist is a one-man studio handcrafting apps and websites."
      canonical="https://madebymist.com"
      openGraph={{
        url: "https://madebymist.com",
        title: "Mist–a one-man studio",
        description: "Mist is a one-man studio handcrafting apps and websites.",
        images: [
          {
            url: "https://madebymist.com/social.png",
            width: 1200,
            height: 600,
            alt: "Social sharing image for the Mist website",
          },
        ],
        site_name: "Mist",
      }}
      twitter={{
        handle: "@eivindml",
        site: "@eivindml",
        cardType: "summary_large_image",
      }}
    />
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
